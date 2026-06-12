const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const wordpressProjects = [
  {
    title: 'ShopSmart - Local Marketplace Website',
    desc: 'Digital marketplace for local businesses, built in Elementor with custom CSS/JS for tighter layouts and UX. Currently in development, preparing for launch.',
    stack: 'WordPress · Elementor · Custom CSS · JavaScript · Theme Customization',
    image: withBase('/shopsmart.png'),
    action: { label: 'View Demo', href: 'https://shopsmart.net.ph/', type: 'demo' },
  },
  {
    title: 'Jagna Tourism & Community Website',
    desc: 'WordPress site showcasing Jagna, Bohol with tourism highlights and community content for residents and visitors. The website is not publicly accessible yet and requires a password to enter.',
    stack: 'WordPress · Elementor · CSS · JavaScript',
    image: withBase('/jagna.png'),
    action: { label: 'View Demo', href: 'https://qrn.zkq.temporary.site/website_4cec4bca/', type: 'demo' },
  },
];

export const frontendProjects = [
  {
    title: 'Cariton - Kiosk & Ordering SPA',
    desc: 'Led frontend development for a kiosk and web ordering SPA with Django backend. Built reusable, component-based UI modules for product listing, cart, and checkout using JavaScript, HTML5, CSS Flexbox, and Bootstrap following Angular-style architecture. Integrated Google Gemini API via Google AI Studio for AI-powered order validation, improving checkout completion rate by 35%.',
    stack: 'Django · JavaScript · Angular Patterns · Google Gemini · HTML5 · CSS Flexbox · Bootstrap',
    image: withBase('/kiosk.png'),
    screenshots: [
      {
        src: withBase('/cariton-1.png'),
        label: 'Kiosk light mode screen',
      },
      {
        src: withBase('/cariton-2.png'),
        label: 'Order placed confirmation screen',
      },
      {
        src: withBase('/cariton-3.png'),
        label: 'Kiosk landing page',
      },
      {
        src: withBase('/cariton-4.png'),
        label: 'Cariton ordering system preview',
      },
    ],
    action: { label: 'View Screenshots', href: '#', type: 'screens' },
  },
  {
    title: 'PresencePro - Executive Leadership Platform',
    desc: 'Developed responsive SPA pages for a leadership development platform using React.js, SASS, and Bootstrap. Integrated OpenAI/ChatGPT API for real-time AI coaching feedback. Used Codex and Google Antigravity agentic AI for accelerated component development and Jasmine unit test generation, reducing stylesheet bundle size by 30%.',
    stack: 'React.js · SASS · Bootstrap · OpenAI/ChatGPT · Codex · Google Antigravity · Jasmine',
    image: withBase('/presencepro.png'),
    action: { label: 'View Link', href: 'https://presencepro.ai/', type: 'demo' },
  },
  {
    title: 'SOOKE - Mobile Rewards App',
    desc: 'Built frontend UI components for a mobile rewards application, focusing on responsive design, performance optimization, and cross-device compatibility.',
    stack: 'Mobile UI · Frontend Development · Responsive Design · Performance Optimization',
    image: withBase('/sooke.png'),
    screenshots: [
      {
        src: withBase('/sooke-1.png'),
        label: 'Rewards app preview',
      },
      {
        src: withBase('/sooke-2.png'),
        label: 'Rewards app preview',
      },
      {
        src: withBase('/sooke-3.png'),
        label: 'Rewards app preview',
      },
    ],
    action: { label: 'View Screenshots', href: '#', type: 'screens' },
  },
  {
    title: 'Kabrita - Learning & Rewards SPA',
    desc: 'Developed responsive course page layouts and reusable UI components for a learning and rewards SPA platform. Implemented adaptive navigation flows with TypeScript and Django, ensuring cross-browser compatibility and WCAG accessibility.',
    stack: 'Django · TypeScript · Responsive SPA · WCAG Accessibility',
    image: withBase('/kabrita.png'),
    screenshots: [
      {
        src: withBase('/kabrita-1.png'),
        label: 'Learning platform preview',
      },
      {
        src: withBase('/kabrita-2.png'),
        label: 'Learning platform preview',
      },
      {
        src: withBase('/kabrita-3.png'),
        label: 'Learning platform preview',
      },
    ],
    action: { label: 'View Screenshots', href: '#', type: 'screens' },
  },
];
