import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/Routing";

export default function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}
