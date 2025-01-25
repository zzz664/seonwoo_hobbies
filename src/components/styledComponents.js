import styled from 'styled-components';

export const contentDiv = styled.div`
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
`;

export const sectionDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  background-color: ${(props) => props.background || 'white'};
`;

export const screenDivider = styled.div`
  width: 100%;
  height: 5px;
  background-color: grey;
`;
