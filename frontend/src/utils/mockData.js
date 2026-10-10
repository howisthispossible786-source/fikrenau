/**
 * Structured Mock Data for Fikr-e-Nau (Phase 1)
 * Designed to seamlessly transition to SQLite / FastAPI backend in Phase 3.
 */

export const IMPACT_STATS = [
  {
    id: 'talents_featured',
    label: 'Talents Featured',
    value: 400,
    suffix: '+',
    description: 'Emerging youth creators highlighted across diverse disciplines',
  },
  {
    id: 'stories_shared',
    label: 'Stories Shared',
    value: 50,
    suffix: '+',
    description: 'In-depth editorial spotlights published and celebrated',
  },
  {
    id: 'young_creators',
    label: 'Young Creators',
    value: 450,
    suffix: '+',
    description: 'Active young minds and students in our growing community',
  },
  {
    id: 'communities_reached',
    label: 'Communities Reached',
    value: 150,
    suffix: '+',
    description: 'Cities, universities, and creative hubs engaged nationwide',
  },
];

export const WHAT_WE_DO_CARDS = [
  {
    id: 'discover',
    number: '01',
    title: 'Discover',
    tagline: 'Unearthing Hidden Brilliance',
    description: 'We scout across universities, remote towns, grassroots studios, and digital spaces to find emerging talents whose voices have yet to be heard.',
    iconName: 'Compass',
    tags: ['Scouting', 'Talent Search', 'Open Submissions'],
  },
  {
    id: 'showcase',
    number: '02',
    title: 'Showcase',
    tagline: 'Curated Stage for Excellence',
    description: 'We build high-production editorial features, portfolio galleries, and spotlight videos that present young creators to the world with utmost dignity.',
    iconName: 'Sparkles',
    tags: ['Portfolio Spotlight', 'Editorial Features', 'Digital Exhibits'],
  },
  {
    id: 'connect',
    number: '03',
    title: 'Connect',
    tagline: 'Bridging Talent & Opportunity',
    description: 'We connect emerging visionaries with industry mentors, patrons, creative studios, and organizations looking for authentic young talent.',
    iconName: 'Share2',
    tags: ['Mentorship', 'Industry Bridges', 'Creative Networks'],
  },
  {
    id: 'inspire',
    number: '04',
    title: 'Inspire',
    tagline: 'Fueling the Next Generation',
    description: 'By documenting authentic journeys of grit and creative breakthrough, we motivate the next generation to step forward with their craft.',
    iconName: 'Lightbulb',
    tags: ['Journeys', 'Creative Talks', 'Case Studies'],
  },
  {
    id: 'empower',
    number: '05',
    title: 'Empower',
    tagline: 'Fostering Confidence & Skills',
    description: 'We deliver hands-on workshops, portfolio critiques, and masterclasses designed to transform raw passion into sustainable careers.',
    iconName: 'Zap',
    tags: ['Workshops', 'Portfolio Critiques', 'Masterclasses'],
  },
  {
    id: 'celebrate',
    number: '06',
    title: 'Celebrate',
    tagline: 'Honoring Meaningful Work',
    description: 'We host physical exhibitions, awards of recognition, and community gatherings to honor youth innovation and positive contributions.',
    iconName: 'Award',
    tags: ['Annual Showcases', 'Exhibitions', 'Youth Honors'],
  },
];

