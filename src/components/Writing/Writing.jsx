import React, { useRef } from "react";

import {
  ImgUpload,
  PlusButton,
  ProductTitle,
  TitleInput,
  ProductPrice,
  PriceInput,
  ProductDesc,
  DescInput,
  ProductUpload,
  Column,
  UploadButton,
} from "./WritingStyle";

import { useState } from "react";
import { __addmembersPostThunk } from "../../redux/modules/membersPost";
import { useDispatch } from "react-redux";
function Writing() {
  //이미지 미리보기부분
  const [imageSrc, setImageSrc] = useState("");
  const [memberPost, setMemberpost] = useState();
  //이것은 비동기함수 메모
  //FileReader 는 File 혹은 Blob 객체를 이용하여, 파일의 내용을 읽을 수 있게 해주는 Web API 이다.
  //Input 태그로 FileList 를 얻어 FileReader.readAsDataURL() 으로 Base64 데이터로 변환하고 이를 atob 로 데이터 변환 가능하다.
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);

        resolve();
      };
    });
  };
  const dispatch = useDispatch();
  const formData = new FormData();

  const onSubmitHandler = (memberPost) => {
    dispatch(__addmembersPostThunk(memberPost));
  };
  console.log(memberPost);
  return (
    <form
      onSubmit={() => {
        onSubmitHandler(memberPost);
      }}
    >
      <ProductUpload>
        <ImgUpload className="preview">
          <input
            type="file"
            onChange={(e) => {
              encodeFileToBase64(e.target.files[0]);
              formData.append("file", e.target.files[0]);

              setMemberpost({
                ...imageSrc,
                imageUrl: e.target.files[0],
              });
            }}
          />

          {imageSrc && <img src={imageSrc} alt="preview-img" />}
        </ImgUpload>
        <Column>
          <ProductTitle>
            제목<div style={{ color: "#FF3D00" }}>*</div>
            <TitleInput
              type="text"
              placeholder="상품 제목을 입력하세요."
              onChange={(ev) => {
                const { value } = ev.target;
                setMemberpost({
                  ...memberPost,
                  title: value,
                });
              }}
            />
          </ProductTitle>
          {/* 가격 입력 부분 */}

          <ProductPrice>
            가격<div style={{ color: "#FF3D00" }}>*</div>
            <PriceInput
              type="text"
              placeholder="숫자만 입력해 주세요."
              onChange={(ev) => {
                const { value } = ev.target;
                setMemberpost({
                  ...memberPost,
                  price: value,
                });
              }}
            />
          </ProductPrice>
          {/* 설명 입력 부분 */}

          <ProductDesc>
            설명<div style={{ color: "#FF3D00" }}>*</div>
            <DescInput
              type="text"
              placeholder="구매자에게 필요한 정보를 꼭 포함해 주세요."
              onChange={(ev) => {
                const { value } = ev.target;
                setMemberpost({
                  ...memberPost,
                  content: value,
                });
              }}
            />
          </ProductDesc>
          <UploadButton>등록하기</UploadButton>
        </Column>
      </ProductUpload>
    </form>
  );
}

export default Writing;

// import axios from "axios";
// import React, { useState } from "react";

// export const Writing = () => {
//   const [files, setFiles] = useState("");

//   const onLoadFile = (e) => {
//     const file = e.target.files;
//     console.log(file);
//     setFiles(file);
//   };

//   const handleClick = (e) => {
//     const formdata = new FormData();
//     formdata.append("uploadImage", files[0]);

//     const config = {
//       Headers: {
//         "content-type": "multipart/form-data",
//       },
//     };

//     axios.post(`http://localhost:3001/memberPosts`, formdata, config);
//   };

//   return (
//     <form>
//       <input type="file" id="image" accept="img/*" onChange={onLoadFile} />
//       <button onClick={handleClick}>추가</button>
//     </form>
//   );
// };

// export default Writing;
