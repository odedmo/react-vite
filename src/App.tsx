import { Container } from "@mui/material";
import MySelect from "./components/select/MySelect";
import Test from "./components/test/Test";

export default function App() {
  return (
    <Container>
      <Test name={"oded"} />
      <MySelect />
    </Container>
  );
}
