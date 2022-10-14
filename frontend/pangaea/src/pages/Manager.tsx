import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { PropertyMgr, ClientMgr } from 'pages/contents';
import { SideNavigation, ContentHeader } from 'components/UI/organisms';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export function Manager() {
  return (
    <StyledManager>
      <BrowserRouter>
        <SideNavigation />
        <div className="container">
          <ContentHeader />
          <div className="content">
            <Routes>
              <Route path="/" element={<PropertyMgr />} />
              <Route path="/property" element={<PropertyMgr />} />
              <Route path="/client" element={<ClientMgr />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </StyledManager>
  );
}

// styled
const StyledManager = styled.div`
  width: 100%;

  .container {
    position: relative;
    transition: left var(--ease-in-out-35);
    left: 21rem;
  }

  .minimize + .container {
    left: 5.5rem;
  }

  .content {
    padding: 1em;
  }
`;