export const FEATURED_TALENTS = [
  {
    id: 1,
    name: 'Jehan Ara',
    category: 'Founder or CEO',
    title: 'Founder & CEO of Katalyst Labs',
    shortDescription: 'Meet Jehan Ara, Founder & CEO of Katalyst Labs and a pioneering voice in Pakistan’s technology and startup ecosystem.  With more than two decades of leadership in the tech industry, including her long tenure as President of P@SHA, Jehan has contributed to connecting entrepreneurs, strengthening communities, and creating opportunities for the next generation of innovators. Her journey reminds us that true leadership isn’t only about what you build for yourself — it’s about what you make possible for others.',
    location: 'Lahore, Pakistan',
    imageUrl: 'featuredtalents/1.jpeg',
    tags: ['JehanAra ', 'KatalystLabs', 'Leadership'],
    stats: { views: 3200, awards: 2 },
  },
  {
    id: 2,
    name: 'Ahmed Malik',
    category: 'Developement',
    title: 'software developer, AI & LLM expert',
    shortDescription:'Fikr-e-Nau proudly presents Ahmed Malik, a technology entrepreneur, software developer, AI & LLM expert, startup builder, and product strategist. As the Founder & CEO of TAMx Technologies and MD of QuickSilver, Ahmed is working at the intersection of Artificial Intelligence, software development, AI chatbots, Large Language Models, startup building, and product innovation. His journey reflects the spirit of Fikr-e-Nau — discovering talent, recognizing achievement, and empowering individuals who are creating meaningful impact. ',
    location: 'Islamabad, Pakistan',
    imageUrl: '/featuredtalents/2.jpeg',
    tags: ['AhmedMalik', 'TechEntrepreneur', 'AIInnovation'],
    stats: { views: 4100, awards: 3 },
  },
  {
    id: 3,
    name: 'Shahzad Mukhtar',
    category: 'Fitness',
    title: 'Gym Coach and Fitness Expert ',
    shortDescription: 'Fikr-e-Nau proudly presents Shahzad Mukhtar, a dedicated Gym Coach and Fitness Expert with years of experience in helping individuals build strength, improve fitness, and work towards healthier lifestyles.With expertise in fitness coaching, strength training, workout guidance, sports nutrition, and physical conditioning, Shahzad focuses on helping people unlock their potential through consistency, discipline, and the right guidance.As a Level 1–4 qualified professional, BFR Certified, and Sports Nutrition Certified coach, his journey reflects the importance of knowledge, commitment, and passion in the world of health and fitness. ',
    location: 'Karachi, Pakistan',
    imageUrl: '/featuredtalents/3.jpeg',
    tags: ['ShahzadMukhtar', 'FitnessExpert', 'GymCoach'],
    stats: { views: 2800, awards: 1 },
  },
  {
    id: 4,
    name: 'Eman Asif',
    category: 'Art',
    title: 'visionary behind Sweet Cherry Arts',
    shortDescription: "Creativity becomes truly powerful when it transforms into purpose.Meet Eman Asif, the visionary behind Sweet Cherry Arts—a brand that is redefining handcrafted artistry in Pakistan through exquisite miniature art, 3D frames, and personalized miniature globes. Her passion for preserving creativity and craftsmanship has earned her collaborations with leading brands while inspiring countless art enthusiasts and aspiring entrepreneurs.Through innovation, dedication, and artistic excellence, Eman proves that every handcrafted piece tells a story and every creative dream has the potential to become a successful business.",
    location: 'Rawalpindi, Pakistan',
    imageUrl: '/featuredtalents/4.jpeg',
    tags: ['Business', 'MiniatureArt', 'FikrENau'],
    stats: { views: 1950, awards: 1 },
  },
  {
    id: 5,
    name: 'Shameel & Malaika',
    category: 'Business',
    title: 'husband-and-wife duo behind Bunny Brownie',
    shortDescription: "Meet Shameel & Malaika, the husband-and-wife duo behind Bunny Brownie — combining their love for baking with creativity, business development, and marketing to create something truly special. Their journey is a reminder that when passion meets teamwork, even a simple idea can become something meaningful.At Fikr-e-Nau, we celebrate people who turn their ideas into impact and inspire others to start building their own.",
    location: 'Peshawar, Pakistan',
    imageUrl: '/featuredtalents/5.jpeg',
    tags: ['BunnyBrownie ', 'Entrepreneurship', 'FikrENau'],
    stats: { views: 3600, awards: 4 },
  },
  {
    id: 6,
    name: 'Sumaira Chaudhry',
    category: 'Design',
    title: 'A passionate Senior Graphic Designer',
    shortDescription: "A brand is remembered not just by its name—but by the story its design tells. Meet Sumaira Chaudhry, a passionate Senior Graphic Designer who specializes in branding, logo design, social media creatives, and marketing materials. Her work helps businesses stand out, communicate their identity, and build meaningful connections with their audience. Every color, every font, and every visual she creates is designed with purpose—because great design isn't just about looking good; it's about creating impact.",
    location: 'Faisalabad, Pakistan',
    imageUrl: '/featuredtalents/6.jpeg',
    tags: ['GraphicDesigner', 'Branding', 'FikrENau'],
    stats: { views: 5200, awards: 2 },
  },
    {
    id: 7,
    name: 'Sana Asif',
    category: 'Entrepreneurship',
    title: 'An inspiring academic, researcher, and entrepreneur',
    shortDescription: "Knowledge has the power to change lives—but when it's combined with entrepreneurship, it creates lasting impact.Meet Sana Asif, an inspiring academic, researcher, and entrepreneur who is shaping future leaders both inside and outside the classroom.As a faculty member at LCWU and COMSATS University, and the Founder of Organo By Sana, she is proving that education and innovation go hand in hand. Her journey is a beautiful example of how passion, purpose, and perseverance can inspire countless others.",
    location: 'Rawalpindi, Pakistan',
    imageUrl: '/featuredtalents/7.jpeg',
    tags: ['fikrenou', 'research', 'education'],
    stats: { views: 5200, awards: 2 },
  },
     {
    id: 8,
    name: 'Rayyan Saad',
    category: 'Art',
    title: 'An inspiring academic, researcher, and entrepreneur',
    shortDescription: "Talent can emerge at any age—but when passion is supported by consistency, it can create an impact far beyond expectations.Rayyan Saad is a 9-year-old young artist from Pakistan who is inspiring audiences through his passion for DIY projects, arts and crafts, sketching, and painting.With a growing community of more than 80K YouTube followers, Rayyan represents the power of early creativity, digital content creation, and consistent learning.His journey offers an important lesson for parents, educators, and aspiring creators: young people should be encouraged to explore their interests and share their talents with the world.",
    location: 'DG Khan, Pakistan',
    imageUrl: '/featuredtalents/8.jpeg',
    tags: ['fikrenou', 'childartist', 'artsandcrafts'],
    stats: { views: 5200, awards: 2 },
  },
      {
    id: 9,
    name: 'Syed Rakhshan Ul Hassan',
    category: 'Design',
    title: 'A passionate Graphic Designer, Digital Marketer, and Content Creator',
    shortDescription: "Meet Syed Rakhshan Ul Hassan, a passionate Graphic Designer, Digital Marketer, and Content Creator who has been helping brands tell their stories through thoughtful design, creative branding, and digital marketing since 2020.His work is a reminder that creativity isn't just about beautiful visuals—it's about solving problems, connecting with people, and helping businesses grow.",
    location: 'Karachi, Pakistan',
    imageUrl: '/featuredtalents/9.jpeg',
    tags: ['fikrenou', 'GraphicDesign', 'GetFeatured'],
    stats: { views: 5200, awards: 2 },
  },
];

