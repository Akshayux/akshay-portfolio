export const profile = {
  name: 'Akshay Venkata Narayana',
  shortName: 'Akshay',
  role: 'Product & UX Designer',
  location: 'United Kingdom',
  email: 'akshayv2310@gmail.com',
  phone: '+44 7810120379',
  years: '5+',
};

export const professionalSummary = 'Product Designer who\'s shipped 0-to-1 systems across AI tools, enterprise SaaS, travel, and EdTech, spanning six industries with one repeated pattern: messy workflows in, cohesive systems out. I work best in ambiguity. The messier the problem, the clearer I get. My edge isn\'t the pixels. It\'s getting a room of engineers, PMs, and execs aligned on a design decision in one meeting instead of five. Not because I talk more, but because I\'ve already done the work of finding the one decision that actually matters.';

export const projectAchievements = [
  'Rebuilt LUXTJ’s unclear 9-screen profile setup as a 4-screen guided flow without removing any required step.',
  'Rebuilt Simpo AI’s onboarding from 8 confusing steps to 4 focused ones and reduced a common internal task from 9 clicks to 4.',
  'Owned the ORRA Jewellery Tambola redesign end to end, more than doubling weekly app opens through clearer behavioural triggers and rewards.',
  'Simplified Halohues workflows, reducing image conversion time by 40%, lead conversion steps from 7 to 3, and daily tools from 5 to 1.',
];

export const socials = [
  {label: 'LinkedIn', href: 'https://linkedin.com/in/akshayproductdesigner'},
  {label: 'Behance', href: 'https://www.behance.net/akshayv7'},
  {label: 'Medium', href: 'https://medium.com/@akshayv2310'},
  {label: 'Instagram', href: 'https://www.instagram.com/akshayv2310/'},
];

export const featuredProjects = [
  {
    index: '01',
    title: 'LUXTJ',
    label: 'Luxury travel · Customer experience',
    role: 'Lead product designer',
    readTime: '9 min',
    metrics: [{value:'9 → 4',label:'Profile setup screens'},{value:'Web + mobile',label:'Checkout journey'},{value:'Most-clicked',label:'Add-to-cart action'}],
    description: 'Three conversion leaks were hiding inside one luxury-travel journey.',
    outcome: 'See how I rebuilt hotel choice, checkout and profile setup around clearer decisions.',
    signal: 'Decision confidence · End-to-end product design',
    image: '/figma/luxtj-main.png',
    href: '/work/luxtj',
    tags: ['Product design', 'Web', 'Travel'],
  },
  {
    index: '02',
    title: 'LUXTJ Extranet',
    label: 'Luxury travel · Partner operations',
    role: 'Lead Product & UX Designer',
    readTime: '6 min',
    metrics: [{value:'3',label:'Connected products'},{value:'End to end',label:'Design ownership'},{value:'1',label:'Shared system'}],
    description: 'What happens after a luxury trip is booked?',
    outcome: 'See how five scattered partner operations became one connected workspace.',
    signal: 'Five operational areas · One connected workspace',
    image: '/optimized/luxtj-extranet-booking-dashboard.jpg',
    href: '/work/luxtj-extranet',
    tags: ['UX design', 'Enterprise', 'Design system'],
  },
  {
    index: '03',
    title: 'ScotCare',
    label: 'University project · Digital health',
    role: 'Independent Product & UX Designer',
    readTime: '7 min',
    metrics: [{value:'WCAG 2.2 AA',label:'Accessibility standard'},{value:'NHS Scotland',label:'Care context'},{value:'MA project',label:'Academic setting'}],
    description: 'When someone feels unwell, the hardest question is often: what happens next?',
    outcome: 'See how evidence became a safer care-navigation concept with clear human boundaries.',
    signal: 'Safety · Clarity · Continuity',
    image: '/scotcare/mobile-mockup-cover.png',
    href: '/work/scotcare',
    tags: ['Research', 'Service design', 'Mobile'],
  },
  {
    index: '04',
    title: 'Simpo AI',
    label: 'AI product · Website creation',
    role: 'UX Designer',
    readTime: '6 min',
    metrics: [{value:'8 → 4',label:'Onboarding steps'},{value:'9 → 4',label:'Ops task clicks'},{value:'6 → 3',label:'Parent-app steps'}],
    description: 'Why were people leaving an AI website builder before they made their first choice?',
    outcome: 'See how clearer progression and simpler decisions made the first session easier to finish.',
    signal: 'AI interaction research · Task-focused UX',
    image: '/simpo-ai-flow.svg',
    href: '/work/simpo-ai',
    inProgress: true,
    tags: ['AI', 'Onboarding', 'SaaS'],
  },
];

