// https://random-d.uk/api
import { SDKClient } from './clientBuilder';

const RandomDuckClient = new SDKClient({ base: 'https://random-d.uk/api/v2' });
export const quack = () => {
  const queryKey = [
    {
      api: 'quackDuck',
    },
  ];
  return {
    queryKey,
    queryFn: async () => await RandomDuckClient.send({ api: '/quack' }),
  };
};
