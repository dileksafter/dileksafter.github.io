// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
// import Logo from "./images/logo.svg";
import Booki from "./images/booki_logo.webp";
import Kasa from "./images/kasa.webp";
import Sophie from "./images/sophie_bluel.webp";
import Grimoire from "./images/mon_vieux_grimoire.webp";
import Nina from "./images/nina_carducci.webp";



// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.webp";
import HeroDark from "./images/hero-dark.webp";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "dileksafter";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

export const profilurl = "./images/dileksafter.webp"


export const moreInfo = (
  <div>
    En suivant un parcours diplômant OpenClassRooms, j'ai pu acquérir des compétences telles que la technologie React ou la méthodologie Agile, et surtout, le réflexe des bonnes pratiques.
    <br />
    Le digital et le numérique sont incontestablement le futur dans un grand nombre de domaines, s'adapter c'est participer...
    <br />
    Je serai ravie de vous aider à faire vivre vos projets sur le web !
  </div>
);


/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "Css3",
  },
  {
    id: 14,
    skill: <Icon icon="fa6-brands:sass" className="display-4" />,
    name: "Sass",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },

  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },

  {
    id: 13,
    skill: <Icon icon="akar-icons:node-fill" className="display-4" />,
    name: "Node.js",
  },
  {
    id: 10,
    skill: <Icon icon="simple-icons:express" className="display-4" />,
    name: "Express",
  },

  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  // {
  //   id: 9,
  //   skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
  //   name: "GitHub",
  // },


  {
    id: 12,
    skill: <Icon icon="simple-icons:mongodb" className="display-4" />,
    name: "Mongo DB",
  },

  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 7,
    skill: <Icon icon="fa6-brands:figma" className="display-4" />,
    name: "Figma",
  },
  {
    id: 11,
    skill: <Icon icon="iconoir:agile" className="display-4" />,
    name: "Agile",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["mon-vieux-grimoire", "Nina_Carducci_Photographe", "Portfolio-architecte-sophie-bluel"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    displayName: "Booki",
    name: "projet_booki",
    image: Booki,
    details: {
      title: "Créez la page d'accueil d'une agence de voyage avec HTML5 & CSS3.",
      problems: "Conformiser le front-end d'un site web a une maquette Figma.",
      skills: "HTML5 ; CSS3"
    }
  },
  {
    displayName: "Mon Vieux Grimoire",
    name: "mon-vieux-grimoire",
    image: Grimoire,
    details: {
      title: "Développez le back-end d'un site de notation de livres.",
      problems: "Mise en place d'une base de données ; Implementation d'une infrastructure back-end.",
      skills: "Operations de CRUD ; node.js ; express.js ; mongoose ; mongoDB"
    }
  },
  {
    displayName: "Nina Carducci Photographe",
    name: "Nina_Carducci_Photographe",
    image: Nina,
    details: {
      title: "Débuggez et optimisez un site de photographe.",
      problems: "Aucun beug n'étant minime, le challenge est de ne negligliger aucun details pour ameliorer les performances du site.",
      skills: "Bootstrap ; Lighthouse ; Google Rich Snippet ; Wave Evaluation tool"
    }
  },
  {
    displayName: "Portfolio Sophie Bluel",
    name: "Portfolio-architecte-sophie-bluel",
    image: Sophie,
    details: {
      title: "Créez une page web dynamique avec JavaScript.",
      problems: "Mise en place d'API pour la gestion de la galerie.",
      skills: "Node.js ; Javascript"
    }
  },
  {
    displayName: "Kasa",
    name: "kasa",
    image: Kasa,
    details: {
      title: "Créez une application web de location immobilière avec React.",
      problems: "Initialisation de l'application avec Create React App ;Navigation entre les pages avec React Router ; Creation de composants React ; Gestion des erreurs. ",
      skills: "React ; Javascript ; HTML ; Sass"
    }
  },




];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mbjvware";
