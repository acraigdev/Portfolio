import ReactGA from 'react-ga4';
import { Maybe } from './typeHelpers';

const EventCategory = {
  error: 'error',
  log: 'log',
  warn: 'warn',
};

export const analytics = {
  logError: ({ action, label }: { action: string; label?: Maybe<string> }) =>
    ReactGA.event({
      category: EventCategory.error,
      action,
      label,
    }),
  log: ({ action, label }: { action: string; label?: Maybe<string> }) =>
    ReactGA.event({
      category: EventCategory.log,
      action,
      label,
    }),
};
