export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      greeting: "Bienvenue, je suis Marco Bogatu",
      role: "Développeur <br /> Analyste",
      description: "Développeur passionné et particulièrement motivé, toujours à la recherche de nouvelles compétences à acquérir et pleinement dévoué aux projets dans lesquels je m'investis développement logiciel.",
      contactPrompt: "Retrouvez-moi directement ici :",
      cvButton: "Télécharger mon CV",
      educationTitle: "Diplômes et Formations",
      edu1Date: "De 2017 à 2023",
      edu1Title: "CESS - Technique Transition Informatique",
      edu1School: "Ello (Anciennement Institut Cardijn Lorraine) — Arlon, Belgique",
      edu1Bullet1Title: "Bases de l'informatique & Algorithmique :",
      edu1Bullet1Text: "Apprentissage des fondamentaux et découverte de la programmation orientée objet (POO) en C et Java.",
      edu1Bullet2Title: "Développement logiciel :",
      edu1Bullet2Text: "Conception et réalisation de projets variés (sites web, applications).",
      edu2Date: "Depuis 2023",
      edu2Title: "Bachelier en orientation développement d'applications",
      edu2School: "Haute École Robert Schuman - Libramont, Belgique",
      edu2Bullet1Title: "Paradigmes & POO :",
      edu2Bullet1Text: "Approfondissement de la POO et exploration de nouveaux paradigmes de développement.",
      edu2Bullet2Title: "Architecture & Données :",
      edu2Bullet2Text: "Conception et gestion de bases de données, infrastructures et réseaux.",
      edu2Bullet3Title: "Projets Académiques :",
      edu2Bullet3Text: "Projets logiciels en solo et en équipe (web, apps mobiles, micro-services).",
    },
    projects: {
      sectionTitle: "Mon travail",
      title: "Projets",
      sourceCode: "Code source",
      article: "Lire l'article",
      moreOnGithub: "Plus de projets sur",
      items: [
        {
          description: "Application web pour kinésithérapeutes dédiée à la réalisation de bilans cliniques et à la détection de signaux d'alerte (Red Flags).",
          status: "Contributeur"
        },
        {
          description: "Application moderne et ergonomique permettant aux étudiants et professeurs de suivre les statistiques de réussite académique (Projet Intégré HERS).",
          status: "Fini"
        },
        {
          description: "Application mobile Android de suivi des lectures en milieu familial séparant interface parent et enfant via une architecture MVVM.",
          status: "Fini"
        },
        {
          description: "Mise en place d'une architecture microservices complète avec authentification, équilibrage de charge HAProxy et serveur NGINX.",
          status: "Fini"
        }
      ]
    },
    contact: {
      sectionTitle: "Discutons",
      title: "Contact",
      description: "Vous avez une question ou un projet en tête ? N'hésitez pas à me contacter.",
      locationLabel: "Localisation :",
      locationValue: "Belgique",
      namePlaceholder: "Nom",
      emailPlaceholder: "Email",
      messagePlaceholder: "Message",
      submitButton: "Envoyer",
      successMessage: "✅ Merci pour votre message !",
    },
    footer: {
      builtWith: "Développé avec",
      styledWith: "Stylisé avec",
      deployedOn: "Déployé sur",
      rights: "Tous droits réservés.",
    }
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Welcome, I am Marco Bogatu",
      role: "Software <br /> Analyst Developer",
      description: "Passionate and highly motivated developer, always eager to acquire new skills and fully dedicated to software development projects.",
      contactPrompt: "Reach me directly here:",
      cvButton: "Download my CV",
      educationTitle: "Degrees and Education",
      edu1Date: "2017 to 2023",
      edu1Title: "CESS - Technical IT Transition",
      edu1School: "Ello (Formerly Institut Cardijn Lorraine) — Arlon, Belgium",
      edu1Bullet1Title: "IT Fundamentals & Algorithms:",
      edu1Bullet1Text: "Learning fundamentals and discovering object-oriented programming (OOP) in C and Java.",
      edu1Bullet2Title: "Software Development:",
      edu1Bullet2Text: "Design and creation of various projects (websites, applications).",
      edu2Date: "Since 2023",
      edu2Title: "Bachelor's Degree in Application Development",
      edu2School: "Haute École Robert Schuman - Libramont, Belgium",
      edu2Bullet1Title: "Paradigms & OOP:",
      edu2Bullet1Text: "Deepening OOP and exploring new development paradigms.",
      edu2Bullet2Title: "Architecture & Data:",
      edu2Bullet2Text: "Design and management of databases, infrastructures, and networks.",
      edu2Bullet3Title: "Academic Projects:",
      edu2Bullet3Text: "Solo and team software projects (web, mobile apps, microservices).",
    },
    projects: {
      sectionTitle: "My work",
      title: "Projects",
      sourceCode: "Source code",
      article: "Read article",
      moreOnGithub: "More projects on",
      items: [
        {
          description: "Web application for physiotherapists dedicated to clinical assessments and Red Flags detection.",
          status: "Contributor"
        },
        {
          description: "Modern and ergonomic application allowing students and professors to track academic success statistics.",
          status: "Finished"
        },
        {
          description: "Android mobile application for family reading tracking separating parent and child interfaces via an MVVM architecture.",
          status: "Finished"
        },
        {
          description: "Implementation of a complete microservices architecture with authentication, HAProxy load balancing, and NGINX server.",
          status: "Finished"
        }
      ]
    },
    contact: {
      sectionTitle: "Let's talk",
      title: "Contact",
      description: "Have a question or a project in mind? Feel free to reach out.",
      locationLabel: "Location:",
      locationValue: "Belgium",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Message",
      submitButton: "Submit",
      successMessage: "✅ Thank you for your message!",
    },
    footer: {
      builtWith: "Built with",
      styledWith: "Styled with",
      deployedOn: "Deployed on",
      rights: "All rights reserved.",
    }
  }
};

export type Language = 'fr' | 'en';