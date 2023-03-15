import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export default function Route() {
  const item = [
    {
      title: '오시는 길',
      text: '지니영어로 오시는 길을 확인할수 있습니다.',
      route: '',
      img: '/img/main/map.svg',
    },
    {
      title: '공지사항 안내',
      text: '학원 공지 사항을 확인할\n수 있습니다.',
      route: '',
      img: '/img/main/mike.svg',
    },
  ];
  return (
    <Container>
      <Wrapper>
        <Frame>
          {item.map((items, i) => (
            <Cover key={i}>
              <Div>
                <Title>{items.title}</Title>
                <Text>{items.text}</Text>

                <Button>바로가기</Button>
              </Div>
              <Image src={items.img} />
            </Cover>
          ))}
        </Frame>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
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
  align-items: center;
  justify-content: center;
`;

const Frame = styled.div`
  width: 60%;
  height: 200px;
  border-radius: 8px;
  border: 0.5px solid ${theme.lightGrayColor};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.whiteColor};

  & > div {
    &:first-child {
      padding-right: 62px;
      border-right: 1px solid ${theme.lightGrayColor};
    }
    &:last-child {
      padding-left: 62px;
    }
  }
`;

const Cover = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Div = styled.div`
  height: 136px;
  width: 300px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: ${theme.blackColor};
`;

const Text = styled.p`
  font-size: 12px;
  color: ${theme.thinGrayColor};
  white-space: pre-wrap;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 15px;
  border: 1px solid ${theme.thinGrayColor};
  color: ${theme.thinGrayColor};
  background-color: ${theme.whiteColor};
  transition: all 0.3s;
  &:hover {
    color: ${theme.whiteColor};
    background-color: ${theme.mainBlueColor};
  }
`;

const Image = styled.img`
  height: 70px;
  margin-left: 50px;
`;
