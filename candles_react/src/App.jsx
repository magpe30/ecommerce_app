import styles from'./app.module.scss';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Shop from './components/Shop/Shop';

const App = () => {

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/shop" element={<Shop />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
