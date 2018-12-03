import styled from "styled-components";
import { elevation, transition, colors } from "Utilities";

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  color: ${colors.grey};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  ${elevation[4]};
  ${transition({})};
  &:hover {
    ${elevation[5]};
  }
`;
