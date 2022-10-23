import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { PropertyMgr } from 'components/pages/contents/PropertyMgr';
import { ClientMgr } from 'components/pages/contents/ClientMgr';
import { Navigation, ContentHeader } from 'components/organisms';
import { AnimatePresence } from 'framer-motion';

export function Manager() {
  return (
    <StyledManager className="manager">
      <BrowserRouter>
        <Navigation />
        <div className="container">
          <ContentHeader />
          <div className="content">
            <AnimatePresence>
              <Routes>
                <Route path="/" element={<PropertyMgr />} />
                <Route path="/property" element={<PropertyMgr />} />
                <Route path="/client" element={<ClientMgr />} />
              </Routes>
            </AnimatePresence>
          </div>
        </div>
      </BrowserRouter>
    </StyledManager>
  );
}

// styled
const StyledManager = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  .container {
    position: fixed;
    left: 21rem;
    height: 100%;
    width: 100%;
    max-width: calc(100% - 21rem);
    transition: all var(--ease-in-out-35);

    & > .content {
      max-height: calc(100% - 6rem);
      height: 100vh;
      padding: 2em;
    }
  }

  .minimize + .container {
    left: 5.5rem;
    max-width: calc(100% - 5.5rem);
  }
`;
