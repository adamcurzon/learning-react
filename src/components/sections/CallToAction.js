import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showSnackBar, hideSnackBar } from "../../state/SnackBarReducer";

const CallToAction = ({ title, content, image, backgroundClass }) => {
  const dispatch = useDispatch();

  return (
    <>
      <section className={"w-100 p-tb-main-2 p-r " + backgroundClass}>
        <div className="flex flex-jc-sb mw-container center flex-ai-c flex-g-20">
          <div className="t-left mw-50">
            <h2 className="fs-48 p-m-reset">{title}</h2>
            <p className="c-grey lh-30">{content}</p>
            <div className="flex flex-g-20 flex-mob-jc-c">
              <Link
                to="contact"
                className="td-no p-tb-10 p-lr-main br-10 b-reset pointer bg-main-a c-white"
              >
                Contact Me
              </Link>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(
                    showSnackBar({
                      message: "This page hasn't been made yet",
                      colorClass: " bg-tomato",
                    })
                  );
                  setTimeout(() => {
                    dispatch(hideSnackBar());
                  }, 3000);
                }}
                className="td-no p-tb-10 p-lr-main br-10 b-reset pointer c-grey"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="mw-50">
            <img className="br-40 mw-300" alt={image} src={image} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
