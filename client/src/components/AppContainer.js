 import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from "../components/Home"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Isabella from '../pages/IsabellaSaracini'
import Kamryn from '../pages/KamrynHarmeling'
import Kris from '../pages/KrisDegirolamo'
import Nicholas from '../pages/NicholasRiley'
import { AppContextProvider } from '../libs/appContext';



function AppContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
    <Router>
      <AppContextProvider>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/IsabellaSaracini" element={<Isabella />} />
            <Route path="/KamrynHarmeling" element={<Kamryn />} />
            <Route path="/KrisDegirolamo" element={<Kris />} />
            <Route path="/NicholasRiley" element={<Nicholas />} />
          </Routes>
        </div>
        <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      </AppContextProvider> 
    </Router>
  
     </div>
  );
}

  export default AppContainer; 