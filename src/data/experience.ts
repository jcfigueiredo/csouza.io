export interface Experience {
  company: string;
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
    role: "VP / Head of Engineering",
    period: "2022 – Present",
    logo: "/logos/maribel.png",
    description:
      "First technical hire. Built the engineering org, product culture, and AI platform from scratch. Currently diving deep into agentic systems and hypermedia.",
    tech: ["Python", "TypeScript", "AWS", "LLMs", "HATEOAS", "Terraform"],
    achievements: [
      "Built engineering team from 0 to 12",
      "Launched agentic AI platform for healthcare workflows",
      "Designed HATEOAS-driven API architecture",
      "Established product-led engineering culture",
    ],
  },
  {
    company: "Codecademy",
    role: "Director of Engineering / GM",
    period: "2020 – 2022",
    logo: "/logos/codecademy.png",
    description:
      "Ran the Free Business Unit end-to-end — engineering, product, growth, and P&L. Scaled the platform for tens of millions of learners.",
    tech: ["Ruby", "React", "Go", "PostgreSQL", "AWS"],
    achievements: [
      "Owned full P&L for the Free Business Unit",
      "Scaled platform to tens of millions of active learners",
      "Led cross-functional team across eng, product, and growth",
    ],
  },
  {
    company: "AlphaSights",
    role: "Senior Engineering Manager",
    period: "2018 – 2020",
    logo: "/logos/alphasights.png",
    description:
      "Transformed shipping culture through Lean practices and redesigned the product development process. Led a major frontend platform migration.",
    tech: ["React", "TypeScript", "Ruby on Rails", "Kotlin"],
    achievements: [
      "Transformed shipping culture with Lean practices",
      "Led frontend platform migration to React/TypeScript",
      "Redesigned the product development process",
    ],
  },
  {
    company: "Shutterstock",
    role: "Senior Development Manager, Search",
    period: "2016 – 2018",
    logo: "/logos/shutterstock.png",
    description:
      "Led Search Platform and Search Data for all business units. Rebuilt the search infrastructure at scale and was an early internal advocate for generative AI.",
    tech: ["Elasticsearch", "Java", "Scala", "Python", "Kafka"],
    achievements: [
      "Rebuilt search infrastructure serving all business units",
      "Early internal advocate for generative AI applications",
      "Scaled search platform to handle billions of queries",
    ],
  },
  {
    company: "Canary",
    role: "Senior Engineering Manager, IoT Cloud",
    period: "2015 – 2016",
    logo: "/logos/canary.png",
    description:
      "Rearchitected the IoT cloud platform for device-to-cloud communication. Dramatically simplified the stack and reduced infrastructure costs.",
    tech: ["Python", "AWS", "IoT", "Docker", "Microservices"],
    achievements: [
      "Rearchitected IoT cloud for device-to-cloud comms",
      "Dramatically reduced infrastructure costs",
      "Simplified the tech stack from 12 services to 4",
    ],
  },
  {
    company: "PayPerks",
    role: "VP / Staff Engineering",
    period: "2013 – 2015",
    logo: "/logos/payperks.png",
    description:
      "Grew the team from 4 to 22 and rebuilt the platform from the ground up. Established XP practices and fully automated deployments from day one.",
    tech: ["Ruby", "Rails", "PostgreSQL", "JavaScript", "CI/CD"],
    achievements: [
      "Grew engineering team from 4 to 22",
      "Rebuilt platform from the ground up",
      "Fully automated deployments from day one",
    ],
  },
  {
    company: "globo.com",
    role: "Tech Lead / Staff Engineer",
    period: "2008 – 2013",
    logo: "/logos/globo.png",
    description:
      "Built content delivery and platform infrastructure for Brazil's largest media company. Led cross-team developer tooling that served as the foundation across all digital products.",
    tech: ["Python", "Java", "Django", "Nginx", "Redis"],
    achievements: [
      "Built content delivery for Brazil's largest media company",
      "Created cross-team developer tooling used across all products",
      "Platform infrastructure serving millions of daily users",
    ],
  },
];
