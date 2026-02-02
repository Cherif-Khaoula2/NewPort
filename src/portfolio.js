/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Khaoula Cherif",
  title: "Bonjour, I'm Khaoula",
  subTitle: emoji(
    "Ingénieure en Intelligence Artificielle & Full Stack Developer 🚀, spécialisée dans le développement d’applications web et mobiles intelligentes. Passionnée par l’IA, l’optimisation des processus métiers et la création de solutions performantes à fort impact."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1KKX6Wwbs6QQnhZ-QrSY7hTj3HTuhPLnN/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Cherif-Khaoula2",
  linkedin: "https://www.linkedin.com/in/kha-oula-cherif/",
  gmail: "khaoulacherif2023@gmail.com",
 
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "Ce que je fais",
  subTitle:
    "FULL STACK DEVELOPER & INGÉNIEURE IA PASSIONNÉE PAR LES APPLICATIONS WEB ET MOBILES INTELLIGENTES",
  skills: [
    "⚡ Développement d’interfaces Frontend interactives pour applications web et mobiles",
    "⚡ Conception d’applications Full Stack robustes et évolutives",
    "⚡ Intégration de solutions intelligentes et de services tiers (API, Firebase, Cloud)",
    "⚡ Optimisation des processus métiers et aide à la décision"
  ],

  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "TypeScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "Angular", fontAwesomeClassname: "fab fa-angular" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "Flutter", fontAwesomeClassname: "fas fa-mobile-alt" },
    { skillName: "PHP", fontAwesomeClassname: "fab fa-php" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" }
  ],

  display: true
};

// Education Section

