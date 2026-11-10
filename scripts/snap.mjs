import { spawn } from 'child_process';
import fs from 'fs';

const url = process.argv[2] || 'http://localhost:3000/';
const outPath = process.argv[3] || '/Users/abhiram/.gemini/antigravity/brain/b227a19c-1668-42f9-ad22-190c0e80f70d/cdp_snap.png';
const width = parseInt(process.argv[5] || '1440', 10);
const height = parseInt(process.argv[6] || '1100', 10);

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9222',
  '--user-data-dir=/tmp/chrome_snap_profile_' + Date.now(),
  '--disable-gpu',
  `--window-size=${width},${height}`
]);

// Wait for Chrome to boot
await new Promise(r => setTimeout(r, 1200));

// Create a new target page
const newRes = await fetch('http://127.0.0.1:9222/json/new?' + encodeURIComponent(url), { method: 'PUT' });
const target = await newRes.json();
const wsUrl = target.webSocketDebuggerUrl;

const ws = new WebSocket(wsUrl);

await new Promise(resolve => ws.onopen = resolve);

let id = 1;
function send(method, params = {}) {
  const currentId = id++;
  return new Promise(resolve => {
    const handler = (evt) => {
      const msg = JSON.parse(evt.data);
      if (msg.id === currentId) {
        ws.removeEventListener('message', handler);
        resolve(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: currentId, method, params }));
  });
}

await send('Page.enable');
await send('Runtime.enable');

// Wait 2.5 seconds for animations & Lenis to settle
await new Promise(r => setTimeout(r, 2500));

const scrollArg = process.argv[4] || '0';
if (scrollArg.startsWith('#')) {
  await send('Runtime.evaluate', { expression: `document.querySelector('${scrollArg}')?.scrollIntoView({ behavior: 'instant', block: 'start' });` });
  await new Promise(r => setTimeout(r, 1200));
} else if (parseInt(scrollArg, 10) > 0) {
  await send('Runtime.evaluate', { expression: `window.scrollTo({ top: ${parseInt(scrollArg, 10)}, behavior: 'instant' });` });
  await new Promise(r => setTimeout(r, 800));
}

const screenshotResult = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(outPath, Buffer.from(screenshotResult.data, 'base64'));
console.log('Saved screenshot to:', outPath);

ws.close();
chrome.kill();
