
import { Service, CaseStudy, Blog, Testimonial, TeamMember, User } from '../types';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

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

export const fetchServices = async (): Promise<Service[]> => {
  await delay(500);
  return [
    {
      id: '1',
      title: 'SEO',
      slug: 'seo',
      description: 'Optimizing website to rank higher in search engines using cutting-edge data analysis.',
      image: 'https://picsum.photos/seed/seo/600/400',
    },
    {
      id: '2',
      title: 'Social Media Marketing',
      slug: 'social-media',
      description: 'Increase engagement & brand visibility across all major social platforms.',
      image: 'https://picsum.photos/seed/smm/600/400',
    },
    {
      id: '3',
      title: 'PPC',
      slug: 'ppc',
      description: 'Paid ads management & ROI optimization for maximum conversion rates.',
      image: 'https://picsum.photos/seed/ppc/600/400',
    },
    {
      id: '4',
      title: 'Content Marketing',
      slug: 'content',
      description: 'Blog, videos, and content strategy designed for organic growth and authority.',
      image: 'https://picsum.photos/seed/content/600/400',
    },
    {
      id: '5',
      title: 'Web Development',
      slug: 'web-dev',
      description: 'Building responsive, modern websites that convert visitors into customers.',
      image: 'https://picsum.photos/seed/web/600/400',
    },
    {
      id: '6',
      title: 'Poster / Graphic Design',
      slug: 'design',
      description: 'Creative designs for online & offline campaigns that capture attention.',
      image: 'https://picsum.photos/seed/design/600/400',
    },
  ];
};

export const fetchCaseStudies = async (): Promise<CaseStudy[]> => {
  await delay(500);
  return [
    {
      id: '1',
      title: 'E-Commerce Growth',
      description: 'Increased online sales by 250% through targeted PPC and SEO.',
      image: 'https://picsum.photos/seed/case1/800/600',
      category: 'E-Commerce',
    },
    {
      id: '2',
      title: 'SaaS Lead Gen',
      description: 'Acquired 10k+ new monthly leads for a B2B SaaS platform.',
      image: 'https://picsum.photos/seed/case2/800/600',
      category: 'Software',
    },
    {
      id: '3',
      title: 'Brand Identity',
      description: 'Complete digital rebrand for a global logistics firm.',
      image: 'https://picsum.photos/seed/case3/800/600',
      category: 'Identity',
    },
  ];
};

export const fetchBlogs = async (): Promise<Blog[]> => {
  await delay(500);
  return [
    {
      id: '1',
      title: '5 Tips for Digital Marketing',
      date: '2026-01-20',
      summary: 'Boost your marketing ROI with these five simple yet effective strategies for 2026.',
      image: 'https://picsum.photos/seed/blog1/800/500',
    },
    {
      id: '2',
      title: 'The Future of SEO',
      date: '2026-01-15',
      summary: 'How AI and machine learning are changing the search engine landscape.',
      image: 'https://picsum.photos/seed/blog2/800/500',
    },
    {
      id: '3',
      title: 'Social Media Trends',
      date: '2026-01-10',
      summary: 'Short-form video is king. Discover how to leverage it for your brand.',
      image: 'https://picsum.photos/seed/blog3/800/500',
    },
  ];
};

export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  await delay(500);
  return [
    {
      id: '1',
      name: 'John Doe',
      company: 'ABC Corp',
      feedback: 'They transformed our online presence and our sales skyrocketed within months.',
      photo: 'https://picsum.photos/seed/user1/200/200',
    },
    {
      id: '2',
      name: 'Sarah Smith',
      company: 'TechFlow',
      feedback: 'The best agency we have worked with. Their data-driven approach actually works.',
      photo: 'https://picsum.photos/seed/user2/200/200',
    },
  ];
};

export const fetchTeam = async (): Promise<TeamMember[]> => {
  await delay(500);
  return [
    {
      id: '1',
      name: 'Tanvir Ahmed',
      role: 'CEO & Founder',
      photo: 'https://picsum.photos/seed/ceo/400/400',
    },
    {
      id: '2',
      name: 'Rahat Hassan',
      role: 'SEO Head',
      photo: 'https://picsum.photos/seed/seo-head/400/400',
    },
    {
      id: '3',
      name: 'Nabila Karim',
      role: 'Creative Director',
      photo: 'https://picsum.photos/seed/cd/400/400',
    },
  ];
};

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

export const contactSubmit = async (data: any) => {
  await delay(500);
  return { status: 'success' };
};
