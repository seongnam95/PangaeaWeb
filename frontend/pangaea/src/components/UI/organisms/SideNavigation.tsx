import styled from 'styled-components';
import { faBuilding, faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
import NavContent from '../molecules/NavContent';
import { BsFillPeopleFill } from 'react-icons/bs';

export default function SideNavigation() {
  const property_items = [
    { value: 'solo', label: '개인 매물', icon: faBuilding },
    { value: 'group', label: '그룹 매물', icon: faBuilding },
  ];

  const handleOnClick = (v: string) => {
    console.log(v);
  };

  return (
    <StyledSideNavigation>
      <StyledHeader>관리센터</StyledHeader>
      <NavContent
        icon="people"
        items={property_items}
        header={'매물 관리'}
        onClick={handleOnClick}
      />
      <NavContent
        folding
        icon="people"
        items={property_items}
        header={'고객 관리'}
        onClick={handleOnClick}
      />
    </StyledSideNavigation>
  );
}

const StyledSideNavigation = styled.div`
  width: 210px;
  height: 100vh;
  background-color: var(--primary-color);
  border-right: 1px solid var(--color-border-light);
  transition: all 0.3s ease;
  -webkit-user-select: none;
  user-select: none;

  :hover {
    width: 210px;
  }

  @media screen and (max-width: 1000px) {
    width: 60px;
  }
`;

const StyledHeader = styled.div`
  width: 100%;
  height: 70px;
  padding: 1em;
  font-size: var(--font-size-l);
  color: var(--text-color);
  background-color: var(--primary-color);

  @media screen and (max-width: 1000px) {
    font-size: var(--font-size-s);
  }
`;
