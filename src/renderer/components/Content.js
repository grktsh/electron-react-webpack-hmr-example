import React from 'react';

const Content = () => (
  <ul>
    <li>Node {process.versions.node}</li>
    <li>Chrome {process.versions.chrome}</li>
    <li>Electron {process.versions.electron}</li>
  </ul>
);

export default Content;
