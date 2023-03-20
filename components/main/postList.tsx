import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export default function PostList() {
  const item = [
    {
      title: '지니영어 교습소 이전 안내',
      date: '2022.12.15',
    },
    {
      title: '뿌이준수 교습소 이전 안내',
      date: '2022.12.15',
    },
    {
      title: '지니영어 교습소 이전 안내',
      date: '2022.12.15',
    },
    {
      title: '뿌이준수 교습소 이전 안내',
      date: '2022.12.15',
    },
  ];
  return (
    <Container>
      <Wrapper>
        <Notify>
          <Title>공지사항</Title>
          <Frame>
            {item.map((arr, i) => (
              <Items key={i}>
                <TextBox>
                  <h4>{arr.title}</h4>
                  <p>{arr.date}</p>
                </TextBox>
              </Items>
            ))}
          </Frame>
          <Route>공지사항 바로가기</Route>
        </Notify>
        <Gallery>
          <Title>지니갤러리</Title>
          <Frame>
            {item.map((arr, i) => (
              <Items key={i}>
                <TextBox>
                  <h4>{arr.title}</h4>
                  <p>{arr.date}</p>
                </TextBox>
              </Items>
            ))}
          </Frame>
          <Route>지니갤러리 바로가기</Route>
        </Gallery>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 170px;
  width: 800px;
  padding: 220px 0 100px 0;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.softGrayColor};
`;

const Wrapper = styled.div`
  width: 94%;
  height: 156px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Notify = styled.div``;

const Gallery = styled.div``;

const Title = styled.button`
  padding: 4px 16px;
  border: solid 1px ${theme.mainBlueColor};
  border-radius: 20px;
  outline: none;
  font-size: 12px;
  font-weight: 600;
  color: ${theme.mainBlueColor};
  background-color: ${theme.softGrayColor};
`;

const Frame = styled.div`
  margin-top: 20px;
`;

const Items = styled.div`
  width: 350px;
  &:last-child {
    border-bottom: 1px solid ${theme.lightGrayColor};
  }
`;

const TextBox = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${theme.lightGrayColor};
  & > h4 {
    font-size: 10px;
  }
  & > p {
    font-size: 10px;
    color: ${theme.thinGrayColor};
  }
`;

const Route = styled.p`
  margin-top: 12px;
  text-align: end;
  font-size: 10px;
  color: ${theme.blackColor};
  text-decoration: underline;
`;
