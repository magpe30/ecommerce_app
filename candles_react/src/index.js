import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { configureStore } from '@reduxjs/toolkit';
import productsReducer, { productsFetch } from './features/productsSlice';
import { Provider } from 'react-redux';
import { productsApi } from './features/productsApi';
import cartReducer, { getTotal } from './features/cartSlice';
import authReducer from './features/authSlice';


const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
     return getDefaultMiddleware().concat(productsApi.middleware);
  }
});

store.dispatch(productsFetch());
store.dispatch(getTotal());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
