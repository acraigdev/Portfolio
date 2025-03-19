import { SDKClient } from './clientBuilder';

//https://cataas.com/
const RandomCatPicClient = new SDKClient({
  base: 'https://cataas.com/',
});

// https://github.com/wh-iterabb-it/meowfacts
const CatFactsClient = new SDKClient({
  base: 'https://meowfacts.herokuapp.com',
});
export const randomFacts = ({ count }: { count?: number }) => {
  const queryKey = [
    {
      api: 'CatQueries:randomFacts',
    },
  ];
  return {
    queryKey,
    queryFn: async () => {
      const allSettled = await Promise.allSettled([
        CatFactsClient.send({
          api: '/',
          input: { query: { ...(count && { count: String(count) }) } },
        }),
        RandomCatPicClient.send({ api: '/cat' }).then(async res => {
          console.log(res);
          return {
            image: URL.createObjectURL(res),
          };
        }),
      ]);

      const filtered = allSettled.filter(p => p.status === 'fulfilled');
      return {
        facts: filtered[0].value.data,
        image: filtered[1].value.image,
      };
    },
  };
};
