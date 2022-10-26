import instance from '../request';

const TIME_OUT = 300 * 1000;

const statusError = {
  status: false,
  headers: {
    error: {
      code: 'NO_CONNECTION',
      message: '연결이 원할하지 않습니다. 잠시 후 다시 시도해 주세요',
    },
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
    return instance.post('/members/signin', JSON.stringify(credentials), {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    });
  };

  const data = await getPromise(requestPromise).catch(() => {
    return statusError;
  });

  console.log(data.data.error, data.data.success, data.status);

  if (parseInt(Number(data.status) / 100) === 2) {
    const status = data.data.success;
    const code = data.status;
    const text = status
      ? JSON.stringify(data.headers)
      : JSON.stringify(data.data.error);
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
      '/members/logout',
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
    console.log('Start Logout!');
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

export const requestToken = async (credentials) => {
  const requestPromise = () => {
    return instance.post(
      '/members/reissue',
      {},
      {
        headers: credentials,
      }
    );
  };

  const data = await getPromise(requestPromise).catch(() => {
    return statusError;
  });

  //console.log(data);

  if (parseInt(Number(data.status) / 100) === 2) {
    const status = data.data.success;
    const code = data.status;
    const text = status
      ? JSON.stringify(data.headers)
      : JSON.stringify(data.data.error);
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

export const signupUser = async (signupInfo) => {
  const requestPromise = () => {
    return instance.post('/members/signup', JSON.stringify(signupInfo), {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    });
  };

  const data = await getPromise(requestPromise).catch(() => {
    return statusError;
  });

  if (parseInt(Number(data.status) / 100) === 2) {
    const status = data.data.success;
    const code = data.status;
    const text = status
      ? JSON.stringify(data.headers)
      : JSON.stringify(data.data.error);
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
