import { Chip } from 'components/atoms';
import styled from 'styled-components';

export interface HousingType {
  kind: number;
  publicArea: number;
  area: number;
  crtFloor: number;
  topFloor: number;
  roomCount: number;
  toiletCount: number;

  tag?: {
    pet?: boolean;
    parking?: boolean;
    ev?: boolean;
  };
}

export function Housing(props: HousingType) {
  return (
    <StyledHousing>
      {/* <div className="content">
        <div className="header">
          <div className="chip-group">
            {props.tag.pet ? <Chip icon="dog" /> : null}
            {props.tag.ev ? <Chip icon="elevator" /> : null}
            {props.tag.parking ? <Chip icon="car" /> : null}
          </div>
        </div>
        <div className="wrap">
          <div className="section-left">
            <div className="amount">
              <p>
                {props.dealType === 0
                  ? '매매'
                  : props.dealType === 1
                  ? '전세'
                  : props.dealType === 2
                  ? '월세'
                  : ''}
              </p>
              <p>{numberToKorean(props.price.amount)}</p>
              {props.price.rent ? (
                <p>/ {numberToKorean(props.price.rent)}</p>
              ) : null}
            </div>
            <div className="address">
              <p>{props.address.full}</p>
            </div>
          </div>
          <div className="section-right">
            <p className="name">공급/전용면적</p>
            <p className="value">
              {props.property.publicArea} ㎡ / {props.property.area} ㎡
            </p>
            <p className="name">해당층/최상층</p>
            <p className="value">
              {props.property.crtFloor} 층 / {props.property.topFloor} 층
            </p>
          </div>
          <div className="section-footer">
            <Chip
              label="다세대"
              color="var(--gray-600)"
              bgColor="var(--gray-200)"
            />
            <Chip
              label="빌라"
              color="var(--gray-600)"
              bgColor="var(--gray-200)"
            />
            <Chip
              label="방 2개"
              color="var(--gray-600)"
              bgColor="var(--gray-200)"
            />
            <Chip
              label="욕실 1개"
              color="var(--gray-600)"
              bgColor="var(--gray-200)"
            />
          </div>
        </div>
      </div> */}
    </StyledHousing>
  );
}

// styled
const StyledHousing = styled.div``;
