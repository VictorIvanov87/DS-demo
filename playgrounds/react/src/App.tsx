import React from "react";
import { Button, CTA } from "@ds.e/react"; 
import "@ds.e/scss/lib/global.css";
import "@ds.e/scss/lib/Button.css";
import "@ds.e/scss/lib/CTA.css";

const App = () => {
  return <div>
    <Button label="Click me!" />
    <CTA type="primary" className="cta-button"/>
  </div>;
};

export default App;
