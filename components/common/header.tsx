import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Frame>
          <Image src="/img/header/logo.png" alt="" />
          <TextBox>
            <Text>오시는 길</Text>
            <Text>지니갤러리</Text>
            <Text>공지사항</Text>
          </TextBox>
        </Frame>
        <Button>문의사항</Button>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

const Wrapper = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Frame = styled.div`
  gap: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Image = styled.img`
  width: 120px;
`;
const TextBox = styled.div`
  gap: 38px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
`;
const Button = styled.button`
  width: 120px;
  height: 38px;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  color: ${theme.whiteColor};
  background-color: ${theme.mainBlueColor};
`;
