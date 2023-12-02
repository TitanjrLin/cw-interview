import styled from 'styled-components';

export const Wrapper = styled.div`
  &:first-child {
    margin-top: -19%;
  }

  &:last-child {
    margin-top: 25%;
  }
`;

export const TipImage = styled.img`
  margin: auto;
  display: block;
`;

export const TipTitle = styled.label`
  margin-top: 1rem;
  display: block;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.4;
  color: #EC6C00;
  letter-spacing: 0.0875rem;
`;

export const TipContent = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.6;
  color: #333333;
  letter-spacing: 0.1rem;
`;
