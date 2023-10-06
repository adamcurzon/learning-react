import TextLeftImageRight from "../components/sections/TextLeftImageRight";
import TextRightImageLeft from "../components/sections/TextRightImageLeft";
import CallToAction from "../components/sections/CallToAction";
import graphic1 from "../assets/graphic.svg";
import graphic2 from "../assets/graphic2.svg";
import AnimationPage from "./AnimationPage";

const HomePage = () => {
  return (
    <>
      <CallToAction
        title="Home"
        image={graphic1}
        backgroundClass="bg-alt"
        content={
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel orci
            nulla. Curabitur at nulla leo. Cras rutrum nisi eget eros venenatis
            egestas.
          </>
        }
      />
      <TextRightImageLeft
        title="My second heading"
        content={
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel orci
            nulla. Curabitur at nulla leo. Cras rutrum nisi eget eros venenatis
            egestas. Vestibulum pellentesque elementum ligula suscipit cursus.
            Suspendisse potenti.
          </>
        }
        image={graphic2}
        backgroundClass="bg-main"
      />
      <TextLeftImageRight
        title="Third heading"
        image={graphic1}
        backgroundClass="bg-alt"
        content={
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel orci
            nulla. Curabitur at nulla leo. Cras rutrum nisi eget eros venenatis
            egestas. Vestibulum pellentesque elementum ligula suscipit cursus.
            Suspendisse potenti. Curabitur enim tellus, finibus cursus dui in,
            facilisis dapibus metus. Sed commodo enim scelerisque eros fringilla
            mattis. Vivamus auctor nulla quis neque convallis dignissim. Aenean
            tincidunt rutrum quam, sit amet aliquam mi congue ac.
          </>
        }
      />
    </>
  );
};

export default AnimationPage(HomePage);
