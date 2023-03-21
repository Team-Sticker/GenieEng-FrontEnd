import styled from '@emotion/styled';
import Header from '../components/common/header';
import Banner from '../components/gallery/banner';
import Post from '../components/gallery/post';
import Title from '../components/gallery/title';
import { theme } from '../styles/theme';

export default function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <Title />
      <Post />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${theme.blackColor};
`;
