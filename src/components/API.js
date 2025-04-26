// frontendTech
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaSass,
  FaVuejs,
  FaAngular,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiRedux } from "react-icons/si";

export const frontendTech = [

  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "ReactJS", icon: FaReact },
  { name: "Redux", icon: SiRedux },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "SASS", icon: FaSass },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Vue.js", icon: FaVuejs },
  { name: "Angular", icon: FaAngular },
];

// backendTech
import {
  FaNodeJs,
  FaPhp,
  FaPython,
  FaJava,
  FaLaravel,
} from "react-icons/fa";
import { SiExpress, SiDjango, SiMongodb, SiFirebase, SiMysql, SiPostgresql } from "react-icons/si";

export const backendTech = [
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Firebase", icon: SiFirebase },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "PHP", icon: FaPhp },
  { name: "Laravel", icon: FaLaravel },
  { name: "Python", icon: FaPython },
  { name: "Django", icon: SiDjango },
  { name: "Java", icon: FaJava },
];


//mobileTech 
// import { FaReact } from "react-icons/fa";
import { SiFlutter, SiAndroidstudio, SiSwift, SiKotlin } from "react-icons/si";

export const mobileTech = [
  { name: "React Native", icon: FaReact },
  { name: "Flutter", icon: SiFlutter },
  { name: "Android Studio", icon: SiAndroidstudio },
  { name: "Swift", icon: SiSwift },
  { name: "Kotlin", icon: SiKotlin },
];


// Mission Vision CoreValue
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";
export const content = [
  {
    title: "Our Mission",
    icon: FaBullseye,
    text: "At SuKaj Infotech, our mission is to empower businesses and individuals through cutting-edge technology solutions. We strive to deliver innovative, scalable, and reliable IT services that drive digital transformation, enhance user experience, and create long-term value.",
  },
  {
    title: "Our Vision",
    icon: FaEye,
    text: "To become a global leader in digital innovation by consistently delivering exceptional technology solutions that make a meaningful impact on people’s lives and businesses.",
  },
  {
    title: "Our Core Values",
    icon: FaHeart,
    text: "Integrity, innovation, commitment, collaboration, and customer success are at the heart of everything we do. We believe in growing together by building trust and fostering long-term relationships.",
  },
];


// why chooseUe
import { CheckCircle, Clock, UserCheck, Headphones } from "lucide-react";
export const features = [
  {
    icon: CheckCircle,
    title: "Cutting-edge Web Solutions",
    description:
      "Our cutting-edge web solutions help businesses with a wide range of customizable options based on client requirements, using custom PHP frameworks or open-source platforms like WordPress.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Resources",
    description:
      "Quality-driven and high-performance development requires a dedicated team. At Netsol, we allocate specialized teams and technologies tailored to each project’s need.",
  },
  {
    icon: Clock,
    title: "On-Time and On-Budget",
    description:
      "We consistently deliver projects within the timeline and budget, thanks to our accurate estimation backed by years of industry experience.",
  },
  {
    icon: Headphones,
    title: "Exceptional Customer Service",
    description:
      "Real customer service begins after deployment. We prioritize post-launch support to handle client queries promptly, avoiding any business disruptions.",
  },
];


// OurProcess 
export const processSteps = [
  {
    id: '01',
    title: 'Discovery',
    description:
      'We begin by deeply understanding your goals, target audience, and project requirements to lay a strong foundation for success.',
  },
  {
    id: '02',
    title: 'Strategy',
    description:
      'Next, we craft a custom roadmap that aligns with your vision—ensuring a structured, efficient, and goal-driven workflow.',
  },
  {
    id: '03',
    title: 'Design',
    description:
      'Our designers bring ideas to life with visually stunning, intuitive interfaces that captivate users and enhance usability.',
  },
  {
    id: '04',
    title: 'Development',
    description:
      'We build high-performance digital experiences, turning designs into scalable, clean, and functional code.',
  },
];


