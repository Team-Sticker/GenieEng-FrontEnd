import styled from '@emotion/styled';
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import Contant from '../components/detail/contant';
import Title from '../components/detail/title';

export default function Home() {
  return (
    <Container>
      <Header />
      <Title />
      <Contant />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
