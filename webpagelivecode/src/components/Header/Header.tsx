import * as S from "./style";
import softexlogo from "../../assets/softexlogo.png";

const Header = () => {
  return (
    <S.StyledHeader>
      <div>
        <i>
          <img src={softexlogo} alt="" />
        </i>
        <h1>Kreed</h1>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>How it Works</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <button>Get Started</button>
      </nav>
    </S.StyledHeader>
  );
};

export default Header;