// Our Services
import { FaPaintBrush, FaCode, FaMobileAlt } from 'react-icons/fa';
export const services = [
  {
    title: 'UI/UX Design',
    description: 'Crafting seamless and visually compelling user experiences that enhance usability and engagement.',
    icon: FaPaintBrush,
  },
  {
    title: 'Web Development',
    description: 'Developing fast, responsive, and scalable websites with modern technologies to ensure a smooth user experience.',
    icon: FaCode,
  },
  {
    title: 'Mobile Design',
    description: 'Designing intuitive, high-performance mobile interfaces for iOS and Android to maximize user satisfaction.',
    icon: FaMobileAlt,
  },
  {
    title: 'Brand Identity',
    description: 'Creating strong and memorable brand identities that communicate your vision and connect with your audience.',
    icon: FaBullseye,
  },
];

//CompanyStats 
import { Briefcase, Smile, Users } from "lucide-react";
export const stats = [
  {
    icon: Briefcase,
    number: "250+",
    label: "Projects Completed",
  },
  {
    icon: Smile,
    number: "120+",
    label: "Happy Clients",
  },
  {
    icon: Users,
    number: "15+",
    label: "Employees",
  },
];

// Our Awesome Team
export const teamMembers = [
  {
    name: "Subham Patel",
    title: "CEO & Founder",
    description: "A visionary leader with a passion for innovation, Subham drives the company's strategic growth and fosters a culture of excellence.",
    image: "./IMAGES/img107.jpg",
  },
  {
    name: "Rohit Kumar Patel",
    title: "CTO & Co-Founder",
    description: "With a deep technical background, Rohit leads the technology vision, building scalable systems and driving technical innovation at the core.",
    image: "./IMAGES/rohit.jpg",
  },
  {
    name: "Sumit Kumar",
    title: "Project Manager",
    description: "Sumit oversees projects from concept to delivery, ensuring seamless execution, timely delivery, and efficient team collaboration.",
    image: "./IMAGES/sumit.png",
  },
  {
    name: "Divya Singh",
    title: "Head of HR",
    description: "With a strong grasp of organizational dynamics and people management, Divya ensures a positive workplace culture and streamlines HR operations to support team growth.",
    image: "./IMAGES/img101.jpg",
  },
  {
    name: "Sumit Soni",
    title: "Product Manager",
    description: "Sumit aligns business goals with product development, creating innovative solutions that meet user needs and deliver market value.",
    image: "./IMAGES/sumitSoni.png",
  },
  {
    name: "Dilshad Khan",
    title: "MERN Developer",
    description: "Dilshad crafts high-performance full-stack applications using the MERN stack, delivering modern and scalable web solutions.",
    image: "./IMAGES/dilshad.png",
  },
  {
    name: "Kajal Singh",
    title: "UI/UX Designer",
    description: "Kajal designs intuitive and visually compelling user interfaces that enhance user engagement and elevate the overall experience.",
    image: "./IMAGES/kajal.jpeg",
  }

];

// portfolio project
export const mobileApps = [
  {
    title: 'E-commerce Mobile App',
    description: 'A premium shopping experience app built with React Native.',
    image: './IMAGES/EcommerceMobilApp.jpeg',
    link: '/portfolio/ecommerce-app',
  },
  {
    title: 'Food Recipe App',
    description: 'An easy-to-use app for discovering and sharing food recipes.',
    image: './IMAGES/FoodRecipeApp.jpeg',
    link: '/portfolio/food-recipe-app',
  },
  {
    title: 'Fitness Tracker App',
    description: 'An app for tracking workouts, setting fitness goals, and monitoring progress.',
    image: './IMAGES/FitnessTrackerApp.jpeg',
    link: '/portfolio/fitness-tracker',
  },
  {
    title: 'Social Media App',
    description: 'A social networking app with messaging, feeds, and user profiles.',
    image: './IMAGES/SocialMediaApp.jpeg',
    link: '/portfolio/social-media-app',
  },
];

