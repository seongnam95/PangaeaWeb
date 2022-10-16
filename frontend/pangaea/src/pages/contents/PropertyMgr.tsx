import {
  PropertyItem,
  PropertyItemProps,
} from 'components/molecules/PropertyItem';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface PropertyMgrProps {}

export function PropertyMgr(props: PropertyMgrProps) {
  const propertyValue: PropertyItemProps = {
    value: {
      imgUrl: 'http',
      situation: ['공유중', '광고중'],
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
    <motion.div
      className="propertyPage"
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.2 }}
    >
      <StyledPropertyMgr>
        {propertyValueList.map((v, idx) => (
          <PropertyItem key={idx} value={v.value} onClick={handleOnClick} />
        ))}
      </StyledPropertyMgr>
    </motion.div>
  );
}
//<PropertyItem value={v} />
// styled
const StyledPropertyMgr = styled.ul``;
