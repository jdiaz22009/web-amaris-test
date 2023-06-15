/* eslint-disable jsx-a11y/alt-text */
import Featured from "../../../assets/featured-image.png";
import "./style.scss";

const BannerComponent = () => {
  return (
    <>
      <img
        src={Featured}
        style={{
          position: "absolute",
          left: "55%",
          zIndex: 100,
          objectFit: "cover",
        }}
      />
      <div className="row">
        <div className="col-1">
          <div className="imgBackground" />
        </div>

        <div className="col-7">
          <div
            style={{
              width: "70%",
              marginTop: "10%",
            }}
          >
            <h1 className="textTitle">
              Building exactly the eCommerce website you want.
            </h1>
          </div>
        </div>
      </div>
      <div className="contenSumary">
        <span className="textSummary">
          WooCommerce is a customizable, open-source eCommerce platform built on
          WordPress. Get started quickly and make your way.
        </span>
      </div>

      <div className="row contentBtn">
        <div className="col-2">
          <button type="button" className="btn btn-primary">
            Start a New Store
          </button>
        </div>

        <div className="col-4 mt-4">
          <p className="textP">
            <span className="spanText"> or </span> Customize & Extend ›
          </p>
        </div>
      </div>
    </>
  );
};

export default BannerComponent;
