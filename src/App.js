import Container from "@mui/material/Container";
import { useState } from "react";
import CardSection from "./Components/CardSection/CardSection";
import DetailCardModel from "./Components/CardSection/DetailCardModel";
import TemporaryDrawer from "./Components/CityDrawer/CityDrawer";
import CommantSection from "./Components/CommantSection/CommantSection";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection";
import LightBox from "./Components/LightBox/Lightbox";
import Test from "./Components/Navbar";
import RouteArea from "./Components/RouteArea";
import TraditionalDress from "./Components/TraditionalDress";
function App() {
  const [displayComponent, setDisplaycomponent] = useState(false);
  const [detailData, setDetailData] = useState("");
  return (
    <div
      initial={{ y: "-100%" }}
      animate={{ y: 0, transition: { duration: 2 } }}
    >
      <Test />
      <Container>
        <HeroSection />
        <TemporaryDrawer />
        <RouteArea />
        <TraditionalDress />
        <CardSection
          editModalData={setDetailData}
          display={setDisplaycomponent}
        />
        {displayComponent && (
          <DetailCardModel
            mdisplay={setDisplaycomponent}
            mdata={detailData}
            displayAnimation={displayComponent}
          />
        )}
      </Container>
      <LightBox />
      <CommantSection />
      <Footer />
    </div>
  );
}

export default App;
