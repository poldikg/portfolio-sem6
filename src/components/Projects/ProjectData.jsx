import Project1 from "./project1.png";
import Project2 from "./project2.png";
import Project3 from "./project3.png";

//Importing Valdle images
import Valdlemenu from "../../assets/Valdle/Valdlemenu.png";
import Valdleagent from "../../assets/Valdle/Valdleagent.png";
import Valdlemap from "../../assets/Valdle/Valdlemap.png";
import Valdleskin from "../../assets/Valdle/Valdleskin.png";
import Valdleability from "../../assets/Valdle/Valdleability.png";
import Valdlequote from "../../assets/Valdle/Valdlequote.png";
import Valdleprogression from "../../assets/Valdle/Valdleprogression.png";

//Importing Bierens images
import LandingIntro from "../../assets/Bierens/LandingIntro.png"
import LandingHow from "../../assets/Bierens/LandingHow.png"
import LandingApply from "../../assets/Bierens/LandingApply.png"
import UsersAutumn from "../../assets/Bierens/UsersAutumn.png"
import UsersSpring from "../../assets/Bierens/UsersSpring.png"
import UsersSummer from "../../assets/Bierens/UsersSummer.png"
import UsersWinter from "../../assets/Bierens/UsersWinter.png"
import Waterfall from "../../assets/Bierens/Waterfall.png"
import Agilefall from "../../assets/Bierens/Agilefall.png"
import Dashboard from "../../assets/Bierens/Dashboard.png"


const projectData = [
  {
    title: "VALDLE",
    image: Valdlemenu,
    projectDescription: "GAME WHERE YOU GUESS SPECIFIC THINGS ABOUT DIFFERENT TOPICS IN THE GAME VALORANT.",
    link: "https://valdle-test.netlify.app/",
    projectData: [{
      img: Valdlemenu,
      description: "Main menu of the game where you choose with which challenge to start, after you complete a challenge you can come back after 24 hours to do it again, but the answer is randomized of reach day."
    },
    {
      img: Valdleagent,
      description: "Demonstrating one of the games, here the user can start by choosing a character and get a hint if he is close to guessing the right one by the different sepcification e.g(Role, Species). If the user still has a hard time choosing there are a few more buttons that unlock after a couple of unsuccsessful tries."
    },
    {
      img: Valdleprogression,
      description: "Here I am showing a bit of the progression into making the website, I usually start with low-fidelity prototypes which later on I turn into a high-fidelity ones, but since this project was more about me and learning about front-end programming I went into directly high-fidelity prototypes with testing color palettes and fonts."
    },
    ],
    sliderImages: [Valdlemenu, Valdleagent, Valdlemap, Valdleskin, Valdleability, Valdlequote]
  },
  {
    title: "Bieren's Referral System",
    image: UsersSummer,
    projectDescription: "Seasonal referral system with different rewards per tier and management dashboards.",
    link: "https://github.com/aleksandarafk/BierensReferralProgram",
    projectData: [{
      img: Agilefall,
      description: "In this group project we started by choosing a methodology for the project. We decided to go with waterfall, but include some parts of the agile in the design phase. "
    },
    {
      img: UsersSummer,
      description: "After that everyone had their own tasks to fill regarding research, design and implementation, on the right is one of the pages I was responisble for in the referral system. In this part of the designing we had more freedom of not sticking to their brand guide."
    },
    {
      img: Dashboard,
      description: "Because the system had to be managed by Bieren's we needed to make dashboards that would make it easy to do so, they included dashboard about their advertisement statistic, current users, changing the rewards and feedback."
    }],
    sliderImages: [LandingIntro, LandingHow, LandingApply, UsersSpring, UsersSummer, UsersAutumn, UsersWinter]
  },
  {
    title: "Movies Website(in progress)",
    image: Project3,
    projectDescription: "PROJECT DESCRIPTION",
    projectData: [{
      img: Project3,
      description: "Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 Text 1 "
    },
    {
      img: Project3,
      description: "Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 "
    },
    {
      img: Project3,
      description: "Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 Text 3 "
    }],
    sliderImages: [Project3, Project3, Project3, Project3]
  },
];

export default projectData