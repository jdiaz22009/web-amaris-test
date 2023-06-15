const WooCommerceComponents = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#5F37EF",
          height: "250px",
          marginTop:'-10%'
        }}
      >
        <div
          className="d-flex justify-content-center"
          style={{
            margin: "10%",
            width: "70%",
            paddingTop: "4%",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "Roboto",
              color: "#FFF",
              marginTop: "1.5%",
            }}
          >
            WooCommerce - the
            <span
              style={{
                fontFamily: "Roboto-Bold",
              }}
            >
              most customizable eCommerce platform
            </span>
            for building
            <span
              style={{
                fontFamily: "Roboto-Bold",
              }}
            >
              your online business.
            </span>
          </h3>
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{
              marginLeft: "3%",
            }}
          >
            GET STARTED
          </button>
        </div>
      </div>
    </>
  );
};

export default WooCommerceComponents;
