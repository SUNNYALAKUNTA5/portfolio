// TODO: Update personal information here
export const personalInfo = {
  name: "Sunny",
  role: "AI/ML Engineer & Full Stack Developer",
  bio: "Passionate AI/ML Engineer and Full Stack Developer with expertise in building intelligent applications and scalable web solutions. Currently pursuing B.Tech 3rd Year in CSE-AIML.",
  university: "St. Mary's Group of Institutions Hyderabad",
  degree: "B.Tech in CSE-AIML",
  year: "3rd Year",
  location: "Hyderabad, Telangana",
  email: "sunnyalakunta819@gmail.com",
  resumeUrl: "#", // TODO: Add resume link
};

// TODO: Update social media links
export const socialLinks = {
  github: "https://github.com/SUNNYALAKUNTA5",
  linkedin: "https://www.linkedin.com/in/sunny-alakunta-355bb42ba/",
  twitter: "https://twitter.com/yourusername", //TODO
  email: "sunnyalakunta819@gmail.com",
};

// TODO: Update currently learning technologies
export const currentlyLearning = [
  "Machine Learning",
  "Nextjs",
  "DSA",
  // "Deep Learning",
  // "React Native",
  // "GraphQL",
  "AWS Cloud Services",
];

// TODO: Update skills with your actual proficiency
export const skills = {
  languages: [
    { name: "Python", icon: "FaPython", level: "Advanced" },
    { name: "C++", icon: "FaCodepen", level: "Intermediate" },
    { name: "JavaScript", icon: "FaJs", level: "Advanced" },
    { name: "HTML5", icon: "FaHtml5", level: "Advanced" },
    // { name: "CSS3", icon: "FaCss3", level: "Advanced" },
  ],
  frameworks: [
    { name: "React", icon: "FaReact", level: "Advanced" },
    { name: "Express.js", icon: "FaNodeJs", level: "Intermediate" },
    { name: "Node.js", icon: "FaNodeJs", level: "Intermediate" },
    { name: "Nextjs", icon: "FaReact", level: "Beginner" },
  ],
  ai_ml: [
    // { name: "TensorFlow", icon: "FaBrain", level: "Beginner" },
    // { name: "PyTorch", icon: "FaBrain", level: "Beginner" },
    { name: "Scikit-learn", icon: "FaBrain", level: "Beginner" },
    // { name: "OpenCV", icon: "FaEye", level: "Beginner" },
    { name: "LangChain", icon: "FaCodeBranch", level: "Beginner" },
  ],
  tools: [
    { name: "Git", icon: "FaGitAlt", level: "Intermediate" },
    { name: "Docker", icon: "FaDocker", level: "Beginner" },
    { name: "VS Code", icon: "FaCode", level: "Advanced" },
    { name: "Linux", icon: "FaLinux", level: "Beginner" },
    // { name: "Figma", icon: "FaFigma", level: "Beginner" },
  ],
};

// TODO: Update with your actual projects
//AI ChatBOT
export const projects = [
  {
    id: 1,
    title: "pro-cart",
    description: "mvp focused",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    githubUrl: "https://github.com/SUNNYALAKUNTA5/CODESOFT",
    liveUrl: "https://pro-cart-gules.vercel.app/",
    image: "/assets/projects/ai-chatbot.jpg",
  },
  // Image Classsifier
  {
    id: 2,
    title: "Image Classifier",
    description: "CNN-based image classification system with 95% accuracy for recognizing objects in images using TensorFlow and Keras.",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"],
    githubUrl: "https://github.com/yourusername/image-classifier",
    liveUrl: "https://image-classifier-demo.vercel.app",
    image: "/assets/projects/image-classifier.jpg",
  },
  {
    id: 3,
    title: "Project Management Tool",
    description: "mvp focused",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    githubUrl: "https://github.com/SUNNYALAKUNTA5/CodeAlpha_ProjectManagementTool",
    liveUrl: "https://tasksphere-one.vercel.app/",
    image: "/assets/projects/portfolio.jpg",
  },
];

// TODO: Update with your actual experience
export const experience = [
  {
    id: 1,
    title: "AI/ML Intern",
    organization: "Tech Company Name",
    date: "Summer 2024",
    description: "Worked on machine learning models for predictive analytics and data visualization. Contributed to improving model accuracy by 15%.",
  },
  {
    id: 2,
    title: "Hackathon Winner",
    organization: "University Hackathon",
    date: "March 2024",
    description: "Developed an AI-powered solution for real-world problem solving. Won 1st prize among 50+ teams for innovative approach.",
  },
  {
    id: 3,
    title: "Certification: Machine Learning",
    organization: "Coursera/edX",
    date: "2023",
    description: "Completed comprehensive machine learning course covering supervised and unsupervised learning algorithms.",
  },
];

// TODO: Update contact form configuration
export const contact = {
  title: "Let's Build Something Together",
  description: "Have a project in mind or just want to chat? Feel free to reach out!",
  formFields: {
    name: { label: "Your Name", placeholder: "Enter your full name" },
    email: { label: "Your Email", placeholder: "your.email@example.com" },
    message: { label: "Your Message", placeholder: "Tell me about your project..." },
  },
  submitText: "Send Message",
  successMessage: "Thank you! Your message has been sent successfully.",
  errorMessage: "Oops! Something went wrong. Please try again.",
};