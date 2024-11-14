import styled, { keyframes } from 'styled-components';
import { slideInUp} from 'react-animations';

const slideUp = keyframes`${slideInUp}`;

export const SliderAnimation = styled.div`
  animation: 0.5s ${slideUp};
`;