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
      Full Stack Developer with creative skills capable of delivering high results and achieving timely deadlines. The ways to find meaning in my work-life balance are Software Development & Entrepreneurship. The main goal is always the same:  `,
    strong: ' To build excellent products and user experiences seeking to add value, impact and of course have fun.'   
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
      { text: 'Business Strategy' },
      { text: 'UX Focus' },
      { text: 'Economic & Finance analysis' },
      { text: 'Customer Relationship' },
      { text: 'Design & Lean Thinking'}
    ],
  },

  humanSkills: {
    title: 'Human skills',
    list: [
      { text: 'Leadership, Team-player' },
      { text: 'Brainstorming' },
      { text: 'Entrepreneur, Proacitve' },
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
      { text: ' Music Composition', icon: <FaMusic /> },
      { text: ' Learning new things', icon: <FaReact /> },
      { text: ' Eating Hamburguers', icon: <FaHamburger /> },
      { text: ' Economic & War History', icon: <FaBook /> },
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
          The Gamer Cavern is a project for Henry Bootcamp . It's 
          built as SPA and its core functionality is to show videogames, filter by categories connected from external API. Also it gives to user the option to create a new videogame`,
        url: 'https://habit-tracker.macieksitkowski.com/',
      },
      {
        name: 'E-commerce Music Instruments',
        techList: ['MongoDB', 'Express', 'React', 'Node.js', 'Material-UI'],
        description: `
          This is an e-commerce thought as a marketplace. It uses a MERN stack and is a project with all funcionality : search, filter, post, buy, sell, reviews`,
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
        company: 'Henry Academy',
        location: 'Buenos Aires, Argentina',
        date: {
          start: '2021-08',
          end: 'actual',
        },
        jobTitle: 'Teaching Assistant',
        description: `Coordinate and guide students to achieve integration to the study group.
          Assist to solve exercises and promote group collaboration (Pair Programming).`,
      },
      {
        company: 'Cabify Fleet',
        location: 'Buenos Aires, Argentina',
        date: {
          start: '2017-05',
          end: 'actual',
        },
        jobTitle: 'Business Manager',
        description: `Manage employees. Schedule, maintain, and track transport vehicles.
        Negotiate with suppliers. Resolve disputes between drivers.
          `,
      },
      {
        company: 'Avans Corp S.A.S',
        location: 'Bogota, Colombia',
        date: {
          start: '2014-08',
          end: '2016-03',
        },
        jobTitle: 'Co-Founder & International Sales Manager',
        description: `Maintaining an efficient relationship with all international customers. Finding appropriate client for each product to ensure maximum profit. Coordinating with the sales and supply chain team to analyze the international market.
          `,
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
