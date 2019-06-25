import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { colors, fonts } from '../../theme';
import { prop } from '../../../utils';

const ButtonBlock = css`
  background-color: ${prop('color', colors.dark.color)};
  color: ${colors.dark.text};
  border: thin solid ${colors.dark.text};
  font-family: ${fonts.main};
  font-size: 1rem;
`;

const desloc = 0.5;
const Container = styled.div`
  ${ButtonBlock}
  position: relative;
  padding-bottom: ${desloc}rem;
  padding-right: ${desloc}rem;
`;

const Button = styled.button`
  ${ButtonBlock}
  margin-top: -${desloc}rem;
  margin-left: -${desloc}rem;
  padding: 1rem 2rem;
  outline: none;
  cursor: pointer;
`;

const Factory = ({ children, ...props }) => (
  <Container {...props}>
    <Button {...props}>
      {children}
    </Button>
  </Container>
);

Factory.propTypes = {
  children: PropTypes.node,
};

Factory.defaultProps = {
  children: null,
};

export default Factory;
