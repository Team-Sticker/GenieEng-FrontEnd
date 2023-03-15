import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export default function Intro() {
  return (
    <Container>
      <Wrapper>
        <TextBox>
          <Image src="img/main/logo.png" />
          <TitleBox>
            <Strong>초/중/고</Strong>
            <Title>
              학생들과
              <br />
              지니영어가 함께합니다
            </Title>
          </TitleBox>
          <Text>
            지니영어만의 특별한 영어 수업과 함께해보세요
            <br />
            영어가 들리고 말문이 트이는 영어수업을 경험하세요
          </Text>
        </TextBox>

        <Deco>
          <Back></Back>
          <Front></Front>
        </Deco>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 80%;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const TextBox = styled.div``;

const Image = styled.img`
  width: 96px;
`;

const TitleBox = styled.div`
  margin: 18px 0 20px 0;
`;

const Strong = styled.span`
  margin-right: 8px;
  font-size: 32px;
  font-weight: 600;
  color: ${theme.mainBlueColor};
`;

const Title = styled.span`
  font-size: 32px;
  color: ${theme.blackColor};
`;

const Text = styled.div`
  font-size: 16px;
`;

const Deco = styled.div`
  position: relative;
  width: 450px;
  height: 560px;
`;

const Back = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 270px;
  height: 330px;
  border-radius: 8px;
  background-color: ${theme.mainBlueColor};
`;

const Front = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 350px;
  height: 450px;
  border-radius: 8px;
  background-image: url('/img/main/deco.png');
`;
