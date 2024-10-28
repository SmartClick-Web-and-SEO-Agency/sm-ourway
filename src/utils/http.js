export const fetchToken = async (username, password) => {
  try {
    const res = await fetch(
      'https://ourway.smartclick.agency/wp-json/jwt-auth/v1/token',
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

    if (token) {
      localStorage.setItem('token', token);
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error('Login error:', err);
    return false;
  }
};

export const fetchData = async (type) => {
  try {
    const token = localStorage.getItem('token');

    const res = await fetch(
      `https://ourway.smartclick.agency/wp-json/wp/v2/${type}?_fields=title,id,slug,date,content,type&per_page=100`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const resData = await res.json();

    return resData;
  } catch (err) {
    console.error(err);
  }
};
