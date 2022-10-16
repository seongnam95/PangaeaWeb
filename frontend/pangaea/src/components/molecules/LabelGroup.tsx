import { StateLabel } from 'components/atoms/StateLabel';
import styled from 'styled-components';

interface LabelGroupProps {
  labels: string[];
}

export function LabelGroup(props: LabelGroupProps) {
  return (
    <StyledLabelGroup>
      {props.labels.map((value, idx) => (
        <StateLabel key={idx} label={value} />
      ))}
    </StyledLabelGroup>
  );
}

// styled
const StyledLabelGroup = styled.div``;
