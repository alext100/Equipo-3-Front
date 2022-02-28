import { HeaderContainer } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <div>Logo</div>
      <nav>
        <ul>
          <li>Companies</li>
          <li>Flights</li>
          <li>All Companies</li>
          <li>Data</li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
