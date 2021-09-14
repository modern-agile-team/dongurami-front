import Container from "./Container";
import WriteContent from './WriteContent';

function Write(props) {
  return (
    <Container>
      <WriteContent {...props} />
    </Container>
  );
}

export default Write;
