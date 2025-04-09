import React from 'react';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import RegulationPage from './components/RegulationPage';
import Criteria from './components/Criteria';
import Awards from './components/Awards';

import ArticlesList from './components/ArticlesList';
import Article from './components/Article';

import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regulations" element={<RegulationPage />} />
        <Route path="/criteria" element={<Criteria />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:id" element={<Article />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
