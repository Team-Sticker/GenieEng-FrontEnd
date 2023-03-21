import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export default function Title() {
  return (
    <Container>
      <h1>지니갤러리📷</h1>
      <Warning>
        <p>
          본 게시판에 업로드되는 모든 미디어들을 무단으로 이용시 법적 처벌을
          받을 수 있습니다.
        </p>
      </Warning>
    </Container>
  );
}

const Container = styled.div`
  width: 800px;
  margin-top: 80px;
  gap: 38px;

  & > h1 {
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 600;
  }
`;

const Warning = styled.div`
  width: 100%;
  height: 56px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-left: 5px solid ${theme.mainMintColor};
  background-color: ${theme.softGrayColor};

  & > p {
    font-size: 12px;
    font-weight: 400;
  }
`;
