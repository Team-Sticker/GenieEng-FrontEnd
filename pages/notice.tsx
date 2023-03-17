import styled from '@emotion/styled';
import Header from '../components/common/header';
import Banner from '../components/notice/banner';
import Post from '../components/notice/post';
import Title from '../components/notice/title';

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
`;
