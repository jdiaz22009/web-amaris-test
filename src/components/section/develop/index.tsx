/* eslint-disable jsx-a11y/alt-text */
import "./styles.scss";
const DevelopComponent = () => {
  return (
    <>
      <div className="container-fluid backgroundImg d-flex justify-content-start">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="d-flex justify-content-center">
                <div className="col-3">
                  <img
                    src="https://i.imgur.com/dj0UvEw.png"
                    width={450}
                    height={560}
                    style={{
                      marginTop: "-20%",
                    }}
                  />
                </div>
                <div
                  className="col-3"
                  style={{
                    marginLeft: "0%",
                    marginTop: "4%",
                  }}
                >
                  <h2 className="developmenFont">Develop Without Limits</h2>

                  <span className="developmentSummary">
                    WooCommerce is developer friendly, too. Built with a REST
                    API, WooCommerce is scalable and can integrate with
                    virtually any service. Design a complex store from scratch,
                    extend a store for a client, or simply add a single product
                    to a WordPress site—your store, your way.
                  </span>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    style={{
                      position: "absolute",
                      marginTop: "3%",
                      marginLeft: "-9%",
                    }}
                  >
                    Read the Documentation
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mt-5">
            <div className="row">
              <div className="d-flex justify-content-center">
                <div
                  className="col-3"
                  style={{
                    marginLeft: "0%",
                    marginTop: "4%",
                  }}
                >
                  <h2 className="developmenFont">Know our Global Community</h2>

                  <span className="developmentSummary">
                    WooCommerce is one of the fastest-growing eCommerce
                    communities. We’re proud that the helpfulness of the
                    community and a wealth of online resources are frequently
                    cited as reasons our users love it. There are 80+ meetups
                    worldwide!
                  </span>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    style={{
                      position: "absolute",
                      marginTop: "3%",
                      marginLeft: "-20%",
                    }}
                  >
                    Read the Documentation
                  </button>
                </div>
                <div className="col-3">
                  <img
                    src="https://i.imgur.com/ywokp2v.png"
                    width={500}
                    height={600}
                    style={{
                      marginTop: "10%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevelopComponent;
