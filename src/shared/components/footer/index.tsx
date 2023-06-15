import Check from "../../../assets/check.png";
import LogoE from "../../../assets/LOGO.png";
import Line from "../../../assets/Line.png";
import "./styles.scss";
const FooterComponents = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#7854F7", height: "auto" }}
      >
        <div className="d-flex justify-content-around">
          <div className="mt-5">
            <img
              src={Check}
              alt=""
              height={20}
              width={20}
              style={{
                marginTop: "-1%",
              }}
            />
            <span className="footerTitle">30 day money back guarantee</span>
          </div>
          <div className="mt-5">
            <img
              src={Check}
              alt=""
              height={20}
              width={20}
              style={{
                marginTop: "-1%",
              }}
            />
            <span className="footerTitle">Support teams across the world</span>
          </div>
          <div className="mt-5">
            <img
              src={Check}
              alt=""
              height={20}
              width={20}
              style={{
                marginTop: "-1%",
              }}
            />
            <span className="footerTitle">
              <span
                style={{
                  fontFamily: "Roboto-Bold",
                }}
              >
                Safe & Secure
              </span>
              online payment
            </span>
          </div>
        </div>

        <div
          className="d-flex justify-content-center"
          style={{ padding: "5%" }}
        >
          <img src={LogoE} alt="" />
        </div>

        <div
          className="d-flex justify-content-center"
          style={{ padding: "1%", marginBottom: "5%" }}
        >
          <img src={Line} alt="" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="footerText">Who we Are</h3>
              <div className="footerText">
                <p>About </p>
                <p>Team </p>
                <p>Work With Us </p>
              </div>
            </div>

            <div className="col">
              <h3 className="footerText">Woocommerce</h3>
              <div className="footerText">
                <p>Features</p>
                <p>Payments</p>
                <p>Marketing</p>
                <p>Shipping</p>
                <p>Extension Store</p>
                <p>eCommerce blog</p>
                <p>Development blog</p>
                <p>Ideas board</p>
                <p>Mobile App</p>
                <p>Community</p>
                <p>Style Guide</p>
                <p>Email Newsletter</p>
              </div>
            </div>

            <div className="col">
              <h3 className="footerText">Other products</h3>
              <div className="footerText">
                <p>Storefront</p>
                <p> WooSlider </p>
                <p>Sensei </p>
                <p> Sensei Extensions</p>
              </div>
            </div>
            <div className="col">
              <h3 className="footerText">Support</h3>
              <div className="footerText">
                <p> Documentation </p>
                <p> Customizations </p>
                <p> Support Policy </p>
                <p> Contact </p>
                <p> COVID-19 Resources </p>
                <p> Privacy Notice for California Users </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterComponents;
