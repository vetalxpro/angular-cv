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
    'HTML5, CSS3',
    'Bootstrap, SemanticUI, Materialize',
    'LESS, SASS/SCSS',
    'Responsive Web Design',
    'JavaScript(ES6), Typescript',
    'jQuery',
    'OOP',
    'AJAX, Websockets',
    'AngularJS(1.x)/Angular2+',
    'React + Redux',
    'Vue, VueX',
    'Webpack, Gulp',
    'Handlebars, Pug, EJS',
    'NodeJS',
    'MongoDB',
    'Express.js, Nest.js',
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
    {
      companyName: 'Freelance',
      position: 'Javascript Developer',
      period: '2015 - 2017'
    },
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
      period: 'September 2017 - June 2017'
    },
    {
      companyName: 'Attract Group',
      position: 'Frontend developer',
      period: 'June 2017 - now'
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
