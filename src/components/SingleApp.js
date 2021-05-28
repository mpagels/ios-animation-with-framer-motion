import styled from "styled-components/macro";

export default function SingleApp({ src, name }) {
  return (
    <Wrapper>
      <img src={src} alt={`${name}-logo`} />
      <AppName>{name}</AppName>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 0.8em; ;
`;

const AppName = styled.p`
  margin: 5px 0;
`;
