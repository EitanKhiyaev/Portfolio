import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Eitan Khiyaev',
  subtitle: 'Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Profile.jpg',
  paragraphOne: 'As a current CSCI student at John Jay, I joined the TTP Residency to gain hands-on experience as a developer and increase my knowledge in web development. I wanted to specialize in web development since I was in high school because I loved the concept of being able to mix my two passions of coding and design. As my career as a developer expands, so does my knowledge. In the TTP residency  I’ve worked with many tools such as Javascript, HTML, CSS, Django,  React.js , Node.js , Github and Slack.',
  paragraphTwo: 'Each of these different tools that I learned helped me with many aspects such  as working in a team, collaboration, communication, working faster and more efficiently with tools, and adapting. I had the opportunity to work in groups of 5 to build websites using Git and GitHub for version control. We also used discord for project management and slack for communicating. ',
  paragraphThree: 'I personally believe that web development is the future. New websites are built every day and the numbers will only grow. This is why I want to be a part of this team and implement features, make them more friendly. And make the websites more appealing.',
  resume: 'https://www.canva.com/design/DAEUSPIqtpI/FpQqjI6sWV-D1vNaYRPuqw/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project_1.png',
    title: 'Barclays Bash',
    info: 'This app was built using HTML/CSS, and React.js . My team and I were able to implement features such as a timer, which would count down to the time the event begins. We are also able to implement a calendar to show other occuring events that are happening before Barclays Bash. We also used Css to make the user interface more friendly to fit with the theme of the night time concert hall ',
    info2: '',
    url: '',
    repo: 'https://github.com/EitanKhiyaev/venue_page', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project_2.png',
    title: 'GitMoney Budget App',
    info: 'According to The Federal Reserve 39% of people in the United States do not have enough money in their savings for a 400$ emergency. This is because people do not keep track of their spending. My teams website lets you add in expenses and income to see how much of your money you are actually keeping. The project also has a rotating bar with 3 stocks so the person can also invest in their future! the stock were implemented via an API to get live updates on the current value of each stock. We used Javascript to help the person see their goal of saving it and breaking it down monthly',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project_1.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '805Eitan@gmail.com',
  email: '805Eitan@gmail.com',
  btn: '',
 //email: '805Eitan@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
