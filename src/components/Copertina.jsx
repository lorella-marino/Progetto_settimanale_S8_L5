import { Card } from "react-bootstrap";

const Copertina = ({ title, poster }) => {
  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Img
        variant="top"
        src={poster}
        alt={title}
        className=" rounded-1"
        style={{ objectFit: "cover", height: "15rem" }}
      />
    </Card>
  );
};

export default Copertina;
