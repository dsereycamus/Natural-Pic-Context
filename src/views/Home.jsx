import Gallery from "../components/Gallery";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container>
        <h1 className="my-3">Natural Pic - Flores🪻 </h1>
        <Row xs={1} md={2} lg={4} className="g-3 mb-3">
          <Gallery filtro={"home"} />
        </Row>
      </Container>
    </>
  );
};
export default Home;
