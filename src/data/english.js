import {
  // Contact
  FaGlobe,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,

  // Interests
  FaMusic,
  FaReact,
  FaHamburger,
  FaBook,
  FaChartBar,
} from 'react-icons/fa';

const data = {
  /**
   * Full name
   */
  fullName: 'Leandro Buzeta',

  /**
   * Summary - short "about me" paragraph
   */
  summary: {
    title: 'About',
    text: `
      Creative human with many energy capable to achieve and deliver, my channels to fill my spirit are Software Development & Entrepreneurship. The focus is always the same:  `,
    strong: 'Build excellents products and experiences looking for adding value, impact and of course have fun.'   
  },

  /**
   * Contact details
   */
  contact: {
    title: 'Contact',
    list: [
      {
        text: 'superjonic.com',
        url: 'https://superjonic.com',
        icon: <FaGlobe />,
      },
      {
        text: 'github.com/superjonic',
        url: 'https://github.com/superjonic',
        icon: <FaGithub />,
      },
      {
        text: 'leandrobuzeta@gmail.com',
        icon: <FaEnvelope />,
      },
      {
        text: '+54 911 6804 4179  ',
        icon: <FaPhoneAlt />,
      },
      {
        text: 'Buenos Aires, Argentina',
        icon: <FaMapMarkerAlt />,
      },
    ],
  },

  /**
   * Key skills
   */
  keySkills: {
    title: 'Tech skills',
    list: [
      { text: 'React, Redux, JSX' },
      { text: 'JavaScript' },
      { text: 'Node.js, Express' },
      { text: 'React Native' },
      { text: 'HTML5, CSS3' },
    ],
  },

  /**
   * Additional skills
   */
  additionalSkills: {
    title: 'Business skills',
    list: [
      { text: 'Bussiness Strategy' },
      { text: 'UX Focus' },
      { text: 'Economic & Finance analysis' },
      { text: 'Customer relationship' },
      { text: 'Design & Lean Thinking'}
    ],
  },

  humanSkills: {
    title: 'Human skills',
    list: [
      { text: 'Leadership' },
      { text: 'Brainstorming' },
      { text: 'Team-worker' },
      { text: 'Entrepreneur' },
      { text: 'Icebreaker'},
      { text: 'Multicultural Adaptation'}
    ],
  },
  /**
   * Languages I speak
   */
  languages: {
    title: 'Languages',
    list: [
      { text: 'Spanish - Native' },
      { text: 'English - Fluent' },
    ],
  },

  /**
   * Hobbies and interests
   */
  interests: {
    title: 'Interests',
    list: [
      { text: 'Music Composition', icon: <FaMusic /> },
      { text: 'Learning new things', icon: <FaReact /> },
      { text: 'Eating Hamburguers', icon: <FaHamburger /> },
      { text: 'Economic & War History', icon: <FaBook /> },
      { text: 'Trading', icon: <FaChartBar /> },
    ],
  },

  projects: {
    title: 'Projects',
    list: [
      {
        name: 'The Gamer Cavern',
        techList: [
          'React',
          'Redux',
          'Node.js, Express',
          'PostgreSql',
          'Sequelize',
          'Pure CSS'
        ],
        description: `
          Habit Tracker is my final project for Harvard's CS50 course. It's 
          built as MVP (minimal viable product) and its core functionality is to 
          track user's habits.`,
        url: 'https://habit-tracker.macieksitkowski.com/',
      },
      {
        name: 'Pocket Globe App',
        techList: ['React', 'D3.js', 'TopoJSON', 'Material-UI'],
        description: `
          The app uses D3.js and React to create a highly interactive and responsive 
          globe. It connects to various APIs to get data about selected country.`,
        url: 'https://sitek94.github.io/pocket-globe-app',
      },
    ],
  },

  /**
   * Work experience
   *
   * Acceptable date format: `YYYY-MM`
   */
  workExperience: {
    title: 'Experience',
    list: [
      {
        company: 'Cabify Fleet',
        location: 'Buenos Aires, Argentina',
        date: {
          start: '2017-05',
          end: 'actual',
        },
        jobTitle: 'Business Manager',
        description: `
          Working in one of the busiest restaurants on the island I became 
          a better team player. Additionally it was a great opportunity to learn 
          Spanish and further improve my English.`,
      },
      {
        company: 'Avans Corp S.A.S',
        location: 'Bogota, Colombia',
        date: {
          start: '2014-08',
          end: '2016-03',
        },
        jobTitle: 'Customer Service Assistant',
        description: `
          Being a part of Customer Service team and talking over the phone 
          with clients from all around the world helped me improve both my 
          communication and collaboration skills.`,
      },
      {
        company: 'Henry Academy',
        location: 'Buenos Aires, Argentina',
        date: {
          start: '2021-08',
          end: 'actual',
        },
        jobTitle: 'Teaching Assistant',
        description: `
          Working for the first time abroad and overcoming the challenges along 
          the road taught me how to quickly adapt to new environments.`,
      },
    ],
  },

  /**
   * Certificates and courses
   */
  certificates: {
    title: 'Certificates',
    list: [
      {
        name: 'Full Stack Web Development',
        provider: 'Henry Bootcamp',
      },
      {
        name: 'HTML, CSS3 & Javascript',
        provider: 'Educacion IT',
      },
      {
        name: 'Algorithms and Data Structures Certification',
        provider: ' freeCodeCamp',
      },
      {
        name: 'Data Visualization Certification',
        provider: ' freeCodeCamp',
      },
      {
        name: 'Front End Libraries Certification',
        provider: ' freeCodeCamp',
      },
    ],
  },

  /**
   * Education, school, etc
   */
  education: {
    title: 'Education',
    list: [
      {
        institution: 'Henry Bootcamp',
        description: 'Full Stack Web Development',
        date: {
          start: '2021-03',
          end: '2021-10',
        },
      },
      {
        institution: 'Educacion IT',
        description: 'HTML, CSS3 & Javascript',
        date: {
          start: '2020-05',
          end: '2020-06',
        }
      },
      {
        institution: 'UADE',
        description: 'Finance',
        date: {
          start: '2017-05',
          end: '2020-03',
        }
      },
     
    ],
  },
};

export default data;
