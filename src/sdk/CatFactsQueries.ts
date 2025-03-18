// https://github.com/wh-iterabb-it/meowfacts
import { SDKClient } from './clientBuilder';

const CatFactsClient = new SDKClient({
  base: 'https://meowfacts.herokuapp.com',
});
export const randomFacts = ({ count }: { count?: number }) => {
  const queryKey = [
    {
      api: 'CatFacts:randomFacts',
    },
  ];
  return {
    queryKey,
    queryFn: async () =>
      await CatFactsClient.send({
        api: '/',
        input: { query: { ...(count && { count: String(count) }) } },
      }),
  };
};
