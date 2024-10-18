export const fetchToken = async (username, password) => {
  try {
    const res = await fetch(
      'http://localhost:10003/wp-json/jwt-auth/v1/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username,
          password,
        }),
      }
    );
    const resData = await res.json();

    const { token } = resData;
    localStorage.setItem('token', token);
    return true;
  } catch (err) {
    console.error('Login error:', err);
    return false;
  }
};

export const fetchData = async (token, type) => {
  const readyToken = await token;

  const res = await fetch(
    `http://localhost:10003/wp-json/wp/v2/${type}?per_page=100`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${readyToken}`,
      },
    }
  );
  const resData = await res.json();

  return resData;
};

export const fetchPost = async (token, type, id) => {
  const readyToken = await token;

  const res = await fetch(
    `http://localhost:10003/wp-json/wp/v2/${type}?include=${id}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${readyToken}`,
      },
    }
  );
  const resData = await res.json();

  return resData;
};
