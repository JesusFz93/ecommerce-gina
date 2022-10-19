import React from 'react';
import AppRouter from './routes/AppRouter';
import { AuthProvider } from "./context/AuthContext";
import ProductState from './context/ProductState';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const App = () => {
  return (
    <AuthProvider>
      <PayPalScriptProvider
        options={{
          "client-id":
            "ATBp6BIjCJMpjQRKYNDAYXwzLH82_FX1i2SHvRzul6NZsKB2T1S6T-vJYthemiraO1B3-CX5otLIfvDR",
        }}>
        <ProductState>
          <AppRouter />
        </ProductState>
      </PayPalScriptProvider>
    </AuthProvider>
  );
};

export default App;