export const experience = [
  {
    company: 'LUXTJ',
    role: 'Product Designer',
    employment: 'Contract · return engagement',
    place: 'Remote',
    date: 'Sept 2025 - Aug 2026',
    summary: 'Returned to LUXTJ to redesign the customer and partner journeys after establishing the first product foundations as a freelancer.',
    bullets: [
      'Return engagement: redesigned the customer and partner journeys after my earlier freelance work established the product foundations.',
      'Owned the checkout experience end to end, from identifying drop-off through usability testing to shipping a clearer review-to-payment flow across web and mobile.',
      'Took an unclear 9-screen profile setup with no obvious owner, talked to users to find where they gave up, and rebuilt it independently as a 4-screen guided flow without dropping any required step.',
      'Redesigned hotel detail pages so decision-critical information surfaced first, validated with heatmap data, taking the add-to-cart button from ignored to the most-clicked element on the page.',
      'Led end-to-end product design for the Luxury travel website and partner extranet, connecting customer-facing and operational workflows across web, mobile, and internal platforms.',
    ],
  },
  {
    company: 'LUXTJ',
    role: 'Product Designer',
    employment: 'Freelance · initial engagement',
    place: 'Remote',
    date: 'Dec 2023 - Dec 2024',
    summary: 'Initial freelance engagement establishing 4+ end-to-end travel journeys and 50+ mobile screens for a new luxury-travel product.',
    bullets: [
      'Initial engagement: established the product foundations later revisited in a return contract focused on customer and partner journeys.',
      'Designed 4+ end-to-end travel journeys and 50+ mobile screens across discovery, trip planning, booking, itinerary management, and post-booking experiences for a new luxury travel product.',
      'Established reusable interaction patterns and mobile design foundations that later supported the broader LuxTJ ecosystem across mobile and web.',
    ],
  },
  {
    company: 'Proficonlabs',
    role: 'UX Designer',
    employment: '',
    place: 'India',
    date: 'Oct 2024 - Sept 2025',
    summary: 'Rebuilt Simpo AI’s onboarding from 8 confusing steps to 4 focused ones, working directly with engineering to keep the redesigned flow implementable within existing constraints.',
    bullets: [
      'Rebuilt Simpo AI’s onboarding from 8 confusing steps to 4 focused ones, working directly with engineering to keep the redesigned flow implementable within existing constraints.',
      'Owned the Tambola gamification redesign end to end, more than doubling weekly app opens by applying behavioural design principles stakeholders had not previously considered.',
      'Simplified internal tools across Simpo AI’s CRM, POS, and business-management systems, reducing a common task from 9 clicks to 4 for non-technical staff.',
      'Fixed a confusing navigation structure in a school management parent app, cutting key tasks from 6 steps to 3.',
      'Resolved critical usability issues across a school management parent application, improving navigation, information hierarchy, and access to key academic and administrative tasks.',
    ],
  },
  {
    company: 'Halohues Studios',
    role: 'UI/UX Designer',
    employment: '',
    place: 'India',
    date: 'Jan 2024 - Oct 2024',
    summary: 'Reduced image conversion time by 40% by designing a simpler workflow for VFX artists, making technical controls easier to understand and reducing unnecessary steps in the conversion process.',
    bullets: [
      'Reduced image conversion time by 40% by designing a simpler workflow for VFX artists, making technical controls easier to understand and reducing unnecessary steps in the conversion process.',
      'Rebuilt a leaky sales funnel around clearer lead stages, reducing the steps required to convert a lead from 7 to 3.',
      'Designed an internal intranet that consolidated studio information and daily operations, cutting the number of tools staff needed to check from 5 to 1.',
    ],
  },
  {
    company: 'Bratha Private Limited',
    role: 'UI/UX Designer',
    employment: '',
    place: 'India',
    date: 'July 2023 - Oct 2023',
    summary: 'Improved app usability by 45% by redesigning core mobile journeys, simplifying navigation, reducing friction, and making service discovery easier for users.',
    bullets: [
      'Improved app usability by 45% by redesigning core mobile journeys, simplifying navigation, reducing friction, and making service discovery easier for users.',
      'Improved operational efficiency by 40% by designing a cleaner-facing application and supporting a CRM that connected customers, cleaners, and internal operations.',
    ],
  },
  {
    company: 'Freelance',
    role: 'UI/UX Designer',
    employment: '',
    place: '',
    date: 'Dec 2021 - June 2023',
    summary: 'Designed and improved key mobile experiences for AstroSutraa, a consumer astrology platform that reached 100K+ Android downloads, focusing on clearer navigation, content discovery, and usability.',
    bullets: [
      'Designed and improved key mobile experiences for AstroSutraa, a consumer astrology platform that reached 100K+ Android downloads, focusing on clearer navigation, content discovery, and usability.',
      'Designed UX flows and interactive prototypes for ScholarCube, simplifying core journeys across digital examinations, student interactions, and assessment workflows.',
      'Designed user flows, wireframes, and high-fidelity interfaces for Match Skope, translating early business requirements into clear, development-ready product experiences.',
    ],
  },
];

export const capabilities = [
  'Human-centred design',
  'UX and Product strategy',
  'Stakeholder management and facilitation',
  'User research and usability testing',
  'Information architecture (IA)',
  'Design systems and DesignOps',
  'Interaction design',
  'Prototyping and wireframing',
  'Generative AI and prompt engineering',
  'Service design and accessibility (WCAG 2.2 AA)',
];

export const toolsAndEnvironment = [
  {label: 'Design tools', value: 'Figma, Whimsical'},
  {label: 'Collaboration tools', value: 'Miro, FigJam, Notion, JIRA, Confluence'},
  {label: 'Environment', value: 'Agile, Triad/Trio sync, Cross-functional'},
];

export const certifications = [
  'Human-Computer Interaction: The Foundations of UX Design - Interaction Design Foundation',
  'User Experience - Interaction Design Foundation',
  'User Experience Certificate - Accenture',
  'Enterprise Design Thinking Practitioner - IBM',
  'UI/UX Design Course - DesignBoat',
];

export const education = [
  {
    course: 'Digital Design and Innovation',
    institution: 'Heriot-Watt University',
    place: 'Edinburgh, UK',
    date: 'Sep 2025 - Sep 2026',
  },
  {
    course: 'Bachelor of Engineering, Computer Science',
    institution: 'The Oxford College of Education',
    place: 'India',
    date: 'Aug 2017 - Aug 2021',
  },
];
