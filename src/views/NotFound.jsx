import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container>
      <p className="text-dark text-center fs-2 mt-5">
        <span className="fw-bold">La url que intentas ingresar no existe </span>
      </p>
    </Container>
  );
};
export default NotFound;
