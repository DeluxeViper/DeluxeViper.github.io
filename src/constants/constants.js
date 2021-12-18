/** @format */

export const workExps = [
  {
    id: 0,
    company: "IBM",
    title: "Full Stack Developer Intern",
    location: "Toronto, ON",
    description: [
      "Drove the development of transitioning a Legacy Web Application to a Single Page Application for the IBM Business Process Manager software in a Scrum environment",
      "Developed RESTful APIs through the OpenAPI Specification and refactored Java EE backend logic, as well as composed DB2 SQL queries",
      "Refactored and developed reliable frontend pages in React with Typescript, CSS from JSP, GWT pages written in Java",
      "Utilized Jira, Git and IBM Rational Team Concert to organize tasks through functional needs and manage code delivery",
    ],
    startDate: "May 2021",
    endDate: "Present",
  },
  {
    id: 1,
    company: "Helium Aero",
    title: "Android Application Developer",
    location: "Toronto, ON",
    description: [
      "Developed an Android application (Java) that interfaces with drones from scratch based off of Figma prototype",
      "Utilized Java & XML to build Android application along with a Mavlink Java library to communicate between drone",
      "Employed UDP communication between simulated drone and Android devices to send and receive Mavlink packets",
    ],
    startDate: "Mar 2021",
    endDate: "Jul 2021",
  },
  {
    id: 2,
    company: "Lightening Group LLC.",
    title: "Frontend Developer",
    location: "Remote",
    description: [
      "Developed a frontend using React paired with the Next.js framework, Typescript, Tailwind CSS to format components, as well as GraphQL to communicate with the backend",
      "Worked with a client geared toward launching a pharmaceutical web application, and collaborated with a team of developers through Git",
      "Utilized Cypress to conduct E2E testing to ensure bugs weren’t present in codebase as well as ensure seamless delivery",
    ],
    startDate: "Sep 2020",
    endDate: "Dec 2020",
  },
  {
    id: 3,
    company: "Ryerson University",
    title: "Undergraduate Research Assistant",
    location: "Toronto, ON",
    description: [
      "Researched and compared different MQTT Mosquitto Clustering implementations based on latency and design aspects",
      "Analysed 1000+ lines of code written in C to document structure and components of clusters",
      "Conducted localized broker testing & assisted with configuration & deployment of MQTT Clusters into the cloud",
    ],
    startDate: "Jun 2020",
    endDate: "Aug 2020",
  },
  {
    id: 4,
    company: "Balancever",
    title: "Android Developer",
    location: "Toronto, ON",
    description: [
      "Spearheaded a Full-stack Android (Java, XML, Gradle) application from scratch in an Agile environment; utilizing Git to coordinate with other developers",
      "Instituted backend with Firebase Auth (3rd Party OAuth2) & Realtime Database; integrating several APIs (ie. GCP)",
      "Constructed several algorithms to create a custom android calendar and sort events",
    ],
    startDate: "May 2020",
    endDate: "Aug 2020",
  },
];

export const projects = [
  {
    id: 0,
    title: "SmoothieMakersClub",
    short_description: "Full Stack Web Application",
    description:
      "A Progressive Web Application that brings all Smoothie Makers alike to come together, create healthy & nutritious recipes, and share them with each other.",
    image: "/images/SmoothieWebsite.png",
    tags: [
      "Java",
      "Python",
      "Spring Boot",
      "MySQL",
      "Javascript",
      "CSS",
      "HTML",
      "Spring Data JPA",
      "AWS Elastic Beanstalk",
      "AWS RDS",
      "BeautifulSoup4",
      "Seleinum",
      "Vaadin",
      "OAuth2.0",
    ],
    code: "https://github.com/DeluxeViper/SmoothieWebsite",
    demo: "http://smoothiemakerswebsite-env.eba-m6qvhd3n.us-east-2.elasticbeanstalk.com/home",
  },
  {
    id: 1,
    title: "MemoryGo",
    short_description: "Cross-Platform Mobile Application",
    description:
      "MemoryGo is a flashcard tool that lets you study without realization while you play games, surf the internet, watch a video, chat with friends or any other task.",
    image: "/images/MemoryGo.png",
    tags: ["Dart", "Java (Android)", "XML", "SQL (SQLite)", "Gradle"],
    code: "https://github.com/DeluxeViper/Memorygo",
    demo: "https://play.google.com/store/apps/details?id=com.ceruleansource.MemoryGo",
  },
  {
    id: 2,
    title: "Livestream App",
    short_description: "Android Mobile Application [In Progress]",
    description: "Android Mobile Application [In Progress]",
    image: "/images/SmoothieWebsite.png",
    tags: ["Kotlin", "XML", "Room", "Retrofit", "OkHttp3", "Dagger", "GCP"],
    code: "",
    demo: "",
  },
  {
    id: 3,
    title: "Livestream Backend",
    short_description: "RESTful API Backend [In Progress]",
    description: "A backend for a livestreaming application to consume it.",
    image: "/images/SmoothieWebsite.png",
    tags: [
      "Java",
      "Spring (Boot, Security, Web, Reactive MongoDB)",
      "MongoDB",
      "JWT",
      "NGINX",
      "RTMP",
      "Docker",
    ],
    code: "",
    demo: "",
  },
  // {
  //   title: "MERN Memories",
  //   description:
  //     "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
  //   image: "/images/1.png",
  //   tags: ["Mongo", "Express", "React", "Node"],
  //   source: "https://google.com",
  //   visit: "https://google.com",
  //   id: 0,
  // },
  // {
  //   title: "E-Commerce",
  //   description:
  //     "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
  //   image: "/images/2.png",
  //   tags: ["React", "JavaScript"],
  //   source: "https://google.com",
  //   visit: "https://google.com",
  //   id: 1,
  // },
  // {
  //   title: "WebRTC App",
  //   description:
  //     "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  //   image: "/images/3.jpg",
  //   tags: ["React", "WebRTC"],
  //   source: "https://google.com",
  //   visit: "https://google.com",
  //   id: 2,
  // },
  // {
  //   title: "Unichat",
  //   description:
  //     "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  //   image: "/images/4.jpg",
  //   tags: ["React", "ChatEngine", "Firebase"],
  //   source: "https://google.com",
  //   visit: "https://google.com",
  //   id: 3,
  // },
];

export const TimeLineData = [
  {
    year: 2018,
    text: "Started Computer Engineering (B. Eng) at Ryerson University",
  },
  { year: 2023, text: "Expected Graduation" },
];
