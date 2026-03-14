export interface Experience {
  company: string;
  url: string;
  role: string;
  period: string;
  logo: string;
  description: string;
  tech: string[];
  achievements: string[];
}

export const experience: Experience[] = [
  {
    company: "Maribel Health",
    url: "https://www.maribelhealth.com",
    role: "VP / Head of Engineering",
    period: "2022 – Present",
    logo: "/logos/maribel.png",
    description:
      "First technical hire. Built the engineering org, product culture, and AI platform from scratch. Currently diving deep into agentic systems and hypermedia.",
    tech: ["Python", "TypeScript", "AWS", "LLMs", "HATEOAS", "Terraform"],
    achievements: [
      "Built agentic AI platform for healthcare workflows",
      "Designed Hymermedia-AI for automated feature discovery",
      "Established product-led engineering culture",
    ],
  },
  {
    company: "Codecademy",
    url: "https://www.codecademy.com",
    role: "Director of Engineering / GM",
    period: "2020 – 2022",
    logo: "/logos/codecademy.png",
    description:
      "Ran the Free Business Unit end-to-end — engineering, product, growth, and P&L. Revamped the SDLC with XP practices to reduce defects and increase velocity across the org.",
    tech: ["Ruby", "React", "Go", "PostgreSQL", "AWS"],
    achievements: [
      "Scaled platform serving 4.5M+ monthly learners",
      "Rebuilt payment gateway — 3x conversion US, 5x India",
      "Founded and led a 50+ person multidisciplinary org",
    ],
  },
  {
    company: "AlphaSights",
    url: "https://www.alphasights.com",
    role: "Senior Engineering Manager",
    period: "2018 – 2020",
    logo: "/logos/alphasights.png",
    description:
      "Cut average time from feature conception to business impact from two months to two weeks. Redesigned the product development process and trained the first generation of PMs.",
    tech: ["React", "TypeScript", "Ruby on Rails", "Kotlin"],
    achievements: [
      "Unblocked Ember→React migration stalled for 2 years, finished in 3 months",
      "New hires shipped to production within their first week",
      "Started internal communities for engineering practices",
    ],
  },
  {
    company: "Shutterstock",
    url: "https://www.shutterstock.com",
    role: "Senior Development Manager, Search",
    period: "2016 – 2018",
    logo: "/logos/shutterstock.png",
    description:
      "Led Search Platform and Search Data for all business units. Early internal advocate for generative AI — pitched leadership on both the opportunity and the existential threat as early as 2017.",
    tech: ["Elasticsearch", "Java", "Scala", "Python", "Kafka"],
    achievements: [
      "Reduced architecture from 12 to 3 services — 15PB/month indexing",
      "Introduced IaC with Terraform and led bare metal → AWS migration",
      "Built log-based Kafka event pipeline for asset metadata lifecycle across teams",
    ],
  },
  {
    company: "Canary",
    url: "https://canary.is",
    role: "Senior Engineering Manager, IoT Cloud",
    period: "2015 – 2016",
    logo: "/logos/canary.png",
    description:
      "Restructured the engineering org from vertical silos to horizontal multidisciplinary teams, cutting average development time by over 30%.",
    tech: ["Python", "AWS", "IoT", "Docker", "Microservices"],
    achievements: [
      "Rearchitected device-to-cloud communication platform",
      "Same user base served with 23% of previous infrastructure",
      "$1.2M annual savings through AWS storage optimization",
    ],
  },
  {
    company: "PayPerks",
    url: "https://www.payperks.com",
    role: "VP / Staff Engineering",
    period: "2013 – 2015",
    logo: "/logos/payperks.png",
    description:
      "Rebuilt the platform from the ground up with zero user impact. Trained remote contractors in XP and Agile methodologies — traveling to the Middle East to run hands-on workshops and agile games.",
    tech: ["Django", "PostgreSQL", "Redis", "Celery", "AWS"],
    achievements: [
      "Full platform migration hot-swapped into production",
      "Established XP practices with fully automated deployments",
      "Grew and mentored the engineering team from 4 to 22",
    ],
  },
  {
    company: "globo.com",
    url: "https://www.globo.com",
    role: "Tech Lead / Staff Engineer",
    period: "2008 – 2013",
    logo: "/logos/globo.png",
    description:
      "Led a platform team serving 18 engineering teams at Brazil's largest media company. Designed reusable, composable components that became the foundation across all digital products.",
    tech: ["Python", "Java", "Django", "Nginx", "Redis"],
    achievements: [
      "Architected 'globocore' platform — 22M unique daily visitors",
      "Built Latin America's most widely deployed semantic web system",
      "Composable HATEOAS APIs reduced implementation costs by 33%",
    ],
  },
];
