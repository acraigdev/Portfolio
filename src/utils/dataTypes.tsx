import { Timestamp } from 'firebase/firestore';
import { Maybe } from '../utils/typeHelpers';

export type CompanyPreview = {
  id: string;
  name: string;
  title: string;
  startDate: Timestamp;
  endDate?: Maybe<Timestamp>;
  logo: string;
};

export type Award = {
  date: Timestamp;
  title: string;
  details?: string;
};

export type Promo = {
  startDate: Timestamp;
  endDate?: Timestamp;
  title: string;
};

export interface CompanyDetail extends CompanyPreview {
  content: Array<string>;
  recognition?: Array<Award>;
  promotion?: Array<Promo>;
  tools?: Array<string>;
  languages?: Array<string>;
}

export type Project = {
  title: string;
  code_url?: string;
  demo?: Demo;
  description: string;
  tech: Array<string>;
  date: Timestamp;
};

export type Demo = {
  url?: string;
  details?: string;
  title?: string;
  image?: string;
};
