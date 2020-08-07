import React from "react";

function Profile({ user }) {
  const { id, password } = user || {};
  return (
    <>
      <h1>Profile</h1>
      <dt>Email</dt>
      <dd>{id}</dd>
      <dt>Password</dt>
      <dd>{password}</dd>
    </>
  );
}

export default Profile;
