import styled, { keyframes , css} from 'styled-components';
import { slideInUp,slideOutDown} from 'react-animations';

const slideUp = keyframes`${slideInUp}`;
const slideDown = keyframes`${slideOutDown}`;

export const SliderAnimation = styled.div`
  ${({ showing }) => css`
  animation: 0.5s ${showing ? slideUp : slideDown};
  `}
`;