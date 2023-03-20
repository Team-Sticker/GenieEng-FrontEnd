import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export default function Banner() {
  return (
    <Container>
      <TextBox>
        <Page>#지니영어 공지사항</Page>
        <Title>
          수업 공지사항을 <br />
          실시간으로 확인해보세요
        </Title>
        <Text>지니영어의 수업 공지사항을 실시간으로 확인보세요</Text>
      </TextBox>
      <Image src="/img/notice/banner.png"></Image>
    </Container>
  );
}

const Container = styled.div`
  width: 800px;
  height: 320px;
  margin-top: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.mainBlueColor};
`;

const TextBox = styled.div`
  margin-left: 80px;
  color: ${theme.whiteColor};
`;

const Page = styled.p`
  font-size: 12px;
`;

const Title = styled.h1`
  margin: 14px 0 12px 0;
  font-size: 20px;
  line-height: 44px;
`;

const Text = styled.p`
  font-size: 10px;
`;

const Image = styled.img`
  width: 200px;
  margin-right: 80px;
`;
