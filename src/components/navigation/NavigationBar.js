import { Link } from "react-router-dom";
import NavigationLink from "./NavigationLink";

const NavigationBar = () => {
  return (
    <>
      <nav className="bg-alt flex p-lr-main flex-ai-c flex-jc-sb flex-mob-jc-c">
        <Link className="c-main td-no" to="/">
          <h1>Adam Curzon</h1>
        </Link>
        <div className="flex flex-g-20">
          <NavigationLink to="/" text="Home" />
          <NavigationLink to="/about" text="About" />
          <NavigationLink to="/contact" text="Contact" />
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
