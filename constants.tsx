
import { Experience, Education, Publication, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Chibueze Clinton",
  email: "chibuezeclint@gmail.com",
  phone: "(+44) 07928 592262",
  linkedin: "https://www.linkedin.com/in/chibueze-clinton/",
  summary: "Proactive and results-driven professional with experience in EMEA tax operations, wealth client services, business research, and operations management. Skilled in delivering accurate financial analysis, process optimisation, and data-driven insights to support strategic decision-making."
};

export const EXPERIENCES: Experience[] = [
  {
    company: "BARCLAYS BANK PLC",
    role: "EMEA Tax Operations Analyst",
    location: "United Kingdom",
    period: "July 2025 – Jan 2026",
    highlights: [
      "Automated complex withholding tax calculations on excel with 100% accuracy saving 50 hours per annum.",
      "Recognised by the COO for reliability in completing UK and Italy tax calculations under tight deadlines.",
      "Identified and corrected discrepancies in transactional reports, contributing to risk management and cleaner audit trails.",
      "Prepared and reviewed filings across multiple jurisdictions including France, Japan, Italy, and Switzerland."
    ]
  },
  {
    company: "BARCLAYS BANK PLC",
    role: "Wealth Management Client Services Executive",
    location: "United Kingdom",
    period: "September 2024 – July 2025",
    highlights: [
      "Created an interactive Excel dashboard reducing errors by 95% and improving overall operational efficiency.",
      "Collaborated with peers in wealth and premiere banking to foster a culture of continuous improvement.",
      "Achieved 100% employee survey response rate in team through strategic internal engagement workshops."
    ]
  },
  {
    company: "GREGGS",
    role: "Team Member, Customer Experience",
    location: "United Kingdom",
    period: "March 2023 – September 2024",
    highlights: [
      "Formulated an in-store strategy using Power BI data on customer demand, leading to a 15% reduction in food waste.",
      "Managed high-volume customer inquiries and escalations while maintaining high satisfaction standards."
    ]
  },
  {
    company: "LAGOS BUSINESS SCHOOL",
    role: "Consulting, Research, and Teaching Assistant",
    location: "Nigeria",
    period: "June 2020 - September 2022",
    highlights: [
      "Published six articles in top-tier journals based on in-depth literature reviews and data analysis.",
      "Developed curriculum for graduate courses in strategic management and business ethics.",
      "Supported faculty in empirical research, survey design, and statistical analysis for industry practitioners.",
      "Assisted consultants in optimizing operational processes, resulting in a 10% increase in efficiency for clients."
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    institution: "UNIVERSITY OF GLASGOW",
    degree: "MSc Management (Distinction)",
    period: "2023",
    achievements: [
      "Led team in the McKinsey UK SolveIt Challenge.",
      "Awarded University of Glasgow African and Caribbean Excellence Partners Scholarship."
    ]
  },
  {
    institution: "UNIVERSITY OF IBADAN",
    degree: "BA Classics (First Class)",
    period: "2018",
    achievements: [
      "Graduated Summa Cum Laude (6.6/7.0).",
      "Awarded Best Graduating Student, Faculty of Arts.",
      "Two-time Gamaliel Onosode Scholarship recipient."
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    authors: "Ojadi, F.X.I., Iheanacho, N., Clinton, C. and Maiyaki, S.F.",
    year: 2024,
    title: "Customer satisfaction survey of the Bus Rapid Transit (BRT) Service in Lagos",
    journal: "Journal Of Economics and Allied Research (JEAR), P.352"
  },
  {
    authors: "Clinton, C. and Chatrath, S.K.",
    year: 2022,
    title: "The value of consumer awareness and corporate social responsibility in marketing: An overview",
    journal: "Products for Conscious Consumers: Developing, Marketing and Selling Ethical Products, pp.49-63"
  },
  {
    authors: "Adekannbi, G.O. and Clinton, C.",
    year: 2020,
    title: "Xenophobic sentiments: the meeting point of Julio-Claudian Rome and Ramaphosa’s South Africa",
    journal: "Xenophobic sentiments: the meeting point of Julio-Claudian Rome and Ramaphosa’s South Africa"
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Specialized Knowledge",
    items: ["EMEA Tax Operations", "Regulatory Compliance (KYC/AML)", "Risk Management", "Client Relationship Management"]
  },
  {
    category: "Technical & Data",
    items: ["Data Analysis (SQL)", "Financial Analysis (Excel, Power BI)", "Salesforce Sales Operations", "Process Management"]
  },
  {
    category: "Soft Skills",
    items: ["Cross-functional collaboration", "Innovation in Problem Solving", "Time management", "Business Research"]
  }
];
