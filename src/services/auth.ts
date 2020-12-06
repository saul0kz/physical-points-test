interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(email: string, password: string): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: '39393sdjidiwf0498098rffjf9j',
        user: {
          name: email + password,
          email: 'saul0kz@gmail.com',
        },
      });
    }, 2000);
  });
}