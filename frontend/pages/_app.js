// import { ApolloProvider } from '@apollo/client';
import "../styles/globals.css";
import "../styles/form.module.scss";
import "../styles/landing-page.module.scss";
import "../styles/registrationPage.module.scss";

function MyApp({ Component, pageProps }) {
  const componentDidMount = () => {
    if (typeof window !== 'undefined') {
      let accessToken = localStorage.getItem('afreesmartAcessToken');
      process.env.AFREESMART_ACCESS_TOKEN = accessToken;
    }
  }
  componentDidMount()
  return <Component {...pageProps} />
}

export default MyApp;
