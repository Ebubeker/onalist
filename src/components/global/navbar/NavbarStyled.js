import styled from "styled-components";

export const Nav = styled.div`
  background-color: transparent;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBrand = styled.p`
  font-size: 30px;
  user-select: none;
  cursor: pointer;

  @media (max-width: 585px) {
    font-size: 20px;
  }
`;

export const Diff = styled.span`
  font-weight: bold;
  color: #276cdb;
  font-size: 40px;
  @media (max-width: 585px) {
    font-size: 30px;
  }
`;

export const SearchBar = styled.div`
  background-color: #e9edf5;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 50px;
  margin-left: 25px;

  @media (max-width: 585px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

export const Input = styled.input`
  background-color: #e9edf5;
  border: none;
  outline: none;
  width: 500px;
  margin-left: 10px;
  color: #a8c9ff;

  &::placeholder {
    color: #a8c9ff;
  }

  @media (max-width: 1000px) {
    width: 200px;
  }

  @media (max-width: 585px) {
    width: 50%;
  }
`;

export const NavSearch = styled.div`
  display: flex;
  align-items: center;
`;

export const Menu = styled.div``;

export const NormalMenu = styled.div``;

export const Login = styled.div`
  display: flex;
`;

export const Button = styled.button`
  border: none;
  background-color: ${(props) => props.backColor};
  padding: 10px 25px;
  margin: 0px 10px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 14px;
  color: #264373;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.onhover};
  }
`;

export const UnderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
`;

export const Items = styled.li`
  margin: 15px;
  color: black;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #949494;
  }
`;

export const Socials = styled.div`
  display: flex;
  margin-right: 27px;
`;
