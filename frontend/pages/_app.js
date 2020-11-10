// import { ApolloProvider } from '@apollo/client';
import "../styles/globals.css";
import "../styles/form.module.scss";
import "../styles/landing-page.module.scss";
import "../styles/registrationPage.module.scss";
import 'react-datepicker/dist/react-datepicker.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
