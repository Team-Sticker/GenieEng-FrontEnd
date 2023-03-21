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
  width: 800px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 63px 0 63px 60px;
  border-radius: 8px;
  background-image: url('/img/main/banner.png');
`;

const TextBox = styled.div`
  color: ${theme.whiteColor};
`;

const Page = styled.p`
  font-size: 12px;
`;

const Title = styled.h1`
  margin: 10px 0 8px 0;
  font-size: 20px;
  line-height: 28px;
`;

const Text = styled.p`
  font-size: 10px;
`;

const Button = styled.button`
  width: 108px;
  height: 30px;
  margin-top: 30px;
  border: none;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 600;
  color: ${theme.mainBlueColor};
  background-color: ${theme.whiteColor};
`;
