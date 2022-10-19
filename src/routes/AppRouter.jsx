import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { BrowserRouter as Router } from "react-router-dom";


import Footer from '../components/Footer';
import RutasPublicas from './RutasPublicas';
import RutasPrivadas from './RutasPrivadas';

const AppRouter = () => {

  const { auth, verifyingToken } = useContext(AuthContext);

  useEffect(() => {
    verifyingToken()
  }, [verifyingToken]);
  
  return (
    <>
      <Router>
        {
          auth.authStatus ? (<RutasPrivadas/>) : (<RutasPublicas />)
        }   
        <Footer />
      </Router>
    </>
  );
};

export default AppRouter;