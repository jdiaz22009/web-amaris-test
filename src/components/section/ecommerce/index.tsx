import CardComponent from "../../../shared/components/card";
import "./styles.scss";

const EcommerceComponents = () => {
  return (
    <>
      <div className="container-fluid marginTitle">
        <div className="contentTitle">
          <h1 className="h1Title">Your eCommerce made simple</h1>
        </div>

        <div className="d-flex justify-content-between">
          <CardComponent
            url="https://i.imgur.com/JHJh8LY.png"
            title="All You Need to Start"
            summary="Add WooCommerce plugin to any WordPress site and set up a new store in minutes."
            marginTop={-300}
          />
          <CardComponent
            url="https://i.imgur.com/NXQ3sVq.png"
            title="Customize and Extend"
            summary="From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable."
            marginTop={-200}
          />
          <CardComponent
            url="https://i.imgur.com/PG2tlyH.png"
            title="Active Community"
            summary="WooCommerce is one of the fastest-growing eCommerce communities."
            marginTop={-100}
          />
        </div>
      </div>
    </>
  );
};
export default EcommerceComponents;
