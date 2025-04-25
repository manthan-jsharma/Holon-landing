import { ParallaxProvider } from "react-scroll-parallax";

import FullPageScroll from "../components/FullPageScroll";
import Header from "../components/Header";
import sideElements from "../utils/sideElements";
import MySelf from "../views/MySelf";
import Outer from "../views/Outer";

import Reviews from "../views/Reviews";
import SideElements from "../components/SideElements";
import TopScrolledBar from "../components/TopScrolledBar";

import { header, mySelf, outer, reviews, works } from "../utils";

import Cursor from "../components/Cursor";

import WaterMark from "../components/WaterMark";

const ViewElement = ({ children, id }) => (
  <div id={id} className="view-element">
    {children}
  </div>
);

export default function Home() {
  return (
    <>
      <Cursor />
      <ParallaxProvider>
        <TopScrolledBar />

        <FullPageScroll />

        <Header data={header} />
        <SideElements data={sideElements} />
        <ViewElement id="home">
          <Outer data={outer} />
        </ViewElement>

        <ViewElement id="my-self">
          <MySelf data={mySelf} />
        </ViewElement>

        <ViewElement id="reviews">
          <Reviews data={reviews} />
        </ViewElement>

        <WaterMark />
      </ParallaxProvider>
    </>
  );
}
