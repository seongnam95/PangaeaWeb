import { StateLabel } from 'components/atoms/StateLabel';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LabelGroup } from './LabelGroup';

export interface PropertyItemProps {
  value: {
    imgUrl: string;
    situation?: string[]; // 상태
    address: {
      siNm?: string;
      sggNm?: string;
      emdNm?: string;
      liNm?: string;
      bun?: string;
      ji?: string;
      dong?: string;
      ho?: string;
      layer?: string;
      detail?: string;
    };
    dealType: string; // 거래 종류
    price: {
      amount: number; // 거래 금액
      rent?: number; // 월 임대료
      adminCost?: number; //관리비
      loan?: number; // 융자금
    };
    property: {
      kind: number; // 종류 코드
      area: number; // 면적
    };
    // 매물지
    master: {
      name?: string;
      business: string;
      businessCode: string;
    };
  };
  onClick?: (v: PropertyItemProps) => void;
}

export function PropertyItem(props: PropertyItemProps) {
  const [values, setValues] = useState<PropertyItemProps>(props);
  let pv = parsingValue(values);

  useEffect(() => {
    setValues(props);
  }, [props]);

  const handleOnClick = () => {
    if (props.onClick) props.onClick(values);
  };

  return (
    <StyledPropertyItem onClick={handleOnClick}>
      <Label>{pv.situation}</Label>
      <LabelGroup labels={pv.situation} />
      <Label>{pv.address.full}</Label>
      <Label>{pv.address.name}</Label>
      <Label>{pv.address.bunJi}</Label>
      <Label>{pv.address.dongHo}</Label>
    </StyledPropertyItem>
  );
}

const parsingValue = (props: PropertyItemProps) => {
  let adr = props.value.address;

  let value = {
    situation: props.value.situation,
    address: {
      full: [
        [adr.siNm, adr.sggNm, adr.emdNm, adr.liNm].join(' '),
        [adr.bun, adr.ji].join('-'),
        [adr.dong, adr.ho].join(' '),
      ].join(' '),
      name: [adr.siNm, adr.sggNm, adr.emdNm, adr.liNm].join(' '),
      bunJi: [adr.bun, adr.ji].join('-'),
      dongHo: [adr.dong, adr.ho].join(' '),
    },
  };

  return value;
};

// styled
const StyledPropertyItem = styled.li`
  display: grid;
  font-size: 1.4rem;
  padding: 1.6rem;
  width: 100%;
  border-bottom: 1px solid var(--border-color-light);
  cursor: pointer;
`;

const Label = styled.div``;
