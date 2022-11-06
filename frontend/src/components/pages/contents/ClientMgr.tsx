import styled from 'styled-components';

interface ClientMgrProps {}

export function ClientMgr(props: ClientMgrProps) {
  return <StyledClientMgr></StyledClientMgr>;
}

// styled
const StyledClientMgr = styled.div`
  .chip-group {
    display: flex;
    margin-bottom: 10px;

    & > div + div {
      margin-left: 10px;
    }
  }
`;
