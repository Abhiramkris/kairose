export interface VideoTestimonial {
  id: string;
  family: string;
  property: string;
  location: string;
  quote: string;
  duration: string;
  thumbnail: string;
  videoPlaceholderUrl: string;
}

export interface TextChronicle {
  id: string;
  quote: string;
  author: string;
  location: string;
}

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "sharma-family",
    family: "The Sharma Family",
    property: "Palm Jumeirah Penthouse",
    location: "Palm Jumeirah, Dubai",
    quote: "They didn’t just design our home; they understood our lifestyle.",
    duration: "2:30",
    thumbnail: "/images/hero1/videoframe_7092.png",
    videoPlaceholderUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "kapoor-villa",
    family: "The Kapoor Villa",
    property: "Emirates Hills Villa",
    location: "Emirates Hills, Dubai",
    quote: "The white-glove service made the entire process stress-free.",
    duration: "3:15",
    thumbnail: "/images/hero1/744469be222c35c89679dab0fece57e1548d5b5a-8448x5770.avif",
    videoPlaceholderUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "mehta-penthouse",
    family: "The Mehta Penthouse",
    property: "Downtown Penthouse",
    location: "Downtown Dubai",
    quote: "They designed a home we never want to leave.",
    duration: "2:45",
    thumbnail: "/images/hero1/videoframe_1439.png",
    videoPlaceholderUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "iyer-townhouse",
    family: "The Iyer Townhouse",
    property: "Downtown Townhouse",
    location: "Downtown Dubai",
    quote: "Every floor was tailored to our family's rhythm with hidden elegance.",
    duration: "2:00",
    thumbnail: "/images/hero1/b0164608867e856c07c82428c576338b3ad41c9b-5400x4084.avif",
    videoPlaceholderUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "nair-villa",
    family: "The Nair Villa",
    property: "Arabian Ranches Villa",
    location: "Arabian Ranches, Dubai",
    quote: "The transition from concept renderings to the finished build was flawless.",
    duration: "3:00",
    thumbnail: "/images/hero1/20f291b13682b88ac6159f8b25f69d05c38387f7-5400x4029.avif",
    videoPlaceholderUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  },
];

export const clientChronicles: TextChronicle[] = [
  {
    id: "chronicle-1",
    quote: "KaiRose transformed our villa into a masterpiece. The attention to detail was beyond anything we imagined. They finished ahead of schedule.",
    author: "Rohit & Shveta",
    location: "Emirates Hills",
  },
  {
    id: "chronicle-2",
    quote: "Our experience was seamless. The design team understood our vision perfectly. They designed a home we never want to leave.",
    author: "Swati & Gaurav",
    location: "Palm Jumeirah",
  },
  {
    id: "chronicle-3",
    quote: "KaiRose delivered a level of luxury we didn’t know was possible. The bespoke furniture and material palette are stunning.",
    author: "Puja Bhatia",
    location: "Downtown Dubai",
  },
];
