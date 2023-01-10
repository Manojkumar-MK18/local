import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 100%;
  @media (max-width: 415px) {
    width: 98%;
  }
`;

export default PageWrapper;
