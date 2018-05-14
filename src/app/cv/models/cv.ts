import { Language } from './language';
import { Education } from './education';
import { Work } from './work';

export interface Cv {
  basics: {
    firstName: string;
    lastName: string;
    photo: string;
  };
  location: {
    city: string;
    country: string;
    region?: string;
  };
  contacts: {
    phone: string;
    email: string;
    telegram: string,
    github: string;
    linkedin: string;
    twitter?: string;
    facebook?: string;
    vkontakte?: string;
  };
  summary: string;
  skills: string[];
  languages: Language[];
  education: Education[];
  work: Work[];
  interests: string[];
  courses: string[];
}
