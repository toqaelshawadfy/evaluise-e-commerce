import Aside from "../Aside/Aside";
import Slider from "../Slider/Slider";
import "./Wrapper.css";

function Wrapper() {
  return (
    <div className="wrapper">
      <Aside />
        <Slider />
    </div>
  );
}

export default Wrapper;
