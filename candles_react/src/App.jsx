import styles from'./app.module.scss';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { ToastContainer } from 'react-toastify';


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound/NotFound';

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
            <Route path='*' element={<NotFound />}/>
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
