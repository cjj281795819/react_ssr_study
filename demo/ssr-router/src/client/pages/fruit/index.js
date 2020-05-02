import React from 'react';

const Index = () => {

  const click = () => {
    alert('i am page fruit');
  }

  return (
    <div onClick={click}>
      page: Fruit
    </div>
  )
};

export default Index;