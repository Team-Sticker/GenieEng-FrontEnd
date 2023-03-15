import styled from '@emotion/styled';
import Header from '../components/common/header';
import Banner from '../components/main/banner';
import Intro from '../components/main/intro';
import PostList from '../components/main/postList';
import Route from '../components/main/route';

export default function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <Intro />
      <RouteBox>
        <Route />
        <PostList />
      </RouteBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const RouteBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
