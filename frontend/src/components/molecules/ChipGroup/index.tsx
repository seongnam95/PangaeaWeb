import styled from 'styled-components';

import { Chip, ChipProps } from 'components/atoms/Chip';

export function ChipGroup(props: ChipProps[]) {
  return (
    <StyledChipGroup>
      {props.map((chip, idx) => (
        <Chip key={idx} {...chip} />
      ))}
    </StyledChipGroup>
  );
}

// styled
const StyledChipGroup = styled.div`
  display: flex;
  gap: 5px;
`;
