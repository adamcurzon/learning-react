import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="flex p-lr-main flex-ai-c flex-jc-sb">
      <Link className="c-main td-no" to="/">
        <h1>Adam Curzon</h1>
      </Link>
      <div className="flex flex-g-20">
        <Link to="/" className="td-no c-grey h-black">
          Home
        </Link>
        <Link to="/about" className="td-no c-grey h-black">
          About
        </Link>
        <Link to="/contact" className="td-no c-grey h-black">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
