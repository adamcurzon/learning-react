import TextImageSection from "../components/sections/TextImageSection";
import CallToAction from "../components/sections/CallToAction";
import graphic1 from "../assets/graphic.svg";
import graphic2 from "../assets/graphic2.svg";
import AnimationPage from "./AnimationPage";
import ThreePointsSection from "../components/sections/ThreePointsSection";

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
      <ThreePointsSection
        title="My Three Points"
        point1={{
          title: "Commited To Development",
          content:
            "I develop only the best of the best websites for the best of the best people.",
        }}
        point2={{
          title: "Protecting Your Website",
          content:
            "Your website will be protected from bad guys and cyber criminals.",
        }}
        point3={{
          title: "Clean Web Designs",
          content:
            "Your website will be really clean and tidy with a stunning design.",
        }}
      />
      <TextImageSection
        title="My second heading"
        image={graphic2}
        backgroundClass="bg-alt"
        align="right"
        content={
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel orci
            nulla. Curabitur at nulla leo. Cras rutrum nisi eget eros venenatis
            egestas. Vestibulum pellentesque elementum ligula suscipit cursus.
            Suspendisse potenti.
          </>
        }
      />
      <TextImageSection
        title="Third heading"
        image={graphic1}
        backgroundClass="bg-main"
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
