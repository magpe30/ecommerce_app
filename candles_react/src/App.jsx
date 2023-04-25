import styles from'./app.module.scss';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { ToastContainer } from 'react-toastify';

import {Elements, ElementsConsumer} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { STRIPE_PUBLIC_KEY } from './utilities';


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Success from './components/Success/Success';
import SignIn from './components/SignIn/SignIn';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import NotFound from './components/NotFound/NotFound';

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

const App = () => {

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <ToastContainer />
        <Header />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/:category_slug/:product_slug" element={<Product />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/cart/success" element={<Success />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path='/checkout' element={ 
              <Elements stripe={stripePromise}>
              <ElementsConsumer>
                {({stripe, elements}) => (
                  <Checkout stripe={stripe} elements={elements} />
                )}
              </ElementsConsumer>
            </Elements>
            }
            />
            <Route path='*' element={<NotFound />}/>
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
