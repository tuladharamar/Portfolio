import project_1 from "../assets/project_1.png";
import Todolist from '../../src/assets/To-do-list.png';
import DrumKit from '../../src/assets/Drum Kit.png';
import Weather from '../assets/Weather.png';
const project = [
    {
        id: 1, title: "Almaris Hotel",
        image: project_1,
        content: "Here are a few Projects. I've worked on recently. Click on the liveUrls to see thye live demos and source code",
        tags: ["hotel"],
        liveUrl: "https://almaris-hotel-h4sl.vercel.app",
        githubUrl: "https://github.com/tuladharamar/almaris-hotel"
    },
    {
        id: 2,
        title: "To-Do List",
        image: Todolist,
        content: "A clean and modern task management application built with HTML, CSS, and JavaScript. Features include adding tasks, marking them as complete, deleting tasks, persistent storage using localStorage, and a beautiful responsive design with smooth animations.", tags: ["To-Do List"],
        liveUrl: "https://subtle-paletas-d7ce26.netlify.app",
        githubUrl: "https://github.com/tuladharamar/To-Do-List"
    },
    {
        id: 3,
        title: "Drum Kit",
        image: DrumKit,
        content: "A fun and interactive virtual drum kit built with vanilla JavaScript. Press the keys or click the pads to play realistic drum sounds. Perfect for music lovers and those who enjoy interactive web experiences.",
        tags: ["Drum"],
        liveUrl: "https://drum-one-sepia.vercel.app",
        githubUrl: "https://github.com/tuladharamar/Drum"
    },
    {
        id: 4,
        title: "Weather",
        image: Weather,
        content: "Here are a few Projects. I've worked on recently. Click on the liveUrls to see thye live demos and source code",
        tags: ["Weather"],
        liveUrl: "https://weather-app-coral-eight-20.vercel.app",
        githubUrl: "https://github.com/tuladharamar/Weather-App"
    },
       {
        id: 5,
        title: "Note App",
        image: Todolist,
        content: "A clean and modern task management application built with React JS. Features include adding tasks, marking them as complete, deleting tasks, persistent storage using localStorage, and a beautiful responsive design with smooth animations.", tags: ["To-Do List"],
        liveUrl: "",
        githubUrl: "https://github.com/tuladharamar/Note-App"
    }
];

export default project;