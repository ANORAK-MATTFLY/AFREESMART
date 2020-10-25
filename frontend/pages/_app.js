import { ApolloProvider } from '@apollo/client';
// import '../styles/index.css'
import "../styles/globals.css";
import "../styles/landing-page.module.scss";
import "../styles/registrationPage.module.scss";
import { useApollo } from '../lib/apollo';


function MyApp({ Component, pageProps }) {
  const client = useApollo();
  return <ApolloProvider client={client}>
    {/* <div className="container min-h-screen"> */}
    <Component {...pageProps} />
    {/* </div> */}
  </ApolloProvider>;
}

export default MyApp;
