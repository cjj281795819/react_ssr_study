import React, { useEffect, useState } from 'react';
import { envInitialData } from '../../util';
import { fruitData } from '../data';
import './index.css';

const Index = (props) => {
  const [info, setInfo] = useState(envInitialData(props).data || {});

  useEffect(() => {
    const getData = async () => {
      const { data } = await Index.preFetch();
      setInfo(data);
    };

    if (info.name === void 0) {
      getData();
    }

  }, []);

  const click = () => {
    alert('i am fruit')
  };

  return (
    <div onClick={click}>
      page: Fruit
      <span className="name">I am {info.name}</span>
    </div>
  )
};

Index.preFetch = async () => {
  const fetchData = () => {
    return new Promise(res => {
      setTimeout(() => {
        res({
          data: fruitData
        })
      }, 300);
    });
  };

  const data = await fetchData();
  return data;
};

export default Index;