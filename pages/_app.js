import '../styles/globals.css';
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <div key={router.route} className='h-full'>
          {/* <Transition/> */}
          <Component {...pageProps} />
          <ToastContainer/>
        </div>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp;
