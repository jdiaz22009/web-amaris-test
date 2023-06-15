import Featured from "../../../assets/image_24.png";
import "./styles.scss";
const SupportComponents = () => {
  return (
    <>
      <div className="container-fluid ">
        <h1 className="supportTitle">Supported by real people</h1>
        <div className="supportSummary">
          <span>
            Our team of Happiness Engineers works remotely from 68 countries
            providing customers support across multiple time zones.
          </span>
        </div>

        <div
          className="d-flex justify-content-center"
          style={{
            marginTop: "4%",
          }}
        >
          <img src={Featured} alt="" />
        </div>
      </div>
    </>
  );
};

export default SupportComponents;
