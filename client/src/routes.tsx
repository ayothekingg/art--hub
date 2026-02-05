import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Auctions from './pages/Auctions';
import Drop from './pages/Drop';
import ProductPage from './marketplace/ProductPage';
import LiveBid from './auctions/livebid';
import CartPage from './marketplace/CartPage';
import ThankYou from './marketplace/ThankYou';

export const appRoutes = [
  { path: '/', element: <Home /> },
  { path: '/Marketplace', element: <Marketplace /> },
  { path: '/Auctions', element: <Auctions /> },
  { path: '/Drop', element: <Drop /> },
  { path: '/Marketplace/product/:id', element: <ProductPage /> },
  { path: '/livebid', element: <LiveBid /> },
  { path: '/Marketplace/Cart', element: <CartPage /> },
  { path: '/Marketplace/ThankYou', element: <ThankYou /> },
];