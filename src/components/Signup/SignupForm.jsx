import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import useMultipleInput from '../../hooks/useMultipleInput';
import Button from '../common/button/Button';
import * as SignupFormST from './SignupFormStyle';

export default function SignupForm(props) {
  const [isFail, setIsFail] = useState(false);
  const [failText, setFailText] = useState('');
  const [signupInfo, setSignupInfo, signupInfoHandler] = useMultipleInput({
    loginName: '',
    nickname: '',
    password: '',
    phoneNumber: '',
  });
  const [pwCheck, setPwCheck, pwCheckHandler] = useInput('');
  const { loginName, nickname, password, phoneNumber } = signupInfo;

  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (loginName === '') {
      setFailText('아이디를 입력해 주세요!');
      setIsFail(true);
      return;
    } else if (password === '') {
      setFailText('비밀번호를 입력해 주세요!');
      setIsFail(true);
      return;
    } else if (password !== pwCheck) {
      setFailText('비밀번호가 다릅니다!');
      setIsFail(true);
    } else if (nickname === '') {
      setFailText('닉네임을 입력해 주세요!');
      setIsFail(true);
    } else if (phoneNumber === '') {
      setFailText('전화번호를 입력해 주세요!');
      setIsFail(true);
    }
  };

  //console.log(signupInfo, pwCheck);
  return (
    <SignupFormST.Box>
      <form onSubmit={onSubmitHandler} autoComplete='off'>
        <SignupFormST.InputBox>
          <SignupFormST.InputSet>
            <SignupFormST.InputSpan>
              <i className='fa-solid fa-user-shield'></i>
            </SignupFormST.InputSpan>
            <SignupFormST.Input
              type='text'
              name='loginName'
              value={loginName}
              onChange={signupInfoHandler}
              placeholder='아이디'
            />
          </SignupFormST.InputSet>
          <SignupFormST.InputSet>
            <SignupFormST.InputSpan>
              <i className='fa-solid fa-key'></i>
            </SignupFormST.InputSpan>
            <SignupFormST.Input
              type='password'
              name='password'
              value={password}
              onChange={signupInfoHandler}
              placeholder='비밀번호'
            />
          </SignupFormST.InputSet>
          <SignupFormST.InputSet>
            <SignupFormST.InputSpan>
              <i className='fa-solid fa-check-double'></i>
            </SignupFormST.InputSpan>
            <SignupFormST.Input
              type='password'
              value={pwCheck}
              onChange={pwCheckHandler}
              placeholder='비밀번호 확인'
            />
          </SignupFormST.InputSet>
          <SignupFormST.InputSet>
            <SignupFormST.InputSpan>
              <i className='fa-solid fa-id-card-clip'></i>
            </SignupFormST.InputSpan>
            <SignupFormST.Input
              type='nickname'
              name='nickname'
              value={nickname}
              onChange={signupInfoHandler}
              placeholder='닉네임'
            />
          </SignupFormST.InputSet>
          <SignupFormST.InputSet>
            <SignupFormST.InputSpan>
              <i className='fa-solid fa-phone'></i>
            </SignupFormST.InputSpan>
            <SignupFormST.Input
              type='phoneNumber'
              name='phoneNumber'
              value={phoneNumber}
              onChange={signupInfoHandler}
              placeholder='전화번호'
            />
          </SignupFormST.InputSet>
        </SignupFormST.InputBox>

        {isFail === true ? (
          <SignupFormST.Span>{failText}</SignupFormST.Span>
        ) : (
          <></>
        )}

        <SignupFormST.BtnSet>
          <SignupFormST.ToBack onClick={() => navigate(-1)}>
            뒤로가기
          </SignupFormST.ToBack>
          <Button type='sign'>가입</Button>
        </SignupFormST.BtnSet>
      </form>
    </SignupFormST.Box>
  );
}
