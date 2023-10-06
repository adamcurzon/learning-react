import { useState } from "react";
import TextLeftImageRight from "../components/sections/TextLeftImageRight";
import AnimationPage from "./AnimationPage";
import Loader from "../components/Loader";
import { useDispatch } from "react-redux";
import { showSnackBar, hideSnackBar } from "../state/SnackBarReducer";

const ContactPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const submitContactForm = () => {
    setLoading(true);
    dispatch(
      showSnackBar({
        message: "This feature hasn't been created yet",
        colorClass: " bg-tomato",
      })
    );
    setTimeout(() => {
      dispatch(hideSnackBar());
    }, 3000);
  };
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
        <button
          onClick={submitContactForm}
          className="br-10 b p-tb-10 pointer bg-main-a c-white mh-50"
        >
          {loading ? <Loader /> : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default AnimationPage(ContactPage);
