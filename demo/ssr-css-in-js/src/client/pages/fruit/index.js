import React, { useEffect, useState } from 'react';
import { envInitialData } from '../../util';
import { fruitData } from '../data';
import styled from 'styled-components';

const Div = styled.div`
  font-size: 20px;
  color: blue;

  span {
    color: red;
    font-size: 18px;
  }
`;

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
    <Div onClick={click}>
      page: Fruit
      <span>I am {info.name}</span>
    </Div>
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