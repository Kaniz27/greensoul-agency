// src/services/api.ts
import { Service, CaseStudy, Blog, Testimonial, TeamMember, User } from '../types';

// Simple delay function to simulate async API
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// ---------------- HERO SLIDER ----------------
export const fetchHeroSlider = async () => {
  await delay(500);
  return [
    {
      id: 1,
      image: 'https://picsum.photos/id/20/1920/1080',
      title: 'Boost Your Online Presence',
      subtitle: 'SEO, PPC, Social Media Marketing',
    },
    {
      id: 2,
      image: 'https://picsum.photos/id/1/1920/1080',
      title: 'Creative Digital Strategies',
      subtitle: 'Tailored Marketing Campaigns',
    },
    {
      id: 3,
      image: 'https://picsum.photos/id/2/1920/1080',
      title: 'Analytics & Growth',
      subtitle: 'Measurable Results for Your Business',
    },
  ];
};

// ---------------- SERVICES ----------------
export const fetchServices = async (): Promise<Service[]> => {
  await delay(500);
  return [
    { id: '1', title: 'Facebook Marketing', slug: 'facebook-marketing', description: 'Strategic Facebook marketing to grow brand awareness, reach, and sales.', image: 'https://picsum.photos/seed/facebook1/600/400' },
    { id: '2', title: 'Facebook Marketing Setup & Boosting', slug: 'facebook-setup-boosting', description: 'Complete Facebook ads setup and boosting with proper targeting and budget control.', image: 'https://picsum.photos/seed/facebook2/600/400' },
    { id: '3', title: 'Facebook Business Page Setup', slug: 'facebook-page-setup', description: 'Professional Facebook business page setup maintaining country standard.', image: 'https://picsum.photos/seed/facebook3/600/400' },
    { id: '4', title: 'Logo Design', slug: 'logo-design', description: 'Unique and professional logo design to represent your brand identity.', image: 'https://picsum.photos/seed/logo/600/400' },
    { id: '5', title: 'Regular Post Boost', slug: 'regular-post-boost', description: 'Regular Facebook post boosting to increase reach and engagement.', image: 'https://picsum.photos/seed/postboost/600/400' },
    { id: '6', title: 'FB Group Share', slug: 'fb-group-share', description: 'Targeted Facebook group sharing for product and service promotion.', image: 'https://picsum.photos/seed/group/600/400' },
    { id: '7', title: 'Customer Funnel Setup', slug: 'customer-funnel-setup', description: 'Customer funnel setup from awareness to conversion and retargeting.', image: 'https://picsum.photos/seed/funnel/600/400' },
    { id: '8', title: 'Data Layer Setup', slug: 'data-layer-setup', description: 'Advanced data layer setup for accurate tracking and analytics.', image: 'https://picsum.photos/seed/datalayer/600/400' },
    { id: '9', title: 'Google Tag Manager Integration', slug: 'gtm-integration', description: 'Google Tag Manager integration for analytics, pixels, and events.', image: 'https://picsum.photos/seed/gtm/600/400' },
    { id: '10', title: 'Design & Creative', slug: 'design-creative', description: 'Creative design solutions for ads, branding, and marketing campaigns.', image: 'https://picsum.photos/seed/creative/600/400' },
    { id: '11', title: 'Product Banner Design', slug: 'product-banner-design', description: 'High-quality product banner design for ads and promotions (per design).', image: 'https://picsum.photos/seed/productbanner/600/400' },
    { id: '12', title: 'Service Banner Design', slug: 'service-banner-design', description: 'Attractive service banner design to promote services (per design).', image: 'https://picsum.photos/seed/servicebanner/600/400' },
    { id: '13', title: 'Graphics Design', slug: 'graphics-design', description: 'Graphics design for ads, posts, and creatives (per design).', image: 'https://picsum.photos/seed/graphics/600/400' },
    { id: '14', title: 'Content Creation', slug: 'content-creation', description: 'Monthly product and marketing content creation for business growth.', image: 'https://picsum.photos/seed/content/600/400' },
    { id: '15', title: 'Facebook Ads Management', slug: 'facebook-ads-management', description: 'Professional Facebook ads management focused on leads and sales.', image: 'https://picsum.photos/seed/facebookads/600/400' },
  ];
};

