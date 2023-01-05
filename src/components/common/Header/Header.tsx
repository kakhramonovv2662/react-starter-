import { SvgIcon } from "@components/svgIcon";
import {
  HeaderButton,
  HeaderContainer,
  HeaderList,
  HeaderListItem,
  HeaderTop,
} from "./Header.style";

const Header = () => {
  return (
    <HeaderTop>
      <HeaderContainer>
        <SvgIcon iconName="logo" width="40px" height="40px" />
        <HeaderList>
          <HeaderListItem>
            <a className="header-link" href="/">
              <SvgIcon
                iconName="github"
                width="22"
                height="22"
                iconColor="#5aa9ff"
                hoverColor="#4297f2"
              />
            </a>
          </HeaderListItem>
          <HeaderListItem>
            <a className="header-link" href="/">
              <SvgIcon
                iconName="instagram"
                width="24"
                height="22"
                iconColor="#5aa9ff"
                hoverColor="#4297f2"
              />
            </a>
          </HeaderListItem>
          <HeaderListItem>
            <a className="header-link" href="/">
              <SvgIcon
                iconName="telegram"
                width="22"
                height="22"
                iconColor="#5aa9ff"
                hoverColor="#4297f2"
              />
            </a>
          </HeaderListItem>
          <HeaderButton>Download</HeaderButton>
        </HeaderList>
      </HeaderContainer>
    </HeaderTop>
  );
};

export default Header;
