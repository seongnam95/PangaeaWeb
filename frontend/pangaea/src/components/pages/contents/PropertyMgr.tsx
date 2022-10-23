import { useEffect, useState } from 'react';
import {
  PropertyItem,
  PropertyItemProps,
} from 'components/molecules/PropertyItem';
import styled from 'styled-components';
import propertyJson from 'assets/json/property_items.json';

export function PropertyMgr() {
  const [property, setProperty] = useState<PropertyItemProps[]>([]);

  useEffect(() => {
    setProperty(propertyJson.property);
  }, []);

  const handleOnClick = (v: PropertyItemProps) => {
    // console.log(v.value);
  };

  return (
    <StyledPropertyMgr>
      {property.map((values, idx) => (
        <PropertyItem key={idx} {...values} onClick={handleOnClick} />
      ))}
    </StyledPropertyMgr>
  );
}

const StyledPropertyMgr = styled.ul`
  min-width: 100rem;
  width: 70vw;
  height: 100%;
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > li + li {
    margin-top: 10px;
  }
`;
