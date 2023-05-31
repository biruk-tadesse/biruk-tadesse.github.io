import emoji from "react-easy-emoji";

export const greetings = {
  name: "Biruk Tadesse",
  title: "Hello, I'm Biruk",
  description:
    "I am an IT Specialist with diverse work experience, including software development, system administration, data analytics, lecturing, consulting, and providing IT support.",
  resumeLink:
    "https://drive.google.com/file/d/1cftbA67Kd742TqzNHIKS1aKahDVNYpg2/view?usp=sharing",
};

export const openSource = {
  githubUserName: "biruk-tadesse",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/biruk.tadesse.tefera",
  instagram: "https://www.instagram.com/biruk.t.tefera/",
  twitter: "https://twitter.com/biruk_t_tefera",
  github: "https://github.com/biruk-tadesse",
  linkedin: "https://www.linkedin.com/in/biruktadesse/",
};

export const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK DEVELOPER",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        "⚡ Building responsive Single-Page-Apps (SPA) in React and Angular",
        "⚡ Building high performing server side application using Micronaut and Nest.js",
        "⚡ Building responsive static websites using Next.js",
        "⚡ Building RESTful APIs in Django & Django REST Framework",
        "⚡ Proficient with Java, typescript and javascript ",
        "⚡ Building CI/CD pipeline with AWS and Github actions ",
        "⚡ Following standard development practice like clean coding, TDD and eXtreame programming",        
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "vscode-icons:file-type-django",
        },

        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        "⚡ Experience of working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "logos:heroku-icon",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "logos:github-actions",
        },
        {
          skillName: "Cloudinary",
          fontAwesomeClassname: "logos:cloudinary",
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "logos:nginx",
        },
        {
          skillName: "Sentry",
          fontAwesomeClassname: "logos:sentry-icon",
        },
      ],
    },
    
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", 
    progressPercentage: "90", 
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "90",
  },
  {
    Stack: "Research and Planning",
    progressPercentage: "95",
  },
];

export const educationInfo = [
  {
    schoolName: "BiT",
    subHeader: "Master of Science in Computer Science",
    duration: "November 2015 - March 2018",
    desc: "https://bit.bdu.edu.et/",
  },
  {
    schoolName: "ALX",
    subHeader: "Software Engineering Programme with a specialization in Back End Development",
    duration: "March 2022 - May 2023",
    desc: "https://www.alxafrica.com/",
  },

];

export const experience = [
  {
    role: "Specialist (Full time)",
    company: "Safaricom",
    companylogo: "/img/icons/common/safari.jpeg",
    date: "December 2022 – Now",    
  },
];

export const projects = [
  {
    name: "Contact me",
    link: "mailto:biruk.tadesse@outlook.com",
  },
];

export const feedbacks = [

];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
  title: "Biruk Tadesse",
  description:
    "an IT Specialist with diverse work experience, including software development, system administration, data analytics, lecturing, consulting, and providing IT support",
  author: "Biruk Tadesse",
  image:
    "https://avatars.githubusercontent.com/u/79448312?s=400&u=b82b117233e7267b7a636a16c548920b7af85d10&v=4",
  keywords: ["Biruk", "Biruk Tadesse", "@biruk-tadesse"],
};
