import React from 'react';
import spinner from "./spinner.gif";

export default () => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <img
      src={spinner}
      style={{ width: '100px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </div>
);