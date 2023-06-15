/* eslint-disable jsx-a11y/alt-text */
interface IProps {
  title: string;
  summary: string;
  url: string;
  marginTop?: string | number;
}

const CardComponent = ({ title, summary, marginTop, url }: IProps) => {
  return (
    <>
      <div className="container">
        <div
          style={{
            marginTop,
          }}
        >
          <img src={url} width={400} height={400} />
        </div>

        <div
          style={{
            marginTop: "-3%",
            marginLeft: "10%",
          }}
        >
          <h2
            style={{
              fontFamily: "Roboto-Bold",
              fontSize: "36px",
            }}
          >
            {title}
          </h2>
          <span
            style={{
              fontFamily: "Roboto-Thin",
              fontSize: "18px",
              textAlign: "left",
            }}
          >
            {summary}
          </span>

          <div
            style={{
              marginTop: "2%",
            }}
          >
            <span className="textP">Ecommerce for Wordpress ›</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
