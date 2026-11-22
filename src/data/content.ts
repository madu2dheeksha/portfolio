// All portfolio text lives here, copied word-for-word from the original site.
// Edit this file to change content without touching the layout code.

export const contact = {
  email: 'deeksham881@gmail.com',
  linkedin: 'https://www.linkedin.com/in/madu-dheeksha/',
};

// Set to '/resume/resume.pdf' after adding your PDF to public/resume/.
// When empty, the "Download Resume" button stays hidden.
export const resumeUrl = '';

export const site = {
  name: 'Madu Dheeksha',
  tagline:
    'Marketing & Design Professional. Crafting impactful marketing experiences through strategic brand communication and visual storytelling.',
  // Replace with your own photo: save it as public/images/profile.webp and
  // change this value to '/images/profile.webp'.
  profileImage: '/images/profile.webp',
  profileAlt: 'Madu Dheeksha Portrait',
  copyright: '© 2025 Madu Dheeksha. All rights reserved.',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contributions', href: '#contributions' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Contact', href: '#contact' },
];

export const footerLinks = [
  { label: 'Hero Section', href: '#home' },
  { label: 'Experience Overview', href: '#experience' },
  { label: 'Key Contributions', href: '#contributions' },
  { label: 'Learning Outcomes', href: '#outcomes' },
  { label: 'Call to Action', href: '#contact' },
];

export const hero = {
  buttonLabel: 'View My Experience',
  buttonHref: '#experience',
};

export const about = {
  eyebrow: 'About Me',
  titleStart: 'A creative designer who executes ',
  titleHighlight: 'fast, like Batman.',
  paragraphs: [
    "I'm Madu Dheeksha, a creative designer with 2 years of experience turning marketing ideas into visuals that grab attention and communicate clearly.",
    'I love bringing brands to life through design, and I move quickly from brief to finished creative without compromising on quality.',
  ],
  highlights: ['Creative Design', 'Fast Execution', 'Brand Storytelling'],
  statNumber: '2+',
  statLabel: ['Years of design', 'experience'],
  toolsTitle: 'Tools I work with',
  tools: [
    { short: 'AI', name: 'AI Tools' },
    { short: 'Ca', name: 'Canva' },
    { short: 'Ad', name: 'Adobe' },
  ],
};

export const experience = {
  label: 'Internship',
  title: 'Professional Experience: Nestlé',
  meta: 'Marketing & Design Intern | 3 Months',
  quote:
    'My experience at Nestlé gave me valuable exposure to the intersection of marketing strategy, creative communication and brand storytelling, strengthening my interest in building impactful marketing experiences.',
};

export type ContributionIcon = 'target' | 'layers' | 'monitor' | 'briefcase';

export const contributions = {
  heading: 'Experience & Contributions',
  description: 'Practical exposure to corporate marketing, creative design, and brand execution.',
  items: [
    {
      icon: 'target' as ContributionIcon,
      title: 'Marketing & Brand Communication',
      description: 'Strategies, brand consistency',
    },
    {
      icon: 'layers' as ContributionIcon,
      title: 'Creative Design & Content Development',
      description: 'Social media carousels, posters',
    },
    {
      icon: 'monitor' as ContributionIcon,
      title: 'Digital Content & Visual Communication',
      description: 'Digital content workflows and visual storytelling',
    },
    {
      icon: 'briefcase' as ContributionIcon,
      title: 'Professional & Corporate Exposure',
      description: 'Navigating corporate environments and professional workflows',
    },
  ],
};

export const outcomes = {
  title: 'Key Learning Outcomes',
  description: 'Strengthening my understanding of the corporate marketing landscape.',
  items: [
    {
      title: 'Corporate marketing',
      image: '/images/outcomes/corporate-marketing.webp',
      text: 'Saw how marketing plans move from brief to launch inside a large FMCG brand, working within brand guidelines and cross-functional teams.',
    },
    {
      title: 'Brand positioning and communication',
      image: '/images/outcomes/brand-positioning.webp',
      text: "Learned to keep a brand's voice and message consistent across every touchpoint, from social posts to print.",
    },
    {
      title: 'Creative campaign development',
      image: '/images/outcomes/creative-campaign.webp',
      text: 'Contributed ideas and concepts for campaigns, turning marketing objectives into clear creative directions.',
    },
    {
      title: 'Digital content creation',
      image: '/images/outcomes/digital-content.webp',
      text: 'Designed social media carousels, posters and digital creatives tailored to each platform and audience.',
    },
    {
      title: 'Visual storytelling',
      image: '/images/outcomes/visual-storytelling.webp',
      text: 'Used layout, colour and imagery to turn product messages into stories people remember.',
    },
    {
      title: 'Marketing design execution',
      image: '/images/outcomes/marketing-design-execution.webp',
      text: 'Took designs from first draft to final file, working through feedback rounds and delivering on time.',
    },
    {
      title: 'Professional collaboration',
      image: '/images/outcomes/professional-collaboration.webp',
      text: 'Worked alongside mentors and team members, presenting work, taking feedback and meeting deadlines.',
    },
  ],
};

export const cta = {
  heading: "Let's Build Impactful Experiences",
  description: 'Interested in collaborating on marketing strategy and visual storytelling?',
  buttonLabel: 'Get in Touch',
};
