import styled from 'styled-components';
import img from '../../../assets/diary.jpg';

const StyledShowcase = styled.div`
  width: 100vw;
  height: calc(100vh - 76px);
  background: url(${img}) no-repeat center center/cover;
  padding-top: 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  & h1 {
    font-size: 70px;
    padding-left: 90px;
    margin-top: 9px;
    margin-bottom: 0;
  }
  & h2 {
    font-size: 25px;
    padding-left: 80px;
    margin-bottom: 250px;
  }
`;

export { StyledShowcase };
