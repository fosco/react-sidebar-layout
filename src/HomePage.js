import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import WelcomePage from './WelcomePage';
import AboutPage from './AboutPage';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const PageContent = styled.div`
  flex: 1;
  height: 100%;
  padding: 2%;
`;

const HomePage = props => (
  <Wrapper>
    <Sidebar location={props.location} width={200}>
      <Sidebar.Entry pathname={'/'} icon={<HomeIcon />} label={'Welcome'} />
      <Sidebar.Entry pathname={'/about'} icon={<InfoIcon />} label={'About'} />
    </Sidebar>
    <PageContent>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/about' component={AboutPage} />
    </PageContent>
  </Wrapper>
);

export default withRouter(HomePage);
