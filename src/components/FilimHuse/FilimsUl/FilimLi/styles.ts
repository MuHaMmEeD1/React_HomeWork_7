import styled from "styled-components";

export const FilimLiCom = styled.li`
  padding: 15px;
  width: 190px;
  img {
    height: 280px;
    width: 190px;
  }

  :nth-child(2) {
    display: flex;

    button {
      width: 50px;
      font-size: 10px;
      position: relative;
      top: 0px;
      border: black solid 1px;
      right: 10px;
    }

    p {
      text-align: end;
    }
    div {
      display: flex;
      flex-direction: column;
      p {
        width: 150px;
        text-align: start;
      }

      :nth-child(2) {
        position: relative;
        bottom: 10px;
      }
    }
  }
`;
