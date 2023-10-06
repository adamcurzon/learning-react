import TextRightImageLeft from "../components/sections/TextRightImageLeft";
import aboutImage from "../assets/about.jpg";

const HomePage = () => {
  return (
    <TextRightImageLeft
      title="About"
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
      image={aboutImage}
      backgroundClass="bg-main"
    />
  );
};

export default HomePage;
