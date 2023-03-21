import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <TextBox>
          <Logo src="/img/footer/logo.png" />
          <Title>지니영어 | 개인정보취급방침 | 이용약관</Title>
          <Text>
            (주)지니영어(genie english)|
            <br /> 대표자: 윤혜진 | <br />
            사업자번호: 574-99-00747 사업자 정보 확인 | <br />
            이메일: rkgodi7777@naver.com | <br />
            주소: 대전광역시 유성구 송강동 청솔아파트 513동 601호
          </Text>
        </TextBox>

        <RouteBox>
          <Link href="https://www.instagram.com/genie_english_/">
            <Image src="/img/footer/instagram.svg" />
          </Link>
          <Link href="https://m.blog.naver.com/genie_english_">
            <Image src="/img/footer/blog.svg" />
          </Link>
          <Link href="https://github.com/jiniEng">
            <Image src="/img/footer/github.svg" />
          </Link>
        </RouteBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.mainBlueColor};
  color: ${theme.whiteColor};
`;

const Wrapper = styled.div`
  width: 800px;
  border-bottom: 1px solid ${theme.whiteColor};
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const TextBox = styled.div``;

const Logo = styled.img`
  width: 90px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 12px;
`;

const Text = styled.div`
  margin: 26px 0 18px 0;
  font-size: 10px;
`;

const RouteBox = styled.div`
  gap: 8px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.whiteColor};
  cursor: pointer;
`;

const Image = styled.img`
  width: 38px;
  padding: 6px;
`;
