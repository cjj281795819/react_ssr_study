import Fruit from '../pages/fruit/index';
import asyncComp from '../common/asyncComp';

export default [{
  component: Fruit,
  path: '/',
  exact: true,
  name: 'Fruits'
}, {
  component: asyncComp(() => import('../pages/apple/index')),
  path: '/apple',
  exact: true,
  name: 'Apple'
}, {
  component: asyncComp(() => import('../pages/banana/index')),
  path: '/banana',
  exact: true,
  name: 'Banana'
}, {
  component: asyncComp(() => import('../pages/orange/index')),
  path: '/orange',
  exact: true,
  name: 'Orange'
}];