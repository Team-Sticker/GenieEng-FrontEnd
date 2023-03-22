import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { item } from '../../docs/notice/postData';

// interface props {
//   page: number;
//   updatePageValue: (newPageNum: number) => void;
// }

export default function Pagination({ page, updatePageValue }: props) {
  // const numPages = Math.ceil(item.length / 10);

  // const onMoveFront = () => {
  //   updatePageValue(page + 1);
  // };

  // const onMoveBack = () => {
  //   updatePageValue(page - 1);
  // };
  return (
    <Container>
      <Button /*onClick={onMoveBack} disabled={page === 1}*/>
        <LeftImage src="/img/notice/arrow.png" />
        이전
      </Button>

      <Button /*onClick={onMoveFront} disabled={page === numPages}*/>
        다음
        <RightImage src="/img/notice/arrow.png" />
      </Button>
    </Container>
  );
}

const Container = styled.div`
  gap: 180px;
  margin: 50px 0 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 64px;
  height: 30px;
  gap: 8px;
  border: 1px solid ${theme.mainMintColor};
  border-radius: 20px;
  color: ${theme.blackColor};
  background-color: ${theme.whiteColor};
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 12px;
`;

const LeftImage = styled(Image)``;

const RightImage = styled(Image)`
  transform: rotate(180deg);
`;
