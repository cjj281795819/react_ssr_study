import React from 'react';

const Index = () => {
  return (
    <div>
      <div>page: Apple</div>
      <img src={require('./small-img.png')} />
      <img src={require('./big-img.png')} />
    </div>
  )
};

export default Index;