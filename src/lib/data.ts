export const profile = {
  name: "Viraj Bakshi",
  role: "Robotics Engineer & Software Developer",
  tagline:
    "I build real-time control systems that keep humans in the loop — from multimodal robot interfaces in research to CAD and engineering-workflow automation in industry.",
  location: "Pune, India",
  email: "virajbakshi083@gmail.com",
  resumeSummary:
    "Mechanical engineer (COEP Technological University) working across robotics, human-robot interaction, and engineering automation. I've built ground control stations for drones, designed multimodal control systems for a collaborative robot, and shipped multi-agent CAD/PLM automation workflows for enterprise clients.",
  socials: {
    fiverr: "https://www.fiverr.com/s/1EAyyxp",
    linkedin: "https://www.linkedin.com/in/viraj-bakshi/",
    instagram: "https://www.instagram.com/virajbakshi._/",
    x: "https://x.com/vjbakshi",
  },
};

export const education = {
  school: "COEP Technological University, Pune",
  degree: "Bachelor of Engineering in Mechanical Engineering",
  period: "2021 – 2025",
  coursework:
    "Engineering Mechanics, Heat Transfer, Fluid Mechanics, Machine Design, Control Systems",
};

export const experience = [
  {
    role: "Robotics Intern",
    org: "Nova Robotics",
    period: "May 2026 – Jun 2026",
    bullets: [
      "Built a ground control station (GCS) on a Raspberry Pi running a custom-built operating system for drone command, control, and monitoring.",
      "Designed and assembled a quadcopter from the ground up, integrating flight electronics and control hardware.",
      "Organized and conducted flight tests for interceptor drones, capturing performance data to inform iteration.",
    ],
  },
  {
    role: "Technical Sales Executive",
    org: "CCTech, Pune",
    period: "Jul 2025 – Apr 2026",
    bullets: [
      "Worked with engineering and manufacturing teams to understand how design data, tools, and processes influence engineering outcomes.",
      "Contributed to solutions involving CAD automation, parameter-driven models, and rule-based engineering workflows to reduce repetitive design effort.",
      "Created multi-agent engineering workflows for MNC clients, organized through a central orchestrator connected to CAD and simulation systems, along with local and vendor databases, using the Model Context Protocol (MCP).",
      "Supported early project scoping and RFQ discussions by breaking down engineering requirements into effort estimates, data needs, and delivery timelines.",
      "Coordinated with software developers, design engineers, and business stakeholders to enable smooth data exchange between CAD tools, web interfaces, and enterprise platforms.",
      "Gained hands-on exposure to PDM/PLM concepts such as version control, lifecycle states, and engineering change processes using Autodesk Vault and Fusion Manage.",
    ],
  },
  {
    role: "Research & Development Intern",
    org: "Bharat Forge Ltd., Pune",
    period: "May 2024 – Jul 2024",
    bullets: [
      "Conducted technical study of electric vehicle drivetrain architectures, focusing on passenger vehicle components such as e-axles and e-transmissions.",
      "Analyzed functional requirements of EV powertrain components to understand design considerations affecting efficiency, torque delivery, and packaging constraints.",
      "Developed a structured calculation sheet for the geometric design of planetary gearboxes to support parameter evaluation and load distribution analysis.",
      "Automated repetitive Abaqus simulation workflows using shell scripting to streamline command-line operations and reduce manual execution steps.",
    ],
  },
  {
    role: "Web & Application Head",
    org: "MindSpark, COEP",
    period: "Jun 2023 – Mar 2024",
    bullets: [
      "Led the development and deployment of large-scale web systems supporting registrations, certificates, and event operations.",
      "Managed a multidisciplinary technical team to deliver secure, high-availability platforms handling over one million user interactions.",
      "Collaborated with academic and industry partners to support national-level hackathons and technical events.",
    ],
  },
];

