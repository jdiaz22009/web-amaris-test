import HeaderComponents from "./shared/components/header";
import BannerComponents from "./shared/components/banner";
import EcommerceComponents from "./components/section/ecommerce";
import DevelopComponent from "./components/section/develop";
import FooterComponents from "./shared/components/footer";
import WooCommerceComponents from "./components/section/wooCommerce";
import SupportComponents from "./components/section/support";

function App() {
  return (
    <>
      <HeaderComponents />
      <BannerComponents />
      <EcommerceComponents />
      <DevelopComponent />
      <SupportComponents/>
      <WooCommerceComponents />
      <FooterComponents />
    </>
  );
}

export default App;
