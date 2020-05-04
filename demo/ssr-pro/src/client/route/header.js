import React from 'react';
import router from './route.config';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      {
        router.map(v =>
          <Link key={v.path} to={v.path}>
            {v.name}
          </Link>
        )
      }
    </div>
  )
};

export default Header;