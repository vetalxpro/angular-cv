import { Cv } from '../models/cv';

export const cv: Cv = {
  basics: {
    firstName: 'Vitalii',
    lastName: 'Doroshenko',
    photo: './assets/img/photo.png'
  },
  location: {
    city: 'Odessa',
    country: 'Ukraine',
    region: 'Odessa'
  },
  contacts: {
    phone: '+38(097)146-09-23',
    email: 'vetalpro.exe@gmail.com',
    telegram: 't.me/vetalxpro',
    github: 'github.com/vetalxpro',
    skype: 'vetaloptimus',
    linkedin: '',
    twitter: ''
  },
  summary: 'Front-end Developer with 2.5+ years of experience developing. Specializes in AngularJS/Angular2+, NodeJS, Express, MongoDB and responsive design.',
  skills: [
    'HTML5',
    'Responsive Web Design',
    'CSS3',
    'JavaScript(ES6)',
    'OOP',
    'AJAX, Websockets',
    'TypeScript',
    'NodeJS',
    'jQuery',
    'AngularJS/Angular',
    'React + Redux',
    'Webpack, Gulp',
    'Handlebars, Pug, EJS',
    'MongoDB',
    'Bootstrap',
    'LESS, SASS/SCSS',
    'Express.js',
    'Nest.js',
    'Version Control (Git)',
    'Mocha, Karma, Jasmine, Jest',
    'Web3.js, Ethereum',
    'Linux',
    'Docker'
  ],
  languages: [
    {
      name: 'English',
      level: 'Intermediate'
    },
    {
      name: 'Russian',
      level: 'Native'
    },
    {
      name: 'Ukrainian',
      level: 'Native'
    }
  ],
  education: [
    {
      name: 'Odessa National Telecommunications Academy',
      level: 'Master’s degree',
      specialization: 'Telecommunication systems and networks',
      startDate: new Date(2005, 0),
      endDate: new Date(2010, 0)
    }
  ],
  work: [
    {
      companyName: 'Internet company SANA+',
      position: 'Technical administrator, billing system developer',
      period: 'June 2010 - May 2017'
    },
    // {
    //   companyName: 'Freelance',
    //   position: 'Web developer',
    //   period: 'since September 2015'
    // },
    {
      companyName: 'Commercial Application "PartyMaker" (Angular 4)',
      position: 'Frontend developer',
      period: 'since July 2017'
    },
    {
      companyName: 'Commercial Application (AngularJS 1.6.x)',
      position: 'Frontend developer',
      period: 'since October 2017'
    },
    {
      companyName: '482.solutions',
      position: 'Javascript developer',
      period: 'October 2017 - now'
    }
  ],
  interests: [],
  courses: [
    'LoftSchool',
    'Udemy',
    'Pluralsight',
    'Coursera',
    'FreeCodeCamp'
  ]
};
