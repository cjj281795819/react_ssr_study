import React, { useState } from 'react';

const Comp = React.lazy(() => import('./components/child'));

const Index = () => {
  const [show, setShow] = useState(false);

  const click = () => setShow(true);

  return (
    <div>
      <div onClick={click}>page: Orange</div>
      {
        show ?
          <React.Suspense fallback={<div>loading</div>}>
            <Comp />
          </React.Suspense> : null
      }
    </div>
  )
};

export default Index;