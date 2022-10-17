import { Chip } from 'components/atoms/Chip';
import styled from 'styled-components';

interface LabelGroupProps {
  labels: string[];
}

export function LabelGroup(props: LabelGroupProps) {
  return (
    <StyledLabelGroup>
      {props.labels.map((value, idx) => (
        <Chip key={idx} label={value} />
      ))}
    </StyledLabelGroup>
  );
}

// styled
const StyledLabelGroup = styled.div``;
