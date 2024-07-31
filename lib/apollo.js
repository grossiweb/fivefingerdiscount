import { ApolloClient, InMemoryCache } from '@apollo/client';

// Changed file to return multiple objects
const apolloClient = () => {
  return new ApolloClient({
    uri: 'https://product.fivefingerdiscountcleaningservice.com/graphql',
    cache: new InMemoryCache(),
  });
};

export default apolloClient;
