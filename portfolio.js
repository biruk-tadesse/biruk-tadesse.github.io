import emoji from "react-easy-emoji";

export const greetings = {
  name: "Biruk Tadesse",
  title: "Hello, I'm Biruk",
  description:
    "I am a seasoned professional with a strong background in Computer Science, holding both a Bachelor's and Master's degree. I excel at meeting project deadlines and collaborating effectively in remote settings. My standout quality lies in my ability to communicate complex technical concepts clearly to both technical and non-technical stakeholders. I bring a potent mix of academic achievements, practical experience, and communication skills to contribute significantly to high-impact projects.",
  resumeLink:
    "https://drive.google.com/file/d/1cftbA67Kd742TqzNHIKS1aKahDVNYpg2/view?usp=sharing",
};

export const openSource = {
  githubUserName: "biruk-tadesse",
};

export const contact = {};

export const socialLinks = {
  twitter: "https://twitter.com/biruk_t_tefera",
  github: "https://github.com/biruk-tadesse",
  linkedin: "https://www.linkedin.com/in/biruktadesse/",
  credly: "https://www.credly.com/users/biruk.tadesse",
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
          skillName: "Oracle",
          fontAwesomeClassname: "logos:oracle",
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
    schoolName: "Bahir Dar University",
    subHeader: "Master of Science in Computer Science",
    duration: "November 2015 - March 2018",
    desc: <a href="https://bdu.edu.et/" target="_blank"><strong>Address</strong></a>,

  },

];

export const experience = [
  {
    role: "Specialist (Full time)",
    company: "Safaricom",
    companylogo: "/img/icons/common/safari.jpeg",
    date: "December 2022 – Now", 
    desc: <a href="https://safaricom.et/" target="_blank"><strong>Address</strong></a>,
   
  },
];

export const projects = [
  {
    name: "Contact me",
    link: "mailto:biruk.tadesse@outlook.com",
  },
];

export const feedbacks = [


  {
    certificationName: "Meta Full-Stack Engineer Certificate",
    issueDate: "11/01/2024",
    link: <a href="https://www.credly.com/badges/98f07028-044a-4b02-8cbc-2b0c6193b0e9/public_url" target="_blank"><strong>View</strong></a>,
  },
  {
    certificationName: "Meta Database Engineer Certificate",
    issueDate: "21/12/2023",
    link: <a href="https://www.credly.com/badges/52b705b6-2eeb-4dab-9c4a-067a015a0c11/public_url" target="_blank"><strong>View</strong></a>,
  },
  {
    certificationName: "Google Project Management Certificate",
    issueDate: "08/12/2023",
    link: <a href="https://www.credly.com/badges/3a52fe9f-da36-493e-8f18-c1b89b5d198d/public_url" target="_blank"><strong>View</strong></a>,
  },
  {
    certificationName: "Google Data Analytics Certificate",
    issueDate: "17/12/2023",
    link: <a href="https://www.credly.com/badges/27c1b82e-e1b7-4681-9c5b-4e5ffe97d72c/public_url" target="_blank"><strong>View</strong></a>,
  },
  {
    certificationName: "Google IT Support Certificate",
    issueDate: "25/12/2023",
    link: <a href="https://www.credly.com/badges/8fcf9f8c-04f1-4d6d-98b2-b138fb151272/public_url" target="_blank"><strong>View</strong></a>,
  },
  {
    certificationName: "Google Digital Marketing & E-commerce Certificate",
    issueDate: "17/12/2023",
    link: <a href="https://www.credly.com/badges/233b52cd-6c7c-401d-aaab-f75d00dbc4fe/public_url" target="_blank"><strong>View</strong></a>,
  },
  {
    certificationName: "Google Cybersecurity Certificate",
    issueDate: "17/12/2023",
    link: <a href="https://www.coursera.org/account/accomplishments/specialization/AQH43CSB2RUS" target="_blank"><strong>View</strong></a>,
  },
  {
    certificationName: "Google Cloud Database Engineer Certificate",
    issueDate: "25/12/2023",
    link: <a href="https://www.coursera.org/account/accomplishments/specialization/HH9SU4HJT794" target="_blank"><strong>View</strong></a>,
  },
  {
    certificationName: "Securing API Servers",
    issueDate: "18/01/2024",
    link: <a href="https://www.credly.com/badges/8c0c7fe9-6c13-4097-8e1b-effb65065451/public_url" target="_blank"><strong>View</strong></a>,
  },
  {
    certificationName: "Network Technician",
    issueDate: "23/01/2024",
    link: <a href="https://www.credly.com/badges/6a8be9bc-5ba9-40a7-bd0a-ebd18a4075f1/public_url" target="_blank"><strong>View</strong></a>,
  },
  {
    certificationName: "AWS Cloud Solutions Architect Certificate",
    issueDate: "25/12/2023",
    link: <a href="https://www.coursera.org/account/accomplishments/specialization/QKXD5SVGXC7B" target="_blank"><strong>View</strong></a>,
  },
  {
    certificationName: "Oracle Cloud Infrastructure 2023 Certified Architect Professional",
    issueDate: "29/09/2023",
    link: <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=C298C28BC33BF5AD91405818FFC6F5EBD75E8610002F040D650086BA8715E00E" target="_blank"><strong>View</strong></a>,
  },
  {
    certificationName: "Oracle Cloud Infrastructure 2023 Certified Data Science Professional",
    issueDate: "19/09/2023",
    link: <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=CABE57EB0CBE8F34A57229DCAA6B7652225DF6C200776FF432BD862CB84A24C0" target="_blank"><strong>View</strong></a>,
  },
  {
    certificationName: "Oracle Cloud Infrastructure 2023 Certified DevOps Professional",
    issueDate: "18/09/2023",
    link: <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=C6AE2F0EAE290EC8B92EEB75F4BFC51F5FA95CD86D427B0FF00316E5E57CDE13" target="_blank"><strong>View</strong></a>,
  },
  {
    certificationName: "Oracle Cloud Infrastructure 2023 Certified Developer Professional",
    issueDate: "17/09/2023",
    link: <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=25B4C4B4E9D8C72AF9D3FF320105A456296A4D84D987AF7B2BB50A46199FA10E" target="_blank"><strong>View</strong></a>,
  },
  {
    certificationName: "ALX Software Engineering Programme ┊ Back End Development",
    issueDate: "29/11/2023",
    link: <a href="https://intranet.alxswe.com/certificates/fRr63TxcFC" target="_blank"><strong>View</strong></a>,
  },
  {
    certificationName: "Artificial Intelligence Analyst Mastery Award",
    issueDate: "14/12/2019",
    link: <a href="https://www.credly.com/badges/0e13a1b3-ff97-49d0-81f1-a8e249a14645/public_url" target="_blank"><strong>View</strong></a>,
  },
  {
    certificationName: "Big Data Engineer on Cloud Mastery Award",
    issueDate: "12/10/2019",
    link: <a href="https://www.credly.com/badges/58be4851-64ef-49f7-8c28-22157fec52eb/public_url" target="_blank"><strong>View</strong></a>,
  },

];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
  title: "Biruk Tadesse",
  description:
    "A seasoned professional with a strong background in Computer Science, bringing a potent mix of academic achievements, practical experience, and communication skills to contribute significantly to high-impact projects.",
  author: "Biruk Tadesse",
  image:
    "https://avatars.githubusercontent.com/u/79448312?s=400&u=b82b117233e7267b7a636a16c548920b7af85d10&v=4",
  keywords: ["Biruk", "Biruk Tadesse", "@biruk-tadesse"],
};
