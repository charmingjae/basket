import React from "react";

function testProfile(testuser) {
  console.log(testuser);
  const id = testuser.testuser.id;
  const name = testuser.testuser.name;
  console.log("id : " + id);
  console.log("name : " + name);
  return (
    <>
      <h1>Profile</h1>
      <dt>id</dt>
      <dd>{id}</dd>
      <dt>name</dt>
      <dd>{name}</dd>
    </>
  );
}

export default testProfile;
