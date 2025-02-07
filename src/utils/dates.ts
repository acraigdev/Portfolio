import { Maybe } from './typeHelpers';

export const getMonthYearOrCurrent = (date: Maybe<Date>) => {
  if (!date) return 'Current';
  return date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
};
