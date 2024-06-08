import { useState } from "react";
import Tab from "./Tab";
import Accordion from "./Accordion";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div>
      {/* <Tab></Tab> */}
      <Accordion />
    </div>
  );
}

export default App;
