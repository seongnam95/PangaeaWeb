import {
  PropertyItem,
  PropertyItemProps,
} from 'components/UI/molecules/PropertyItem';
import styled from 'styled-components';

interface PropertyMgrProps {}

export function PropertyMgr(props: PropertyMgrProps) {
  const propertyValue: PropertyItemProps = {
    value: {
      imgUrl: 'http',
      situation: ['string'],
      address: {
        siNm: '서울특별시',
        sggNm: '중랑구',
        emdNm: '면목동',
        bun: '90',
        ji: '27',
        dong: '1동',
        ho: '702호',
        layer: '7층',
        detail: '상세',
      },
      dealType: '매매',
      price: {
        amount: 32500,
        rent: 30,
        adminCost: 70000,
        loan: 15000,
      },
      property: {
        kind: 1,
        area: 35.6,
      },
      // 매물지
      master: {
        name: '서수연',
        business: '하울공인중개사사무소',
        businessCode: '11260',
      },
    },
  };
  const propertyValueList = [propertyValue, propertyValue, propertyValue];

  const handleOnClick = (v: PropertyItemProps) => {
    console.log(v.value);
  };

  return (
    <StyledPropertyMgr>
      <ul>
        {propertyValueList.map((v, idx) => (
          <PropertyItem key={idx} value={v.value} onClick={handleOnClick} />
        ))}
      </ul>
    </StyledPropertyMgr>
  );
}
//<PropertyItem value={v} />
// styled
const StyledPropertyMgr = styled.div``;
