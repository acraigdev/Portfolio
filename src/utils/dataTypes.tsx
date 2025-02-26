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
