import Footer from '../components/Footer';
import MainLayout from '../layout/MainLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
