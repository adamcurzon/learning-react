import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav class="flex p-lr-main flex-ai-c flex-jc-sb">
      <Link class="c-main td-no" to="/">
        <h1>Adam Curzon</h1>
      </Link>
      <div class="flex flex-g-20">
        <Link to="/" class="td-no c-grey h-black">
          Home
        </Link>
        <Link to="/about" class="td-no c-grey h-black">
          About
        </Link>
        <Link to="/contact" class="td-no c-grey h-black">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
