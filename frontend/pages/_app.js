import { ApolloProvider } from '@apollo/client';
import "../styles/globals.css";
import "../styles/landing-page.module.scss";
import "../styles/registrationPage.module.scss";
import { useApollo } from '../lib/apollo';


function MyApp({ Component, pageProps }) {
  const client = useApollo();
  return <ApolloProvider client={client}><Component {...pageProps} /></ApolloProvider>;
}

export default MyApp;
