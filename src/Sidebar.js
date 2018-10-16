/**
 *
 * Sidebar
 *
 */
import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LIGHT_GRAY, DARK_GRAY } from './utils/colors';
import { Link } from 'react-router-dom';

// Styles
const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  width: ${(props) => props.width}px;
  height:100%;
  background:${LIGHT_GRAY};
  overflow: hidden;
`;

const ItemWrapper = styled(Link)`
  height: 40px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  text-decoration: none;
  color: black;
  ${(props) => props.selected && `background-color: ${DARK_GRAY};`};
`;

const Item = styled.div`
  height: 100%;
  border-top: 1px solid ${DARK_GRAY};
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
`;

const Icon = styled.div`
  height: 70%;
  margin-right: 15px;
`;

const Label = styled.span`
  font-size: 16px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const context = createContext({
  currentPath: "/"
});

const { Provider, Consumer } = context;

/*eslint-disable */
class Entry extends Component {
  render() {
    const { pathname, icon, label } = this.props;
    return (
      <Consumer>
        {({ currentPath }) => (
          <ItemWrapper
            to={pathname}
            selected={pathname.split("/")[1] === currentPath.split("/")[1]}
          >
            <Item>
              <Icon>{icon}</Icon>
              <Label>{label}</Label>
            </Item>
          </ItemWrapper>
        )}
      </Consumer>
    );
  }
}

Entry.propTypes = {
  pathname: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string
};

class Sidebar extends Component {
  static Entry = Entry;

  render() {
    const { location, width } = this.props;
    const pathname = location.pathname;
    return (
      <Provider
        value={{
          currentPath: pathname
        }}
      >
        <Wrapper width={width}>{this.props.children}</Wrapper>
      </Provider>
    );
  }
}

Sidebar.propTypes = {
  children: PropTypes.array,
  location: PropTypes.object,
  userData: PropTypes.object,
  width: PropTypes.number
};

Sidebar.defaultProps = {
  width: 200
};

export default Sidebar;
/*eslint-enable */