export const webApps = [
  {
    title: 'Hospital Management System',
    description: 'A comprehensive hospital management system for efficient operations.',
    image: './IMAGES/HospitalManagementSystem.jpeg',
    link: '/portfolio/hospital-management',
  },
  {
    title: 'Task Management Web App',
    description: 'A web app for teams to collaborate, assign tasks, and track progress.',
    image: './IMAGES/TaskManagement.jpeg',
    link: '/portfolio/task-management',
  },
  {
    title: 'Real Estate Platform',
    description: 'A platform for buying, selling, and renting properties with real-time updates.',
    image: '/IMAGES/RealEstatePlatform.jpeg',
    link: '/portfolio/real-estate-platform',
  },
  {
    title: 'Online Learning Platform',
    description: 'An e-learning platform offering courses, quizzes, and certifications.',
    image: './IMAGES/OnlineLearning.jpeg',
    link: '/portfolio/online-learning',
  },
];

// life at Sukaj
import {
  BookOpen,
  HeartHandshake,
} from "lucide-react";

export const cardData = [
  {
    icon: Users,
    title: "Collaborative Environment",
    description:
      "Our team works closely together, exchanging ideas and learning from each other. Collaboration is key to success, and we ensure every voice is heard.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "We believe in empowering our employees through continuous learning. Workshops, online courses, and mentorship programs help our team stay ahead in the tech industry.",
  },
  {
    icon: HeartHandshake,
    title: "Work-Life Balance",
    description:
      "We understand the importance of balance between work and personal life. Flexible hours, remote work options, and wellness programs are part of our culture.",
  },
];


// client feedback
export const testimonials = [
  {
    name: 'Ravi Mehta',
    company: 'TechCore Solutions',
    feedback:
      'SuKaj Infotech delivered our app with top-notch quality and ahead of schedule. Their team is professional, creative, and highly skilled.',
    image: "./IMAGES/img101.jpg",
  },
  {
    name: 'Ananya Sharma',
    company: 'GreenLeaf Enterprises',
    feedback:
      'Working with SuKaj Infotech was a seamless experience. They understood our requirements perfectly and provided continuous support.',
    image: "./IMAGES/img101.jpg",
  },
  {
    name: 'John Carter',
    company: 'GlobalTech Inc.',
    feedback:
      'Fantastic collaboration! Their developers are proactive and committed to delivering high-performing digital solutions.',
    image: "./IMAGES/img101.jpg",
  },
  {
    name: 'Priya Nair',
    company: 'UrbanNest Interiors',
    feedback:
      'The SuKaj team brought our design vision to life with a smooth and collaborative process. Highly recommend them for creative web solutions.',
    image: "./IMAGES/img101.jpg",
  },
  {
    name: 'Daniel Kim',
    company: 'SkyVault Analytics',
    feedback:
      'Reliable and efficient — SuKaj Infotech has been our go-to tech partner for scaling our digital platforms with confidence.',
    image: "./IMAGES/img101.jpg",
  },
  {
    name: 'Megha Rajput',
    company: 'EduNext Academy',
    feedback:
      'They created an intuitive and visually appealing learning portal for us. The attention to detail and user experience was impressive!',
    image: "./IMAGES/img101.jpg",
  },
];


// career
export const jobListings = [
  {
    title: "Frontend Developer (ReactJS)",
    location: "Remote / Noida",
    description:
      "We are looking for a talented Frontend Developer proficient in ReactJS to build innovative and responsive user interfaces for web applications.",
    skills: ["ReactJS", "JavaScript", "CSS", "HTML"],
    applyLink: "/apply/frontend-developer",
  },
  {
    title: "Backend Developer (Node.js)",
    location: "Prayagraj / Noida",
    description:
      "Join our backend development team to build scalable and efficient REST APIs and services using Node.js.",
    skills: ["Node.js", "Express.js", "MongoDB", "API Development"],
    applyLink: "/apply/backend-developer",
  },
  {
    title: "Mobile App Developer (React Native)",
    location: "Remote",
    description:
      "Looking for a Mobile App Developer with React Native experience to help create cross-platform mobile applications.",
    skills: ["React Native", "JavaScript", "APIs", "Mobile Development"],
    applyLink: "/apply/mobile-app-developer",
  },
  {
    title: "UI/UX Designer",
    location: "Noida",
    description:
      "We need a creative and detail-oriented UI/UX Designer to design user-friendly interfaces and experiences for web and mobile apps.",
    skills: ["Figma", "Adobe XD", "Wireframing", "User Research"],
    applyLink: "/apply/ui-ux-designer",
  },
];
