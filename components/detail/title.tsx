import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { item } from '../../docs/detail/postData';

export default function Title() {
  return (
    <Container>
      <PostTitle>{item.title}</PostTitle>
      <ItemBox>
        <Name>{item.user}</Name>
        <Date>{item.date}</Date>
      </ItemBox>
    </Container>
  );
}

const Container = styled.div`
  width: 800px;
  margin-top: 40px;
  border-bottom: 1px solid ${theme.lightGrayColor};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const PostTitle = styled.h1`
  font-size: 34px;
`;

const ItemBox = styled.div`
  gap: 12px;
  margin: 24px 0 18px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  & > p {
    font-size: 18px;
  }
`;

const Name = styled.p`
  font-weight: 500;
  color: ${theme.blackColor};
`;

const Date = styled.p`
  color: ${theme.thinGrayColor};
`;
