import { Maybe } from '../utils/typeHelpers';

export type CompanyPreview = {
  id: string;
  name: string;
  title: string;
  startDate: Date;
  endDate?: Maybe<Date>;
  logo: string;
};

export const CompanyPreviews: Array<CompanyPreview> = [
  {
    id: 'aws',
    name: 'Amazon Web Services',
    title: 'Front End Engineer',
    startDate: new Date('10/01/2022'),
    logo: 'aws.svg',
  },
  {
    id: 'angi',
    name: 'Angi',
    title: 'Front End Engineer',
    startDate: new Date('06/01/2018'),
    endDate: new Date('10/01/2022'),
    logo: 'angi.svg',
  },
  {
    id: 'comcast',
    name: 'Comcast',
    title: 'Software Engineer',
    startDate: new Date('04/01/2016'),
    endDate: new Date('06/01/2018'),
    logo: 'comcast.svg',
  },
];

type Award = {
  date: Date;
  title: string;
  details?: string;
};

type Promo = {
  startDate: Date;
  endDate?: Date;
  title: string;
};

export interface CompanyDetail extends CompanyPreview {
  content: Array<string>;
  recognition?: Array<Award>;
  promotion?: Array<Promo>;
  tools?: Array<string>;
  languages?: Array<string>;
}
export const CompanyDetails: Array<CompanyDetail> = [
  {
    ...CompanyPreviews[0],
    content: [
      'Spearheaded a comprehensive rewrite of EC2 Image Builder to enhance both customer and developer experiences. This included migrating from JavaScript to TypeScript, proactive error handling, and increasing data reliability and performance. Additionally, this refactor elevates developer quality of life by introducing automated breadcrumbs, standardized query structures, and comprehensive end-to-end tests.',
      'Managed the entire feature release for Lifecycle Policies within Image Builder; collaborating closely with product, design, and back-end teams to architect and develop, implement end-to-end tests, and oversee release monitoring.',
      'Led accessibility enhancements for Image Builder and Fleet Manager, achieving full compliance within six months of joining and training the team on best practices. Image Builder was the 18th console to achieve remediation out of a target of 110.',
    ],
  },
  {
    ...CompanyPreviews[1],
    content: [
      'Primary front-end developer on Book Now, integrating Handy’s services into HomeAdvisor and Angi. I developed a responsive single-page application using Vue.js, which evolved into a Nuxt application to improve responsiveness, CI/CD capabilities, and maintainability. I frequently assisted with backend API development in our Spring Boot Java client.',
      'Implemented internal tools to improve speed of development and consistent experiences for developers and users. I contributed to the creation of a design library of reusable Vue components and standards as well as a code snippet tool and linter to ease the implementation of these standards. I developed a Chrome extension to auto-populate the Angi questionnaire, streamlining access to team features by saving time on repetitive clicks.',
      'Trained peers on Vue.js as the company transitioned from an internal framework. This included public and internal presentations, one-on-one mentoring, and comprehensive documentation of best practices.',
    ],
  },
  {
    ...CompanyPreviews[2],
    content: [
      'Developed a desktop application for Comcast Business telephony subscribers. The application allowed users to place calls, review call history and contacts, and chat using their telephony line. I worked on APIs in Java and the application was built with HTML, CSS, JavaScript, and Electron.',
      'Created Alexa integration for telephony subscribers for Comcast LabWeek which resulted in flying to Philadelphia to present to and collaborate with the broader organization.',
    ],
  },
];
