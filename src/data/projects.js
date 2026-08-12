import olivImg from "../images/oliv.png";
import twoLeavesImg from '../images/twoLeaves.png'
import taskManagerImg from '../images/taskManager.png'
import fintrackImg from '../images/fintrack.png'
import productivityImg from "../images/productivity.png"
import skymartImg from '../images/skymart.png'


export const projects = [
  {
    id: "skymart",
    number: "02",
    title: "SkyMart",
    description: "SkyMart is a ecommerce website is fully authenticated and easy to search items and see item details",
    longDescription:
      "SkyMart is a ecom website which is fully authenticated as well as responsive. Easy to search items and add into cart.",
    stack: ["React", "Tailwindcss", "React-router", "React-hook-form", "LocalStorage"],
    features: ["Fully Responsive", "Dynamic Search", "Powerful performance", "User friendly"],
    image: skymartImg,
    live: "https://01-sky-mart.vercel.app/",
    code: "https://github.com/KohinoorKumar/01_SkyMart"
  },
  {
    id: "fintrack",
    number: "02",
    title: "Fintrack",
    description: "Fintrack is a helpful for tracking personal finance on daily basis",
    longDescription:
      "Fintrack is a personal finance tracking app with authentication.",
    stack: ["HTML", "CSS", "JavaScript", "DOM"],
    features: ["Live Graph", "Search", "Currency flexibility", "Finance tracking"],
    image: fintrackImg,
    live: "https://fin-track-nine-beta.vercel.app/",
    code: "https://github.com/KohinoorKumar/finTrack"
  },
  {
    id: "productivity",
    number: "03",
    title: "Productivity",
    description: "Productivity app is used to make your daily or monthly goal with live weather and time update.",
    longDescription: "Productivity app is used to make your daily or monthly goal with live weather and time update.",
    stack: ["HTML", "CSS", "JavaScript" ],
    features: ["Todo List", "Daily Planner", "Pomodoro timer", "Daily Goals", "Dark mode"],
    image: productivityImg,
    live: "https://productivity-app-flame-two.vercel.app/",
    code: "https://github.com/KohinoorKumar/productivityApp"
  },
  {
    id: "oliv",
    number: "04",
    title: "Oliv",
    description: "A landing page of branding agency.",
    longDescription:
      "Oliv is a landing page of a brading agency",
    stack: ["HTML", "CSS", ],
    features: ["Task management", "Team collaboration", "Authentication", "Progress tracking"],
    image: olivImg,
    live: "https://kohinoorkumar.github.io/oliv/",
    code: "https://github.com/KohinoorKumar/oliv"
  },
  {
    id: "twoleaves",
    number: "05",
    title: "TwoLeaves",
    description: "A responsive e-commerce website.",
    longDescription:
      "TwoLeaves is a clean e-commerce with responsive design, here you see use of grid.",
    stack: ["HTML", "CSS"],
    features: ["Product catalogue", "Responsive UI"],
    image: twoLeavesImg,
    live: 'https://kohinoorkumar.github.io/two_buds/',
    code: 'https://github.com/KohinoorKumar/two_buds'
  },
  {
    id: "taskmanager",
    number: "06",
    title: "TaskManager",
    description: "A simple TaskManager to handle tasks.",
    longDescription:
      "TaskManager is simple plateform where you can manage you task on a daily basis.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: ["Search", "Task create", "Task action", "Learning cards"],
    image: taskManagerImg,
    code: 'https://github.com/KohinoorKumar/task_manager',
    live: 'https://kohinoorkumar.github.io/task_manager/index.html'
  }
];