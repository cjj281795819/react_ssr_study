import { Apple, Banana, Orange, Fruit } from '../pages';

export default [{
  component: Fruit,
  path: '/',
  exact: true,
  name: 'Fruits'
}, {
  component: Apple,
  path: '/apple',
  exact: true,
  name: 'Apple'
}, {
  component: Banana,
  path: '/banana',
  exact: true,
  name: 'Banana'
}, {
  component: Orange,
  path: '/orange',
  exact: true,
  name: 'Orange'
}];