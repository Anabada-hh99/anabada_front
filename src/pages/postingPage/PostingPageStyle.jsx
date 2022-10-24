import styled from 'styled-components';

export const ImgBox = styled.div`
  width: 670px;
  height: 670px;
  background: #b4b4b4;
  position: relative;

  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const SampleImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ImgLabel = styled.label`
  position: absolute;
  font-size: var(--font-large);
  color: var(--color-light-white);
  cursor: pointer;
`;

export const ProductTitle = styled.div`
  font-size: 25px;
  line-height: 45px;
  display: flex;
`;

export const TitleInput = styled.input`
  border-radius: 5px;
  width: 350px;
  height: 60px;
  padding: 15px;
  margin-left: 15px;
  border: none;
  background: #b4b4b4;
  font-family: 'Gowun Dodum', sans-serif;
  font-size: var(--font-regular);
  border: none;
  outline: none;
`;
export const ProductCategory = styled.div`
  font-size: 25px;
  line-height: 45px;
  display: flex;
  margin-top: 30px;
`;
export const CategorySelect = styled.select`
  border-radius: 5px;
  width: 350px;
  height: 60px;
  padding: 15px;
  margin-left: 15px;
  border: none;
  background: #b4b4b4;
  font-family: 'Gowun Dodum', sans-serif;
  font-size: var(--font-regular);
  border: none;
  outline: none;
`;
export const ProductPrice = styled.div`
  font-size: 25px;
  line-height: 45px;
  display: flex;
  margin-top: 30px;
`;

export const PriceInput = styled.input`
  border-radius: 5px;
  width: 350px;
  height: 60px;
  padding: 15px;
  margin-left: 15px;
  border: none;
  background: #b4b4b4;
  font-family: 'Gowun Dodum', sans-serif;
  font-size: var(--font-regular);
  border: none;
  outline: none;
`;

export const ProductDesc = styled.div`
  font-size: 25px;
  line-height: 45px;
  display: flex;
  margin-top: 30px;
`;

export const DescInput = styled.textarea`
  border-radius: 5px;
  width: 350px;
  height: 249px;
  padding: 15px;
  margin-left: 15px;
  border: none;
  background: #b4b4b4;
  font-family: 'Gowun Dodum', sans-serif;
  font-size: var(--font-regular);
  border: none;
  outline: none;
  resize: none;
`;

export const ProductUpload = styled.form`
  display: flex;
  margin-top: 100px;
  font-family: 'Gowun Dodum', sans-serif;
`;

export const Column = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`;

export const UploadButton = styled.button`
  border-radius: 5px;
  width: 350px;
  height: 100px;
  margin-top: 50px;
  margin-left: 70px;
  font-size: 30px;
  font-weight: 600;
  color: white;
  background: rgb(153, 153, 153);
  font-family: 'Gowun Dodum', sans-serif;
  &:hover {
    background-color: #d6bdbd;
    color: black;
  }
`;
