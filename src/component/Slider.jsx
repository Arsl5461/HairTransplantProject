import React, { useState } from "react";
import ReactCompareImage from "react-compare-image";
import "./Slider.css";

function App() {
  const images=[{
  before:"https://www.vincihairclinic.com/wp-content/webp-express/webp-images/uploads/elementor/thumbs/HT-Rodrigo-22yo-2000FUE-Brazil-Before-1-pstusyfjazpv4aqpuy8rv90a4oa9jq7g11cvxkjhbc.png.webp",
  after:"https://www.vincihairclinic.com/wp-content/webp-express/webp-images/uploads/elementor/thumbs/HT-Rodrigo-22yo-2000FUE-Brazil-After-pstvl8eqwkfedzo1qo9qdm4hgyws3xgqwzvqo8m44o.png.webp"
},
{
  before:"https://www.vincihairclinic.com/wp-content/webp-express/webp-images/uploads/elementor/thumbs/HT-Leandro-40yo-3500FUE-Brazil-Before-5-3-pstvl6j2iwctqrqs1ngh8mlka761oj9a8qkrpoowh4.png.webp",
  after:"https://www.vincihairclinic.com/wp-content/webp-express/webp-images/uploads/elementor/thumbs/HT-Leandro-40yo-3500FUE-Brazil-After-pstvl4ne58a93jticmn83n2n3ffb951tkh9sr4rotk.png.webp"
},
{
  before:"https://www.vincihairclinic.com/wp-content/webp-express/webp-images/uploads/elementor/thumbs/HT-Thiago-Cavaletti-37yo-2600-FUE-Brazil-Before-2-pstvlb89h2j9ctjya7hm33ev94ivr0rxxdu742hxm0.png.webp",
  after:"https://www.vincihairclinic.com/wp-content/webp-express/webp-images/uploads/elementor/thumbs/HT-Thiago-Cavaletti-37yo-2600-FUE-Brazil-After-pstvl9cl3egoplmol6ocy3vy2cs5bmkh94j85ikpyg.png.webp"
},
{
  before:"https://www.vincihairclinic.com/wp-content/webp-express/webp-images/uploads/elementor/thumbs/HT-Deonis-39yo-2600FUE-Brazil-Before-1-pstvl3pjye8yrxuvi48lj5b6i1jy1fy38cmb9ut2zs.png.webp",
  after:"https://www.vincihairclinic.com/wp-content/webp-express/webp-images/uploads/elementor/thumbs/HT-Deonis-39yo-2600FUE-Brazil-After-pstvl0w1dw53t3yyyl0pto0spvxuecmw7ynuu0x9ig.png.webp"
}

]
  // You can use the useState hook to manage the state
  const [hasError, setHasError] = useState(false);

  // You don't need getDerivedStateFromError and componentDidCatch hooks in functional components

  return (
    <div className="container">
      <div className="contentWrapper">
        <ReactCompareImage leftImage={images[0].before} rightImage={images[0].after} />
        <ReactCompareImage leftImage={images[1].before} rightImage={images[1].after} />
        <ReactCompareImage leftImage={images[2].before} rightImage={images[2].after} />
        <ReactCompareImage leftImage={images[3].before} rightImage={images[3].after} />

      </div>
    </div>
  );
}

export default App;
