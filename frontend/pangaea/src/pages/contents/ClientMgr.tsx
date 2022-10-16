import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ClientMgrProps {}

export function ClientMgr(props: ClientMgrProps) {
  return (
    <StyledClientMgr>
      <motion.div
        className="clientPage"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.2 }}
      >
        Clients Manager
      </motion.div>
    </StyledClientMgr>
  );
}

// styled
const StyledClientMgr = styled.div``;
