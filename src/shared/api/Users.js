import instance from '../request';

const TIME_OUT = 300 * 1000;

const statusError = {
  status: false,
  json: {
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
    return instance.post(`/members/signin`, {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      body: JSON.stringify(credentials),
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

export const logoutUser = async (credentials, accessToken) => {
  const requestPromise = () => {
    return instance.post(`logout-url`, {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      body: JSON.stringify(credentials),
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
    return instance.post(`/members/signup`, {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      body: JSON.stringify(signupInfo),
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
