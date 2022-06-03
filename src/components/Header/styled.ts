import styled from 'styled-components';

export const HeaderWrapper = styled.aside`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
`;

export const HeaderContent = styled.aside`
  background-color: transparent;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const HeaderTitle = styled.aside`
  background-color: transparent;
  color: var(--title-color);
  font-size: 3rem;
  font-weight: medium;
  display: flex;
  flex-direction: column;
`;

export const LineBottom = styled.hr`
  background-color: #52525B;
  width: 100%;
  margin-top:2rem;
`;

export const ToggleCollorMode = styled.aside`
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--title-color);
`
