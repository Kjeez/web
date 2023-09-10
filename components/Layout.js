import {Sora} from '@next/font/google'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';
import { Helmet } from 'react-helmet';


const Layout = ({children}) => {
  return (
   <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable}
   font-sora relative`}>
    <Helmet>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>Your Page Title</title>
        <meta name="description" content="Your page description for SEO" />
        <meta name="keywords" content="comma, separated, keywords" />
        <meta name="author" content="Your Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
    <TopLeftImg />
    <Nav />
    <Header />
    {children}
    
  </div>
  );
};

export default Layout;
