import instance from '../request';
import axios from 'axios';

const TIME_OUT = 300 * 1000;

const statusError = {
  status: false,
  headers: {
    error: ['연결이 원할하지 않습니다. 잠시 후 다시 시도해 주세요'],
  },
};

const timeoutPromise = () => {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error('timeout')), TIME_OUT)
  );
};

const getPromise = async (requestPromise) => {
  return await Promise.race([requestPromise(), timeoutPromise()]);
};

export const loginUser = async (credentials) => {
  const requestPromise = () => {
    return instance.post('/members/login', JSON.stringify(credentials), {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    });
  };

  const data = await getPromise(requestPromise).catch(() => {
    return statusError;
  });

  // const data = await axios.post(
  //   'https://spring.pyuri.dev/api/members/login',
  //   JSON.stringify(credentials),
  //   {
  //     headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  //   }
  // );

  //console.log(data.data.data);

  if (parseInt(Number(data.status) / 100) === 2) {
    const status = data.data.success;
    const code = data.status;
    const text = JSON.stringify(data.headers);
    const headers = text.length ? JSON.parse(text) : '';
    const userInfo = data.data.data;

    return {
      status,
      code,
      headers,
      userInfo,
    };
  } else {
    return statusError;
  }
};

export const logoutUser = async (credentials) => {
  const requestPromise = () => {
    return instance.post(
      '/auth/members/logout',
      {},
      {
        headers: credentials,
      }
    );
  };

  const data = await getPromise(requestPromise).catch(() => {
    return statusError;
  });
  //console.log(data.status);
  if (parseInt(Number(data.status) / 100) === 2) {
    console.log('hello son!');
    const status = true;
    const code = data.status;
    const text = JSON.stringify(data.headers);
    const headers = text.length ? JSON.parse(text) : '';

    return {
      status,
      code,
      headers,
    };
  } else {
    return statusError;
  }
};

export const requestToken = async (refreshToken) => {
  const requestPromise = () => {
    return instance.post(`/members/signin`, {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      body: JSON.stringify({ refresh_token: refreshToken }),
    });
  }; // 나중에 정하자..!

  const data = await getPromise(requestPromise).catch(() => {
    return statusError;
  });

  if (parseInt(Number(data.status) / 100) === 2) {
    const status = data.ok;
    const code = data.status;
    const text = await data.text();
    const json = text.length ? JSON.parse(text) : '';

    return {
      status,
      code,
      json,
    };
  } else {
    return statusError;
  }
};

export const signupUser = async (signupInfo) => {
  const requestPromise = () => {
    return instance.post('/api/members/signup', JSON.stringify(signupInfo), {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    });
  };

  const data = await getPromise(requestPromise).catch(() => {
    return statusError;
  });

  if (parseInt(Number(data.status) / 100) === 2) {
    const status = data.data.success;
    const code = data.status;
    const text = JSON.stringify(data.headers);
    const headers = text.length ? JSON.parse(text) : '';

    return {
      status,
      code,
      headers,
    };
  } else {
    return statusError;
  }
};