// ---------------- CASE STUDIES ----------------
export const fetchCaseStudies = async (): Promise<CaseStudy[]> => {
  await delay(500);
  return [
    { id: '1', title: 'E-Commerce Growth', description: 'Increased online sales by 250% through targeted PPC and SEO.', image: 'https://picsum.photos/seed/case1/800/600', category: 'E-Commerce' },
    { id: '2', title: 'SaaS Lead Gen', description: 'Acquired 10k+ new monthly leads for a B2B SaaS platform.', image: 'https://picsum.photos/seed/case2/800/600', category: 'Software' },
    { id: '3', title: 'Brand Identity', description: 'Complete digital rebrand for a global logistics firm.', image: 'https://picsum.photos/seed/case3/800/600', category: 'Identity' },
  ];
};

// ---------------- BLOGS ----------------
export const fetchBlogs = async (): Promise<Blog[]> => {
  await delay(500);
  return [
    { id: '1', title: '5 Tips for Digital Marketing', date: '2026-01-20', summary: 'Boost your marketing ROI with these five simple yet effective strategies for 2026.', image: 'https://picsum.photos/seed/blog1/800/500' },
    { id: '2', title: 'The Future of SEO', date: '2026-01-15', summary: 'How AI and machine learning are changing the search engine landscape.', image: 'https://picsum.photos/seed/blog2/800/500' },
    { id: '3', title: 'Social Media Trends', date: '2026-01-10', summary: 'Short-form video is king. Discover how to leverage it for your brand.', image: 'https://picsum.photos/seed/blog3/800/500' },
  ];
};

// ---------------- TESTIMONIALS ----------------
export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  await delay(500);
  return [
    { id: '1', name: 'John Doe', company: 'Brain Station', feedback: 'They transformed our online presence and our sales skyrocketed within months.', photo: 'https://www.shutterstock.com/image-photo/young-indian-latin-happy-smiling-260nw-2007080246.jpg' },
    { id: '2', name: 'Sarah Smith', company: 'TechFlow', feedback: 'The best agency we have worked with. Their data-driven approach actually works.', photo: 'https://static.vecteezy.com/system/resources/thumbnails/024/770/154/small/businessman-working-at-office-using-laptop-photo.jpg' },
    { id: '3', name: 'Dybala Smith', company: 'TechFlow', feedback: 'The best agency we have worked with. Their data-driven approach actually works.', photo: 'https://img.freepik.com/free-photo/busy-young-attractive-smiling-man-sitting-co-working-open-office-holding-laptop_285396-1768.jpg?semt=ais_hybrid&w=740&q=80' },
  ];
};

// ---------------- TEAM MEMBERS ----------------
export const fetchTeam = async (): Promise<TeamMember[]> => {
  await delay(500);
  return [
    {
    id: '1',
    name: 'Tareque Mahmud',
    role: 'CEO & Founder',
    company: 'Green Soul IT',
    photo: 'https://simple-portfolio-seven-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Funnamed.3c1127a3.jpg&w=1080&q=75',
    details: 'MBA in Business Administration from Dhaka University. 10+ years experience leading tech startups and digital ventures.'
  },
  {
    id: '2',
    name: 'Aminul Islam Shuvo',
    role: 'Marketing Head',
    company: 'Green Soul IT',
    photo: 'https://picsum.photos/seed/seo-head/400/400',
    details: 'Gont. Tolaram College. Expert in digital marketing strategies.'
  },
  {
    id: '3',
    name: 'Abid Rahman',
    role: 'Digital Marketer',
    company: 'Green Soul IT',
    photo: 'https://picsum.photos/seed/cd/400/400',
    details: 'Southeast University. 1+ years experience in creative direction marketing.'
  },
  {
    id: '4',
    name: 'Kaniz Fatema',
    role: 'Web Developer',
    company: 'Green Soul IT',
    photo: 'https://picsum.photos/seed/dev1/400/400',
    details: 'BSc in Computer Science from DIU. Specializes in frontend & backend development, React, Node.js.'
  },
  {
    id: '5',
    name: 'MD Al Shahrier Akon',
    role: 'Graphics Designer',
    company: 'Green Soul IT',
    photo: 'https://picsum.photos/seed/dev2/400/400',
    details: 'BSc in Computer Science from Southeast University. Specializes in frontend & backend development, React, Node.js.'
  }
  ];
};

// ---------------- AUTH ----------------
export const loginUser = async (email: string, password: string): Promise<User> => {
  await delay(800);
  if (email && password) {
    return { email, name: 'User', token: 'mock-jwt-token-123' };
  }
  throw new Error('Invalid credentials');
};

export const registerUser = async (name: string, email: string, password: string): Promise<User> => {
  await delay(1000);
  return { email, name, token: 'mock-jwt-token-456' };
};

// ---------------- CONTACT ----------------
export const contactSubmit = async (data: any) => {
  await delay(500);
  return { status: 'success' };
};
