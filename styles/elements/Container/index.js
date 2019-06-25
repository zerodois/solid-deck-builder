import styled from 'styled-components';
import colors from '../../colors';

const Container = styled.main``;

const Center = styled(Container)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const App = styled(Container)`
  height: 100%;
  flex-direction: column;
  display: flex;
  background-color: ${colors.banner};
`;

export default {
  App,
  Center,
};
