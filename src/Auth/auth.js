// 민재 Writing
// users = 데이터베이스 역할을 하는 변수
const users = [
  { id: "admin", password: "123" },
  { id: "cmj", password: "456" },
];

// id, password 검증 function
export function signIn({ id, password }) {
  const user = users.find(
    (user) => user.id === id && user.password === password
  );
  if (user === undefined) throw new Error();
  return user;
}
