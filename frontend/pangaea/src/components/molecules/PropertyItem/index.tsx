import { Chip } from 'components/atoms';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Apartment, Housing, Land, Shop, Studio } from './Category';
import {
  ApartmentType,
  HousingType,
  LandType,
  ShopType,
  StudioType,
} from './Category';

export interface PropertyItemProps {
  pk: string;
  imgUrl?: string;
  transaction: number;

  housing?: HousingType;
  land?: LandType;
  apart?: ApartmentType;
  shop?: ShopType;
  studio?: StudioType;

  address: {
    full: string;
    siNm?: string;
    sggNm?: string;
    emdNm?: string;
    liNm?: string;
    bun?: string;
    ji?: string;
    dong?: string;
    ho?: string;
    detail?: string;
  };

  price: {
    amount: number;
    rent?: number;
    admin?: number;
    loan?: number;
  };

  master: {
    name?: string;
    business: string;
    businessCode: string;
  };

  onClick?: (v: PropertyItemProps) => void;
}

export function PropertyItem(props: PropertyItemProps) {
  const [values, setValues] = useState<PropertyItemProps>(props);

  useEffect(() => {
    setValues(props);
  }, [props]);

  return (
    <StyledPropertyItem
      onClick={() => {
        if (values.onClick) values.onClick(values);
      }}
    >
      {/* Image box */}
      {values.imgUrl ? (
        <div className="img-box">
          <img src={values.imgUrl} />
          <div className="img-header"></div>
        </div>
      ) : null}

      {/* Content */}
    </StyledPropertyItem>
  );
}

// styled
const StyledPropertyItem = styled.li`
  display: flex;
  width: 100%;
  height: 18rem;
  border: 1px solid var(--gray-200);

  p {
    transform: rotate(0.03deg);
  }

  & > .img-box {
    position: relative;
    flex-grow: 0;
    min-width: 22rem;
    width: 22rem;
    height: 100%;
    background-color: var(--gray-100);

    & > img {
      width: 100%;
      height: 100%;
    }

    & > .img-header {
      position: absolute;
      width: 100%;
      height: 4rem;
      top: 0;
      background-color: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(10px);
      box-shadow: var(--shadow-gray-300);
    }
  }

  & > .content {
    width: 100%;

    & > .header {
      display: flex;
      padding: 0 10px;
      align-items: center;
      width: 100%;
      min-height: 4rem;
      background-color: var(--gray-100);
      box-shadow: var(--shadow-gray-700);

      & > .chip-group {
        display: flex;
        gap: 0.5rem;
      }
    }
  }

  & > .content > .wrap {
    display: grid;
    grid-auto-columns: 1.1fr 0.9fr;
    padding: 3rem 1rem 0 2rem;
    grid-row-gap: 2.5em;

    & > .section-left {
      & > .amount {
        display: flex;
        gap: 5px;
        margin-bottom: 8px;

        & > p {
          font-size: var(--font-size-xl);
          font-weight: 600;
          color: var(--gray-700);
        }
      }

      & > .address {
        & > p {
          font-size: var(--font-size-m);
          font-weight: 500;
          color: var(--gray-500);
        }
      }
    }

    & > .section-right {
      display: grid;
      width: 90%;
      grid-template-columns: 1fr 1fr;
      grid-row: 1fr 1fr;
      gap: 10px;
      font-size: var(--font-size-m);
      font-weight: 500;
      color: var(--gray-700);

      .value {
        color: var(--gray-600);
      }
    }

    & > .section-footer {
      display: flex;
      grid-column: 1 / span 2;
      gap: 5px;
    }
  }
`;

const numberToKorean = (number: number) => {
  var inputNumber = number < 0 ? false : number;
  var unitWords = ['', '만', '억', '조', '경'];
  var splitUnit = 10000;
  var splitCount = unitWords.length;
  var resultArray = [];
  var resultString = '';

  for (var i = 0; i < splitCount; i++) {
    var unitResult =
      (+inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
    unitResult = Math.floor(unitResult);
    if (unitResult > 0) {
      resultArray[i] = unitResult;
    }
  }

  for (var i = 0; i < resultArray.length; i++) {
    if (!resultArray[i]) continue;
    resultString = String(resultArray[i]) + unitWords[i] + ' ' + resultString;
  }

  return resultString;
};
