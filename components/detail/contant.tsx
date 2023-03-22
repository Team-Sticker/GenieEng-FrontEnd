import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { item } from '../../docs/detail/postData';
import Pagination from './pagination';

export default function Contant() {
  return (
    <Container>
      <Wrapper>
        <Text>{item.contant}</Text>
      </Wrapper>
      <Pagination />
    </Container>
  );
}

const Container = styled.div``;

const Wrapper = styled.div`
  width: 800px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${theme.lightGrayColor};
`;

const Text = styled.p`
  margin-top: 30px;
  font-size: 18px;
  line-height: 30px;
`;
