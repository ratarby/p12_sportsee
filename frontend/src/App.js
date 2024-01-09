import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../../frontend/src/components/Layout/Layout';
import Home from './pages/Home';
import Error from './pages/Error';

const App = () => {
  return (
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="*" element={<Error />} />
            </Route>
        </Routes>
  );
}

export default App;