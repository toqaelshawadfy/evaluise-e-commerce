import { SlArrowRight } from "react-icons/sl";
import "./Aside.css";

const categories = [
  // "Woman's Fashion",
  // "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

function Aside() {
  return (
    <aside>
      <ul>
        <li className="nested">
          <a href="2">Woman's Fashion</a>
          <SlArrowRight className="icon" />
          <ul className="dropdown">
            <li>
              <a href="#womens-fashion-1">Dresses</a>
            </li>
            <li>
              <a href="#womens-fashion-2">Shoes</a>
            </li>
          </ul>
        </li>
        <li className="nested">
          <a href="2">Men's Fashion</a>
          <SlArrowRight className="icon" />
          <ul className="dropdown">
            <li>
              <a href="#womens-fashion-1">Dresses</a>
            </li>
            <li>
              <a href="#womens-fashion-2">Shoes</a>
            </li>
          </ul>
        </li>
        {categories.map((cat, index) => (
          <li key={index}>
            <a href={`#${cat.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()}`}>
              {cat}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Aside;
