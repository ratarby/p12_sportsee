import React from 'react';
import { Routes, Route,  } from 'react-router-dom';
import Layout from '../../frontend/src/components/Layout/Layout';
import Home from './pages/Home';
import Error from './components/Error';
import User from './pages/User';
import NotFound from './pages/NotFound';

const App = () => {
  return (
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="user/:id" element={<User />} />
              <Route path="" element={<NotFound />} />
            </Route>
              <Route path="*" element={<Error />} />
              
        </Routes>
  );
}

export default App;
