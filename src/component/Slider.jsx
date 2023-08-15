import React, { useState } from "react";
import ReactCompareImage from "react-compare-image";
import "./Slider.css";

function App() {
  const before =
    "https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg";
  const after =
    "https://hindalkindi1992.files.wordpress.com/2013/11/portrait_eyes_23.jpg";

  // You can use the useState hook to manage the state
  const [hasError, setHasError] = useState(false);

  // You don't need getDerivedStateFromError and componentDidCatch hooks in functional components

  return (
    <div className="mainWrapper">
      <div className="contentWrapper">
        <ReactCompareImage leftImage={before} rightImage={after} />
        <ReactCompareImage leftImage={before} rightImage={after} />
        <ReactCompareImage leftImage={before} rightImage={after} />
      </div>
    </div>
  );
}

export default App;
