import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export default function Banner() {
  return (
    <Container>
      <Wrapper>
        <TextBox>
          <Page>#지니영어 메인페이지</Page>
          <Title>
            보다 좋은
            <br /> 영어 실력을 향한 도전,
            <br /> 지니영어 입니다
          </Title>
          <Text>더나은 영어 실력을 향한 지름길, 지니영어와 함께하세요</Text>
        </TextBox>
        <Button>자세히보기</Button>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 420px;
  border-radius: 8px;
  background-image: url('/img/main/banner.png');
`;

const TextBox = styled.div`
  margin: 76px 0 0 80px;
  color: ${theme.whiteColor};
`;

const Page = styled.p`
  font-size: 16px;
`;

const Title = styled.h1`
  margin: 14px 0 12px 0;
  font-size: 28px;
  line-height: 44px;
`;

const Text = styled.p`
  font-size: 14px;
`;

const Button = styled.button`
  width: 140px;
  height: 40px;
  margin: 46px 0 0 80px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  color: ${theme.mainBlueColor};
  background-color: ${theme.whiteColor};
`;
