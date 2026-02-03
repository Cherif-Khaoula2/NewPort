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
  subtitle: "Startups et entreprises que j'ai aidées à développer leur technologie",
  projects: [
    {
      projectName: "Site vitrine SARPI",
      projectDesc: "Conception et développement du site vitrine officiel de SARPI, présentant l'entreprise, ses activités et ses services.",
      detailedDesc: "Site web moderne et responsive développé avec Next.js et Laravel, offrant une expérience utilisateur fluide et un design professionnel aligné avec l'identité de marque SARPI.",
      technologies: ["Next.js", "Laravel", "TypeScript", "PHP", "Tailwind CSS", "Inertia.js"],
      image: require("./assets/images/sitesarpi.png"),
      images: [
        require("./assets/images/sitesarpi/1.png"),
        require("./assets/images/sitesarpi/2.png"),
        require("./assets/images/sitesarpi/3.png"),
        require("./assets/images/sitesarpi/4.png"),
        require("./assets/images/sitesarpi/5.png"),
        require("./assets/images/sitesarpi/6.png"),
        require("./assets/images/sitesarpi/7.png"),
        require("./assets/images/sitesarpi/8.png"),
        require("./assets/images/sitesarpi/9.png"),
        require("./assets/images/sitesarpi/10.png"),
        require("./assets/images/sitesarpi/11.png"),
        require("./assets/images/sitesarpi/12.png"),
        require("./assets/images/sitesarpi/13.png"),
        require("./assets/images/sitesarpi/14.png"),
        require("./assets/images/sitesarpi/15.png"),
        require("./assets/images/sitesarpi/16.png"),
        require("./assets/images/sitesarpi/17.png"),
        require("./assets/images/sitesarpi/18.png"),
        require("./assets/images/sitesarpi/19.png"),
      ],
      features: [
        "Design moderne et responsive",
        "Animation fluide et transitions élégantes",
        "Système de gestion de contenu intégré",
        "Optimisation SEO avancée",
        "Performance optimisée (score Lighthouse 95+)"
      ],
      date: "2024",
      client: "SARPI SPA",
      duration: "3 mois",
      footerLink: [
        { name: "Voir la démo"}
      ]
    },

    {
      projectName: "Intranet SARPI – Portail interne",
      projectDesc: "Conception et développement d'un intranet interne pour SARPI avec Drupal, centralisant les informations internes, documents et procédures.",
      detailedDesc: "Plateforme collaborative complète permettant aux employés de SARPI d'accéder facilement aux ressources internes, de partager des documents et de communiquer efficacement entre les différents services.",
      technologies: ["Drupal 10", "PHP", "MySQL", "JavaScript", "Bootstrap"],
      image: require("./assets/images/portail.png"),
      images: [
        require("./assets/images/portail/1.png"),
        require("./assets/images/portail/2.png"),
        require("./assets/images/portail/3.png"),
        require("./assets/images/portail/4.png"),
        require("./assets/images/portail/5.png")
      ],
      features: [
        "Authentification LDAP intégrée",
        "Gestion documentaire avancée",
        "Système de recherche intelligent",
        "Workflow de validation des documents",
        "Annuaire des employés",
        "Calendrier partagé des événements"
      ],
      date: "2023-2024",
      client: "SARPI SPA",
      duration: "4 mois",
      footerLink: [
        { name: "Voir la démo" }
      ]
    },

    {
      projectName: "GMAT – Gestion matériel et maintenance",
      projectDesc: "Application de gestion du matériel et de la maintenance. Suivi quotidien du matériel et gestion des opérations de maintenance.",
      detailedDesc: "Système complet de GMAO (Gestion de Maintenance Assistée par Ordinateur) permettant le suivi en temps réel de tous les équipements, la planification des maintenances préventives et la gestion des interventions correctives.",
      technologies: ["React", "Laravel", "TypeScript", "PHP", "Tailwind CSS", "Inertia.js", "Chart.js"],
      image: require("./assets/images/gmat.png"),
      images: [
        require("./assets/images/gmat/1.png"),
        require("./assets/images/gmat/2.png"),
        require("./assets/images/gmat/3.png"),
        require("./assets/images/gmat/4.png"),
        require("./assets/images/gmat/5.png"),
        require("./assets/images/gmat/6.png"),
        require("./assets/images/gmat/7.png"),
        require("./assets/images/gmat/8.png"),
        require("./assets/images/gmat/9.png"),
        require("./assets/images/gmat/10.png"),
        require("./assets/images/gmat/11.png") 
      ],
      features: [
        "Inventaire complet du matériel",
        "Planification automatique des maintenances",
        "Gestion des bons d'intervention",
        "Tableau de bord analytique",
        "Historique complet des opérations",
        "Notifications automatiques",
        "Export de rapports PDF/Excel"
      ],
      date: "2024",
      client: "SARPI SPA",
      duration: "5 mois",
      footerLink: "Voir la démo"[
        { name: "Voir la démo"}
      ]
    },

    {
      projectName: "Plateforme pour la commission des marchés (CME)",
      projectDesc: "Solution web interne pour la gestion des marchés publics, intégrant des modèles de recommandation basés sur l'IA pour optimiser les décisions.",
      detailedDesc: "Plateforme intelligente d'aide à la décision pour l'évaluation et la sélection des offres dans les marchés publics, utilisant des algorithmes d'apprentissage automatique pour analyser les soumissions et fournir des recommandations objectives.",
      technologies: ["Spring Boot", "Angular", "Java", "TypeScript", "PostgreSQL", "Docker", "XGBoost", "Random Forest", "Python"],
      image: require("./assets/images/cme.png"),
      images: [
        require("./assets/images/cme/1.png"),
        require("./assets/images/cme/2.png"),
        require("./assets/images/cme/3.png"),
        require("./assets/images/cme/4.png"),
        require("./assets/images/cme/5.png"),
        require("./assets/images/cme/6.png"),
        require("./assets/images/cme/7.png"),
        require("./assets/images/cme/8.png"),
        require("./assets/images/cme/9.png"),
        require("./assets/images/cme/10.png"),
        require("./assets/images/cme/11.png"),
        require("./assets/images/cme/12.png"),
        require("./assets/images/cme/13.png"),
        require("./assets/images/cme/14.png"),
        require("./assets/images/cme/15.png"),
        require("./assets/images/cme/16.png"),
        require("./assets/images/cme/17.png"),
        require("./assets/images/cme/18.png"),
        require("./assets/images/cme/19.png"),
        require("./assets/images/cme/20.png"),
        require("./assets/images/cme/21.png"),
        require("./assets/images/cme/22.png"),
        
        
      ],
      features: [
        "Analyse automatique des offres",
        "Scoring multi-critères avec IA",
        "Détection d'anomalies dans les soumissions",
        "Génération automatique de rapports d'évaluation",
        "Traçabilité complète du processus",
        "Tableaux de bord décisionnels",
        "API REST pour intégrations tierces"
      ],
      date: "2024",
      client: "Administration publique",
      duration: "6 mois",
      footerLink: [
        { name: "Voir la démo"}
      ]
    },

    {
      projectName: "TOSYS App",
      projectDesc: "Système pour créer, modifier, bloquer et réinitialiser les comptes Active Directory et Exchange pour SARPI SPA.",
      detailedDesc: "Application d'administration IT permettant une gestion simplifiée et sécurisée des comptes utilisateurs, des boîtes email et des droits d'accès dans l'infrastructure Microsoft de l'entreprise.",
      technologies: ["React", "Laravel", "JavaScript", "PHP", "Tailwind CSS", "LDAP", "PowerShell", "Active Directory"],
      image: require("./assets/images/tosys.png"),
      images: [
        require("./assets/images/tosys.png"),
        require("./assets/images/tosys.png"),
        require("./assets/images/tosys.png")
      ],
      features: [
        "Gestion des comptes Active Directory",
        "Création/modification de boîtes Exchange",
        "Réinitialisation sécurisée de mots de passe",
        "Gestion des groupes et permissions",
        "Audit trail complet",
        "Interface d'administration intuitive",
        "Connexion LDAP sécurisée"
      ],
      date: "2023",
      client: "SARPI SPA",
      duration: "2 mois",
      footerLink: [
        { name: "Voir la démo"}
      ]
    },

    {
      projectName: "CND Platform",
      projectDesc: "Application pour la gestion centralisée des projets et utilisateurs pour le contrôle non destructif. Gestion des ISOs, joints et PV.",
      detailedDesc: "Plateforme complète de gestion des activités de contrôle non destructif (CND), permettant le suivi des certifications ISO, la gestion des rapports d'inspection et la traçabilité des opérations de contrôle (VT, RT, PT, PWHT).",
      technologies: ["React", "Laravel", "JavaScript", "PHP", "Tailwind CSS", "Inertia.js", "MySQL"],
      image: require("./assets/images/cnd.png"),
      images: [
        require("./assets/images/cnd.png"),
        require("./assets/images/cnd.png"),
        require("./assets/images/cnd.png")
      ],
      features: [
        "Gestion des certifications ISO",
        "Suivi des projets de contrôle",
        "Génération automatique de PV",
        "Gestion des qualifications des techniciens",
        "Planification des inspections",
        "Archivage numérique des rapports",
        "Statistiques et tableaux de bord"
      ],
      date: "2024",
      client: "Entreprise industrielle",
      duration: "4 mois",
      footerLink: [
        { name: "Voir la démo"}
      ]
    },

    {
      projectName: "Application web – Gestion des courriers",
      projectDesc: "Application web interne pour la gestion des courriers chez Algérie Télécom, avec suivi, archivage et traitement efficace des documents.",
      detailedDesc: "Système de gestion électronique des documents (GED) spécialisé dans le traitement du courrier entrant et sortant, permettant un suivi complet du circuit de traitement, de l'enregistrement jusqu'à l'archivage.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      image: require("./assets/images/courrier.png"),
      images: [
        require("./assets/images/courrier.png"),
        require("./assets/images/courrier.png"),
        require("./assets/images/courrier.png")
      ],
      features: [
        "Enregistrement automatique des courriers",
        "Workflow de traitement paramétrable",
        "Numérisation et OCR",
        "Suivi en temps réel",
        "Archivage électronique sécurisé",
        "Recherche avancée multi-critères",
        "Notifications par email"
      ],
      date: "2023",
      client: "Algérie Télécom",
      duration: "3 mois",
      footerLink: [
       { name: "Voir la démo"}
      ]
    }
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
