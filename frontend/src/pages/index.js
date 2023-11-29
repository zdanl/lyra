import HomeOne from "./HomeOne";
import HomeTwo from "./HomeTwo";
import HomeThree from "./HomeThree";
import BuyCrypto from "./BuyCrypto";
import BuyCryptoConfirm from "./BuyCryptoConfirm";
import BuyCryptoDetails from "./BuyCryptoDetails";
import Markets from "./Markets";
import SellSelect from "./SellSelect";
import SellCryptoAmount from "./SellCryptoAmount";
import SellCryptoConfirm from "./SellCryptoConfirm";
import SellCryptoDetails from "./SellCryptoDetails";
import Blog from "./Blog";
import BlogGrid01 from "./BlogGrid01";
import BlogGrid02 from "./BlogGrid02";
import BlogList from "./BlogList";
import BlogDetails from "./BlogDetails";
import Wallet from "./Wallet";
import UserProfile from "./UserProfile";
import Login from "./Login";
import Register from "./Register";
import Contact from "./Contact";
import Faq from "./Faq";



const routes = [
  { path: '/', component: <HomeOne />},
  { path: '/home-v2', component: <HomeTwo />},
  { path: '/home-v3', component: <HomeThree />},
  { path: '/buy-crypto-select', component: <BuyCrypto />},
  { path: '/buy-crypto-confirm', component: <BuyCryptoConfirm />},
  { path: '/buy-crypto-details', component: <BuyCryptoDetails />},
  { path: '/markets', component: <Markets />},
  { path: '/sell-select', component: <SellSelect />},
  { path: '/sell-crypto-amount', component: <SellCryptoAmount />},
  { path: '/sell-crypto-confirm', component: <SellCryptoConfirm />},
  { path: '/sell-crypto-details', component: <SellCryptoDetails />},
  { path: '/blog-default', component: <Blog />},
  { path: '/blog-grid-v1', component: <BlogGrid01 />},
  { path: '/blog-grid-v2', component: <BlogGrid02 />},
  { path: '/blog-list', component: <BlogList />},
  { path: '/blog-details', component: <BlogDetails />},
  { path: '/wallet', component: <Wallet />},
  { path: '/user-profile', component: <UserProfile />},
  { path: '/login', component: <Login />},
  { path: '/register', component: <Register />},
  { path: '/contact', component: <Contact />},
  { path: '/faq', component: <Faq />},


]

export default routes;