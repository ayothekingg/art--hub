import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Auctions from './pages/Auctions';
import Drop from './pages/Drop';
import ProductPage from './marketplace/productpage'; 

export const appRoutes = [
  { path: '/', element: <Home /> },
  { path: '/Marketplace', element: <Marketplace /> },
  { path: '/Auctions', element: <Auctions /> },
  { path: '/Drop', element: <Drop /> },
  { path: '/Marketplace/product/:id', element: <ProductPage /> }, 
];