import { Timestamp } from 'firebase/firestore';
import { Maybe } from './typeHelpers';

export const getMonthYearOrCurrent = (date: Maybe<Timestamp>) => {
  if (!date) return 'Current';
  return date.toDate().toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
};
