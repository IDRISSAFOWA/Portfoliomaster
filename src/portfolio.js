/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//--traduit
//SEO Related settings npm install @mui/material @mui/styled-engine-sc styled-components
const seo = {
  title: "IDRISSE AFOWA Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "IDRISSE AFOWA Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//--traduit 
//Home Page
const greeting = {
  title: "IDRISSE AFOWA",
  logo_name: "Idrisse Afowa",
  nickname: "Devops Engineer C# ASP.NET / REACT JS",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink_Fr: "https://drive.google.com/file/d/1GnQdpK4PTmofi2xKccAOepKFCGrdV2VJ/view?usp=drive_link",
  resumeLink_En:"https://drive.google.com/file/d/1PNawTUyFwBYhSoRIF2jY4ax3jnD62sRT/view?usp=drive_link",
  portfolio_repository: "https://github.com/IDRISSAFOWA/Portfoliomaster",
  githubProfile: "https://github.com/IDRISSAFOWA",
};

//--non traduit
const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/IDRISSAFOWA",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/idrisse-afowa-973655242",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:afowatedongmo4@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Skype",
    link: "https://join.skype.com/invite/FGcfwuSSGjw8",
    fontAwesomeIcon: "fa fa-skype", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#E1F2FA12", // Reference https://simpleicons.org/?q=x
  } ,
  {
    name: "X-Twitter",
    link: "https://twitter.com/idrisseAfowa",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  } ,
  {
    name: "Whatsapp",
    link: "https://api.whatsapp.com/send?phone=237680698612",
    fontAwesomeIcon: "fa-brands fa-whatsapp", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#25D366", // Reference https://simpleicons.org/?q=x
  } 
];

//--traduit
const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-JS",
        "⚡ Creating application backend API REST in ASP.NET CORE ",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#4C70A7",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "fa-brands fa-node-js",
          style: {
            color: "#326490",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "ASP.NET CORE",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: {
            color: "#160F1D",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        }, 
        {
          skillName: "GIT",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#FA8E1A",
          },
        }
      ],
    },
    {
      title: "Database Manager",
      fileName: "DatabaseManager",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices"
      ],
      softwareSkills: [
      
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "SQL SERVER",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#C85F39",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        }
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
       
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Canvas ",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#115BAF",
          },
        }
      ],
    }
  ]
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "React JS",
      iconifyClassname: "simple-icons:react",
      style: {
        color: "#1BAEF7",
      },
      profileLink: "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM/",
    },
    {
      siteName: "ANSSI SECURITY",
      iconifyClassname: "simple-icons:anssi",
      style: {
        color: "#CA8428",
      },
      profileLink: "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM/",
    }
  
  ],
};

const degrees = {
  degrees: [
    {
      title: "UNIVERSITY INSTITUTE OF TECHNOLOGY OF DOUALA",
      subtitle: "BACHELOR in Sofware Engineering",
      logo_path: "IUT_D.png",
      alt_name: "Indiana University Bloomington",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://iut-dla.cm/page/departement/gi.php",
    },
    {
      title: "UNIVERSITY INSTITUTE OF TECHNOLOGY OF BANDJOUN",
      subtitle: "Sofware Engineering degree (DUT) ",
      logo_path: "IUT-FV.jpg",
      alt_name: "IIITDM Kurnool",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development."
      ],
      website_link: "https://www.univ-dschang.org/iutfv-bandjoun/",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "React JS",
      subtitle: "Dévélopement web react js",
      logo_path: "Great_Learning.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Great Learning",
      color_code: "#8C151599",
    },
    {
      title: "IT security ",
      subtitle: "Workstation security and standardization",
      logo_path: "ANSSI.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with Full stack Developer, Full stack engineer. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full stack Developer",
          company: "MUPECI( MUTUAL FOR THE PROMOTION OF SAVINGS AND INVESTMENT CREDITS ) || FINANCIAL INSTITUTION",
          company_url: "https://www.mupeci.cm",
          logo_path: "LogoMUPECI.jpg",
          duration: "October 2022 - current",
          location: "Douala, Cameroun",
          description:
            "Working in Software development using different Technologies.Project management by managing the schedule in order to put deliverables back on schedule  fixed deadline. allow operational staff to use the tools. Verifying the proper functioning of programs, conducting tests techniques, analysis of anomalies identified and implementation of actions  correctives.",
          color: "#0879bf",
        }
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full stack Developer",
          company: "MUPECI",
          company_url: "https://www.mupeci.cm",
          logo_path: "LogoMUPECI.png",
          duration: "April 2022 - Juin 2022",
          location: "Douala, Cameroun",
          description:
            "Development of the functionalities of an application by providing innovative technical solutions corresponding to the customer's needs.",
          color: "#000000",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
       
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Fullstack projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};


const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "unnamed.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Typescript,React,ASP.NET CORE API  and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "DOUALA ,CAMEROUN BONAMOUSSADI",
    locality: "Kanodar",
    country: "CM",
    region: "LITTORAL",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
