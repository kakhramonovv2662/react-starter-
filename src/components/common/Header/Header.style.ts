import styled from "styled-components";

export const HeaderTop = styled.header`
  position: fixed;
  z-index: 1001;
  width: 100%;
  top: 0;
  background-color: #fff;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  box-shadow: 5px 0 3px 0 #d8dbde;
`;

export const HeaderList = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const HeaderListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #e8f3ff;
  padding: 8px;
  margin: 0 10px;
  cursor: pointer;

  .header-link {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderButton = styled.button`
  font-family: "Poppins";
  font-weight: 600;
  border: none;
  background-color: #5aa9ff;
  border-radius: 7px;
  padding: 0 24px;
  color: #fff;
  transition: 0.2s ease;
  cursor: pointer;

  :hover {
    transition: 0.2s ease;
    opacity: 0.9;
    box-shadow: 0 0 6px 0.5px #d8dbde;
  }

  :active {
    transition: 0.3s ease;
    box-shadow: 0 0 0 0;
  }
`;
