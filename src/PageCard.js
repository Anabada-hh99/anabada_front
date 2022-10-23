import React from "react";
import styled from "styled-components";
export const Cardbox = () => {
  return (
    <CardBox>
      <div>
        <St_img>
          <img src="https://cdn.pixabay.com/photo/2022/10/07/09/06/bridge-7504605__340.jpg" />
        </St_img>
        <St_text>
          <h2
            style={{
              display: "block",
              "text-decoration": "none",
              color: "#333",
              "text-overflow": "ellipsis",
              "white-space": "nowrap",
              overflow: "hidden",
            }}
          >
            A380B 산악자전거 rkrkrkasdasd
          </h2>
          <h3>120000원</h3>
          <p>조회수 200</p>
        </St_text>
      </div>
    </CardBox>
  );
};
export default Cardbox;

const St_img = styled.div`
  width: 260px;
  height: 260px;
  margin-top: 10px;
  align-items: center;
  object-fit: cover;
  overflow: hidden;
`;

const CardBox = styled.div`
  display: flex;
  word-wrap: normal;
  width: 260px;
  height: 260px;
`;

const St_text = styled.div`
  width: 264px;
  overflow: hidden;
  white-space: nowrap;
`;
