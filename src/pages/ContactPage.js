import TextLeftImageRight from "../components/sections/TextLeftImageRight";
import AnimationPage from "./AnimationPage";

const ContactPage = () => {
  return (
    <>
      <TextLeftImageRight
        title="Contact"
        content="Contact us using the form below"
      />
      <form className="flex flex-dir-col flex-g-20 mw-container center">
        <label className="t-left">Name</label>
        <input className="p-lr-main p-tb-15 br-10 b b-foc" type="text" />
        <label className="t-left">Email</label>
        <input className="p-lr-main p-tb-15 br-10 b b-foc" type="email" />
        <label className="t-left">Message</label>
        <textarea
          className="p-lr-main p-tb-15 br-10 b b-foc"
          type="message"
        ></textarea>
        <button className="br-10 b p-tb-10 pointer bg-main-a c-white">
          Send Message
        </button>
      </form>
    </>
  );
};

export default AnimationPage(ContactPage);
