import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "./components/Main/Container";
import { RightSide } from "./components/Main/RightSide";
import { LeftSide } from "./components/Main/LeftSide";

function App() {
  return (
    <>
      <Header />
      <Container>
        <section>
          <LeftSide />
        </section>
        <section>
          <RightSide />
        </section>
      </Container>
    </>
  );
}

export default App;