export const FEATURED_STORIES = [
  {
    id: 1,
    title: 'From A Small Bedroom Studio to International Galleries',
    category: 'Visual Arts',
    excerpt: 'How 21-year-old Zainab bridged centuries of heritage with contemporary youth struggles on canvas.',
    author: 'Editorial Desk',
    date: 'March 14, 2026',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Coding Hope: The Student Democratizing AI for Rural Schools',
    category: 'Technology',
    excerpt: 'Hamza Farooq built a high-efficiency neural engine that runs smoothly on ten-year-old classroom laptops.',
    author: 'Tech & Youth Editor',
    date: 'March 08, 2026',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
  {
    id: 3,
    title: 'The Resonance of New Words: Why Young Poets Are Thriving',
    category: 'Literature',
    excerpt: 'In an era of hyper-speed algorithms, young writers are returning to deliberate, soul-stirring prose.',
    author: 'Culture Fellow',
    date: 'February 27, 2026',
    readTime: '4 min read',
    coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
];

export const UPCOMING_EVENTS = [
  {
    id: 1,
    title: 'Student Founder Program 2026',
    type: 'Talent Showcase & Summit',
    date: ' 06 October 2026',
    time: ' 10:00 AM onwards',
    location: ' Riphah International University, Rawalpindi',
    description: 'THE COUNTDOWN BEGINS! Pakistan’s next generation of founders is getting ready to step forward!The TAMX Student Founder Program 2026 is bringing together ambitious students with the vision to transform their ideas into real ventures — from Student → Founder.📍 Riphah International University, Rawalpindi🤝 In Collaboration With: TAMX & CodeCeli📢 Official Digital Media Partner: Fikr-e-NauExpect a day filled with innovation, entrepreneurship, learning, networking, and opportunities for aspiring founders ⏳ 15 DAYS TO GO! The next generation of founders is getting ready. Are you? Fikr-e-Nau — Recognize. Inspire. Empower.',
    seatsLeft: '120 Seats Left',
    badge: 'Flagship Event',
  },
  
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Fikr-e-Nau gives young people a space where their ideas are not only heard, but truly valued.',
    author: 'Talha Muhammad',
    role: 'Founder & Director @Fikrenau ',
    category: 'Leadership',
    avatar: '/team/1.jpg',
  },
  {
    id: 2,
    quote:
      'Our goal is to discover people whose talent deserves to be seen and give them a platform to grow.',
    author: 'Amna Nadeem',
    role: 'Cofounder/Deputy Director',
    category: 'Creative Community',
    avatar: '/team/2.png',
  },
  {
    id: 3,
    quote:
      'There is so much young talent around us. Fikr-e-Nau is about bringing those stories into the light.',
    author: 'Huda Amir',
    role: 'Head/Director of Media and Marketing',
    category: 'Technology',
    avatar: '/team/3.png',
  },
];
export const FAQ_ITEMS = [
  {
    question: "What is Fikr-e-Nau?",
    answer: "Fikr-e-Nau (meaning 'New Thought') is a youth-centered discovery and showcase platform dedicated to finding, celebrating, and giving spotlight to emerging talents, creative young minds, and innovators who often lack mainstream visibility.",
  },
  {
    question: "Who can showcase their talent?",
    answer: "Any young creator, student, artist, developer, writer, photographer, or innovator with original work and dedication. We prioritize emerging individuals who are doing meaningful creative or technical work and seeking a genuine platform to be seen.",
  },
  {
    question: "What kind of talent can be featured?",
    answer: "We embrace a wide spectrum of creative and intellectual disciplines: Visual Arts, UI/UX & Product Design, Software & AI, Literature & Poetry, Filmmaking, Photography, Social Innovation, Music, and Entrepreneurship.",
  },
  {
    question: "How can I submit my work?",
    answer: "You can click on 'Share Your Talent' or 'Submit Talent' on our platform to submit your portfolio link, brief artist/creator statement, and media samples. Our editorial team reviews every application thoroughly.",
  },
  {
    question: "Can I create a profile?",
    answer: "Yes! Young creators can register for a creator account, curate a dedicated digital portfolio showcase, link their socials and work samples, and apply for community spotlights and masterclasses.",
  },
  {
    question: "Can organizations collaborate with Fikr-e-Nau?",
    answer: "Absolutely. We actively partner with cultural institutions, design agencies, technology companies, universities, and sponsors who wish to mentor, commission, or provide opportunities to emerging youth talent.",
  },
  {
    question: "Is registration free?",
    answer: "Yes, registering your profile and submitting your work for discovery on Fikr-e-Nau is completely free. Our mission is to remove barriers for young creators, not add them.",
  },
  {
    question: "How does talent selection work?",
    answer: "Our curation committee reviews submissions based on originality, dedication, craftsmanship, and story. Selected creators receive a dedicated editorial spotlight, portfolio curation support, and community promotion.",
  },
];

export const COMMUNITY_LINKS = {
  whatsappChannel: 'https://whatsapp.com/channel/0029VbCtv6Z7z4kfk8PzRj2A',
  contactEmail: 'fikrenou@gmail.com',

  facebook: 'https://www.facebook.com/share/1BPX5ttZGk/  ',
  instagram: 'https://www.instagram.com/fikrenou',
  linkedin: 'https://www.linkedin.com/company/fikrenau/  ',
  tiktok: 'https://www.tiktok.com/@fikr.e.nou?_r=1&_t=ZS-95y7MeXscXU',
};
