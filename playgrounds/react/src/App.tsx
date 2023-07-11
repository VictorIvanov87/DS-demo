import React from "react";
import { Button, CTA, CardWithOverline } from "@ds.e/react";
import "@ds.e/scss/lib/global.css";
import "@ds.e/scss/lib/utilities.css";
import "@ds.e/scss/lib/Button.css";
import "@ds.e/scss/lib/CTA.css";
import "@ds.e/scss/lib/Title";
import "@ds.e/scss/lib/Subtitle";
import "@ds.e/scss/lib/CircleIcon";

const App = () => {
  return (
    <div>
      <Button label="Click me!" />
      <CTA className="cta-button">CTA button</CTA>
      <CardWithOverline
        cardImg="asd.com"
        description="Some description"
        iconSrc="asd.com"
        subtitle="overline"
        title="Headline 6"
      />
    </div>
  );
};

export default App;
