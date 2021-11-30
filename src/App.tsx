import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Jokes from './pages/Jokes';
import Home from './pages/Home';
import Joke from './pages/Joke';
import PageNotFound from './pages/PageNotFound';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:category" element={<Jokes />} />
      <Route path="/:category/:id" element={<Joke />} />
      <Route path="404" element={<PageNotFound />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </div>
);

export default App;
