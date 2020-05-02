import React from 'react';
import ReactDOM from 'react-dom';
import { Fruit } from './pages';

ReactDOM.hydrate(
  <Fruit />,
  document.getElementById('root')
);