/** @format */

export const workExps = [
  {
    id: 0,
    company: "Amazon",
    title: "Incoming Software Developer Engineer Intern",
    location: "Toronto, ON",
    description: [],
    startDate: "June 2022",
    endDate: "Aug 2022",
  },
  {
    id: 1,
    company: "IBM",
    title: "Software Developer Intern",
    location: "Toronto, ON",
    description: [
      "Drove the development of transitioning a Legacy Web Application to a Single Page Application for the IBM Business Process Manager (BPM) software in a Scrum environment",
      "Developed RESTful APIs through the OpenAPI Specification and refactored Java EE backend logic, as well as worked on the database layer (DB2)",
      "Refactored and developed reliable frontend pages in React with Typescript and CSS from JSP, Dojo, GWT pages written in Java",
      "Implemented i18n (internationalization) as well as IBM standardized accessibility requirements within the SPA",
      "Utilized Jira, Git, Jenkins, JFrog Artifactory and IBM RTC to organize tasks through functional needs and manage CI/CD pipelines",
      "Investigated and produced fixes for defects and bugs within the IBM Business Process Manager software",
    ],
    startDate: "May 2021",
    endDate: "June 2022",
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    image: `images/SmoothieWebsite.png`,
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
    demo: "",
  },
  {
    id: 1,
    title: "MemoryGo",
    short_description: "Cross-Platform Mobile Application",
    description:
      "MemoryGo is a flashcard tool that lets you study without realization while you play games, surf the internet, watch a video, chat with friends or any other task.",
    image: `images/MemoryGo.png`,
    tags: ["Dart", "Java (Android)", "XML", "SQL (SQLite)", "Gradle"],
    code: "https://github.com/DeluxeViper/Memorygo",
    demo: "https://play.google.com/store/apps/details?id=com.ceruleansource.MemoryGo",
  },
  {
    id: 2,
    title: "Livestream App",
    short_description: "Android Mobile Application [In Progress]",
    description:
      "A mobile app that allows the user to either broadcast their own stream and/or find and join streams happening around them through a google maps populated with a series of markers that indicate the myriad of logged in users that might or might not be streaming.",
    image: `images/livestream.jpeg`,
    tags: ["Kotlin", "XML", "Room", "Retrofit", "OkHttp3", "Dagger", "GCP"],
    code: "https://github.com/DeluxeViper/LivestreamApp",
    demo: "",
  },
  {
    id: 3,
    title: "Livestream Backend",
    short_description: "RESTful API Backend [In Progress]",
    description:
      "A backend for a livestreaming client application that consumes it. This backend's capabilities ranges from JWT user authentication, to being able to manage the MongoDB database that it's connected to.",
    image: `images/server.jpeg`,
    tags: [
      "Java",
      "Spring (Boot, Security, Web, Reactive MongoDB)",
      "MongoDB",
      "JWT",
      "NGINX",
      "RTMP",
      "Docker (Compose)",
    ],
    code: "https://github.com/DeluxeViper/livestreambackend-mongodb",
    demo: "",
  },
];

export const TimeLineData = [
  {
    year: 2018,
    text: "Started Computer Engineering (B. Eng) at Ryerson University",
  },
  { year: 2023, text: "Expected Graduation" },
];
