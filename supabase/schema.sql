-- ====================================================================
-- KaiRose Luxury Interior Studio - Supabase Schema
-- Run this in your Supabase SQL Editor to initialize the database
-- ====================================================================

-- 1. Homepage Hero Content
CREATE TABLE IF NOT EXISTS public.homepage_hero (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  brand_title TEXT NOT NULL DEFAULT 'KAIROSE',
  brand_tagline TEXT NOT NULL DEFAULT 'INTERIOR DESIGN STUDIO FOR TIMELESS SPACES',
  headline TEXT NOT NULL DEFAULT 'Redefining Luxury Interiors.',
  description TEXT NOT NULL DEFAULT 'Bespoke spaces shaped around your lifestyle, bringing together considered materials, purposeful details and timeless design.',
  cta_text TEXT NOT NULL DEFAULT 'Book A Consultation',
  images JSONB NOT NULL DEFAULT '[]'::jsonb,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Services
CREATE TABLE IF NOT EXISTS public.services (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT DEFAULT 'Architecture',
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  badge TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Popular Designs (Portfolio items)
CREATE TABLE IF NOT EXISTS public.popular_designs (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Living', 'Kitchen', 'Bedroom', 'Wardrobe', 'Dining')),
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  cta_text TEXT DEFAULT 'Make it Yours',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Testimonials
CREATE TABLE IF NOT EXISTS public.testimonials (
  id TEXT PRIMARY KEY,
  client_name TEXT NOT NULL,
  client_role TEXT NOT NULL,
  quote TEXT NOT NULL,
  video_thumbnail TEXT NOT NULL,
  video_url TEXT,
  cta_text TEXT DEFAULT 'Begin Your Journey',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. FAQs
CREATE TABLE IF NOT EXISTS public.faqs (
  id TEXT PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS) for public read access
ALTER TABLE public.homepage_hero ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.popular_designs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on homepage_hero" ON public.homepage_hero FOR SELECT USING (true);
CREATE POLICY "Allow public read access on services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Allow public read access on popular_designs" ON public.popular_designs FOR SELECT USING (true);
CREATE POLICY "Allow public read access on testimonials" ON public.testimonials FOR SELECT USING (true);
CREATE POLICY "Allow public read access on faqs" ON public.faqs FOR SELECT USING (true);