export const research = {
  project: {
    title:
      "B.Tech Project — Performance Analysis of Multimodal System of Collaborative Robot",
    period: "2024 – 2025",
    org: "COEP Technological University, Pune",
    advisor: "Dr. Shantipal Ohol, Dept. of Mechanical Engineering",
    bullets: [
      "Designed and implemented a unified multimodal control system for a Mitsubishi Electric MELFA ASSISTA RV-5AS-D collaborative robot, integrating voice, gesture, joystick, and VR (Meta Quest 3 / Unity) input modalities.",
      "Built the real-time control stack in C++ with multithreaded UDP communication achieving sub-50 ms command latency; developed gesture and speech pipelines in Python using OpenCV, MediaPipe, and Google Speech Recognition.",
      "Conducted a structured performance study using a Taguchi L9 orthogonal array (27 runs across modes), analyzing the effect of speed, distance, and payload on response time and positional accuracy through S/N ratio and ANOVA analysis.",
      "Achieved a best-case 4.81 s response time and 0.333 mm positional accuracy; identified Distance as the sole statistically significant driver of positional error (p = 0.003).",
      "Designed supporting mechanical components (pen-holder end effector, weighing pan) with spring-force calculations and FEA validation.",
    ],
  },
  publication: {
    title:
      "Evaluation of Multimodal Interaction System for Collaborative Robot Control",
    venue: "16th ICCCNT 2025 (Accepted; in press, EasyChair Proceedings Series)",
    description:
      "Co-authored a peer-reviewed paper presenting the experimental evaluation of the multimodal HRI system and its optimized operating parameters.",
  },
  interests: [
    "Multimodal and immersive (VR / teleoperation) control interfaces, with an emphasis on preserving operator intent under real-time constraints",
    "Human-in-the-loop and shared-autonomy control, particularly lowering the interaction barrier for non-expert operators",
    "Perception-driven manipulation: mapping vision- and gesture-based input to robust end-effector behaviour",
    "The interplay between low-latency control architectures and the human-factors considerations that govern real-world adoption",
  ],
};

export const skills = [
  {
    category: "Robotics & Control",
    items: [
      "ROS",
      "Real-time C++ control systems",
      "Multithreading & UDP/socket communication",
      "Human-robot interaction (HRI)",
    ],
  },
  {
    category: "AI, Data & Perception",
    items: [
      "Machine learning fundamentals",
      "Computer vision (OpenCV, MediaPipe)",
      "Data preparation & feature engineering",
      "Model evaluation",
    ],
  },
  {
    category: "Programming & Tools",
    items: ["Python", "C++ (OOP, multithreading)", "C#", "JavaScript", "Git"],
  },
  {
    category: "Engineering Systems & Automation",
    items: [
      "Parametric modelling",
      "Engineering workflow automation",
      "Design data organization",
      "Effort & feasibility estimation",
    ],
  },
  {
    category: "CAD & Engineering Platforms",
    items: [
      "AutoCAD",
      "Fusion 360",
      "Autodesk Inventor (basic)",
      "Autodesk Vault & Fusion Manage",
    ],
  },
];

export type Gig = {
  title: string;
  blurb: string;
  tags: string[];
  startingPrice: number;
  deliveryDays: number;
};

export const gigs: Gig[] = [
  {
    title: "Full stack web application with custom features",
    blurb:
      "I build fast, scalable full-stack web applications with modern UI, APIs, a database, authentication, and integrations — clean, production-ready code from idea to deployment.",
    tags: ["full stack developer", "web application", "react developer", "next js", "custom web app"],
    startingPrice: 80,
    deliveryDays: 5,
  },
  {
    title: "Figma UI to pixel-perfect responsive website",
    blurb:
      "I transform your Figma design into a pixel-perfect, responsive, fast, production-ready website with clean code and smooth interactions.",
    tags: ["figma to website", "figma to react", "frontend developer", "responsive website"],
    startingPrice: 50,
    deliveryDays: 3,
  },
  {
    title: "Premium Shopify, Wix, or Framer website",
    blurb:
      "I design and build a premium Shopify, Wix, or Framer website with a modern layout, smooth interactions, SEO, and conversion-focused UX for your business.",
    tags: ["shopify website", "wix website", "framer website", "ecommerce"],
    startingPrice: 60,
    deliveryDays: 3,
  },
  {
    title: "Custom features, API integrations & website fixes",
    blurb:
      "I add custom functionality, APIs, integrations, and database features, or fix complex issues on your existing website or web application.",
    tags: ["custom website", "api integration", "javascript developer", "bug fixing"],
    startingPrice: 40,
    deliveryDays: 2,
  },
];
