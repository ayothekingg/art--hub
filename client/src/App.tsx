import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/App.css';
import { appRoutes } from './routes';
import Register from '@/pages/auth/Register';
import Login from '@/pages/auth/Login';
import ScrollToTop from '@/components/shared/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {appRoutes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;