import styled from '@emotion/styled';
import { useState } from 'react';
import { theme } from '../../styles/theme';
import { item } from '../../docs/notice/postData';
import Pagination from './pagination';

export default function Post() {
  const [page, setPage] = useState(1); // 현재 페이지 번호
  const offSet = (page - 1) * 10; //첫 게시물 위치
  const lastSet = item[item.length - 1];

  const updatePageValue = (newPageNum: number) => {
    setPage(newPageNum);
  };

  return (
    <>
      <Container>
        <TitleBox>
          <Title>제목</Title>
          <Person>등록자</Person>
          <Date>날짜</Date>
        </TitleBox>
        {item.slice(offSet, offSet + 10).map((arr, i) => (
          <ItemBox key={i}>
            <PostTitle>{arr.title}</PostTitle>
            <Person>{arr.user}</Person>
            <Date>{arr.date}</Date>
          </ItemBox>
        ))}
      </Container>
      <Pagination page={page} updatePageValue={updatePageValue} />
    </>
  );
}
const Container = styled.div`
  width: 80%;
  height: 946px;
  margin-top: 70px;
  border-radius: 8px;
  border: 1px solid ${theme.thinGrayColor};
`;

const TextBox = styled.div`
  width: 100%;
  height: 86px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleBox = styled(TextBox)`
  color: ${theme.mainMintColor};
  border-bottom: 1px solid ${theme.thinGrayColor};
  border-radius: 8px 8px 0 0;
  font-weight: 700;
`;

const ItemBox = styled(TextBox)`
  color: ${theme.blackColor};
  border-bottom: 1px solid ${theme.thinGrayColor};
  &:last-child {
    border-radius: 0 0 8px 8px;
    border-bottom: 1px solid ${theme.thinGrayColor};
  }
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled(Text)`
  width: 60%;
`;

const PostTitle = styled.p`
  width: 60%;
  padding-left: 4%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Person = styled(Text)`
  width: 20%;
`;

const Date = styled(Text)`
  width: 20%;
`;