const educationInfo = {
  display: true, // Mettre false pour masquer cette section
  schools: [
    {
      schoolName: "Université d'Alger 1 – Benyoucef Benkhedda",
      logo: require("./assets/images/alger1Logo.png"),
      subHeader:
        "Master en Ingénierie des Systèmes Informatiques Intelligents",
      duration: "Septembre 2023 – Juin 2025",
      desc:
        "Formation orientée vers le développement de systèmes intelligents, l’ingénierie logicielle avancée et l’aide à la décision.",
      descBullets: [
        "Intelligence artificielle et systèmes intelligents",
        "Développement d’applications web et mobiles",
        "Gestion et analyse des données",
        "Conception de solutions orientées métier"
      ]
    },
    {
      schoolName: "Université d'Alger 1 – Benyoucef Benkhedda",
      logo: require("./assets/images/alger1Logo.png"),
      subHeader:
        "Licence en Ingénierie des Systèmes d’Information et des Logiciels",
      duration: "Septembre 2020 – Juin 2023",
      desc:
        "Formation fondamentale en informatique et en génie logiciel, axée sur la conception et le développement d’applications.",
      descBullets: [
        "Programmation orientée objet",
        "Génie logiciel et conception UML",
        "Développement web",
        "Bases de données et systèmes d’exploitation"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, // Mettre true pour afficher la section des niveaux
  experience: [
    {
      Stack: "Backend & APIs",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend / UI Design",
      progressPercentage: "80%"
    },
    {
      Stack: "Programmation & Déploiement",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true, // Mettre false pour masquer cette section
  experience: [
    {
      role: "Professeur des Mathématiques",
      company: "École La Base de l'Éducation – Bab el Oued, Algérie",
      companylogo: require("./assets/images/ecole.png"),
      date: "Septembre 2022 – Juin 2025",
      desc: "Préparation et enseignement de cours pour des élèves de collège et lycée. Conception de supports pédagogiques interactifs.",
      descBullets: [
        "Création de supports pédagogiques numériques et interactifs",
        "Accompagnement personnalisé des élèves pour faciliter la compréhension des concepts mathématiques",
        "Évaluation continue et suivi des progrès des élèves"
      ]
    },
    {
      role: "Stagiaire en Développement Web",
      company: "Algérie Télécom – Mohammadia, Algérie",
      companylogo: require("./assets/images/algtelecom.png"),
      date: "Février 2023 – Mai 2023",
      desc: "Développement d’un site web pour la gestion des courriers internes de l'entreprise en utilisant HTML, CSS et PHP.",
      descBullets: [
        "Conception et développement de l’application web interne",
        "Intégration de formulaires et gestion de la base de données",
        "Tests et débogage pour garantir la stabilité et la fiabilité de l’application"
      ]
    },
    {
      role: "Développeuse Full Stack IA (Stage de fin d’études)",
      company: "SARPI SPA – Hydra, Algérie",
      companylogo: require("./assets/images/logo-sarpi.png"),
      date: "Janvier 2025 – Juin 2025",
      desc: "Conception d’une solution web interne pour la gestion des marchés publics avec intégration de modèles de recommandation pour assister la commission dans la prise de décision.",
      descBullets: [
        "Développement Full Stack avec intégration d’algorithmes de recommandation",
        "Analyse des besoins et conception fonctionnelle de l’application",
        "Tests, optimisation et documentation de la solution"
      ]
    },
    {
      role: "Ingénieur Études et Développement",
      company: "SARPI SPA – Hydra, Algérie",
      companylogo:require("./assets/images/logo-sarpi.png"),
      date: "Septembre 2025 – Présent",
      desc: "Réalisation d’études techniques et fonctionnelles pour le développement de solutions logicielles et optimisation des applications internes.",
      descBullets: [
        "Analyse des besoins métiers et rédaction de spécifications techniques",
        "Développement et optimisation des applications internes pour améliorer les processus",
        "Collaboration avec les équipes pour assurer la qualité et la maintenabilité des solutions"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projets",
  subtitle: "Startups et entreprises que j’ai aidées à développer leur technologie",
  projects: [
    {
      projectName: "Site vitrine SARPI",
      projectDesc: "Conception et développement du site vitrine officiel de SARPI, présentant l'entreprise, ses activités et ses services.",
      technologies: ["Nextjs", "Laravel", "TypeScript", "PHP", "Tailwind", "Inertia"],
      image: require("./assets/images/sitesarpi.png"),
      footerLink: [
        { name: "Visiter le site", url: "https://sarpi.dz/" }
      ]
    },

    {
      projectName: "Intranet SARPI – Portail interne",
      projectDesc: "Conception et développement d’un intranet interne pour SARPI avec Drupal, centralisant les informations internes, documents et procédures, et facilitant la communication entre les services.",
      technologies: ["Drupal", "Intranet", "Communication interne", "Gestion documentaire"],
            image: require("./assets/images/portail.png"),

           footerLink: [
        { name: "Visiter le site", url: "http://nextu.se/" }
      ]
    },
    {
      projectName: "GMAT – Gestion matériel et maintenance",
      projectDesc: "Application de gestion du matériel et de la maintenance. Suivi quotidien du matériel et gestion des opérations de maintenance.",
      technologies: ["React", "Laravel", "TypeScript", "PHP", "Tailwind", "Inertia"],
      image: require("./assets/images/gmat.png"),

           footerLink: [
        { name: "Visiter le site", url: "http://nextu.se/" }
      ]
    },
    {
      projectName: "Plateforme pour la commission des marchés (CME)",
      projectDesc: "Solution web interne pour la gestion des marchés publics, intégrant des modèles de recommandation basés sur l’IA pour optimiser les décisions.",
      technologies: ["Spring Boot", "Angular", "Java", "TypeScript", "API", "Microservices", "IA", "XGBoost", "Random Forest"],
       image: require("./assets/images/cme.png"),

           footerLink: [
        { name: "Visiter le site", url: "http://nextu.se/" }
      ]
    },
    {
      projectName: "TOSYS App",
      projectDesc: "Système pour créer, modifier, bloquer et réinitialiser les comptes Active Directory et Exchange pour SARPI SPA.",
      technologies: ["React", "Laravel", "JavaScript", "PHP", "Tailwind", "SSH", "Active Directory", "Exchange"],
       image: require("./assets/images/tosys.png"),

           footerLink: [
        { name: "Visiter le site", url: "http://nextu.se/" }
      ]
    },
    {
      projectName: "CND Platform",
      projectDesc: "Application pour la gestion centralisée des projets et utilisateurs pour le contrôle non descriptif. Gestion des ISOs, joints et PV, suivi des contrôles VT, RT, PT et PWHT.",
      technologies: ["React", "Laravel", "JavaScript", "PHP", "Tailwind", "Inertia"],
      image: require("./assets/images/cnd.png"),

           footerLink: [
        { name: "Visiter le site", url: "http://nextu.se/" }
      ]
    },
    {
      projectName: "Application web – Gestion des courriers",
      projectDesc: "Application web interne pour la gestion des courriers chez Algérie Télécom, avec suivi, archivage et traitement efficace des documents.",
      technologies: ["HTML", "CSS", "PHP", "Web", "Gestion documentaire"],
       image: require("./assets/images/courrier.png"),

           footerLink: [
        { name: "Visiter le site", url: "http://nextu.se/" }
      ]
    },
    
  
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactez-moi ☎️"),
  subtitle:
    "Vous voulez discuter d’un projet ou simplement dire bonjour ? Ma boîte mail est ouverte à tous.",
  number: "+213783279631 ", // Remplace par ton numéro réel
  email_address: "khaoulacherif2023@gmail.com" // Remplace par ton email réel
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
