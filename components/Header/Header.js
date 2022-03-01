import { HeaderContainer, Nav } from "./style";
import Image from "next/image";
import LogoHeader from "../../public/img/mwclogo.png";

import Link from "next/link";

const Header = () => {
  return (
    <HeaderContainer>

      <Image src={LogoHeader} alt="mwc" />

      <Nav>
        <Link href="/company-form">
          <a>
            <li>Add Companies</li>
          </a>
        </Link>
        <Link href="/flight-form">
          <a>
            <li>Add Flights</li>
          </a>
        </Link>
        <Link href="/allcompanies">
          <a>
            <li>All Companies</li>
          </a>
        </Link>
        <Link href="/data">
          <a>
            <li>Data</li>
          </a>
        </Link>
      </Nav>

    </HeaderContainer>
  );
};

export default Header;
