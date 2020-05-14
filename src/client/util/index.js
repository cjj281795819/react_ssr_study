export const envInitialData = (props) => {
  let initialData;

  if (__isServer) {
    initialData = props.staticContext.initialData;
  } else {
    initialData = props.initialData;
  };

  return initialData || {};
};

export const getAimComp = (routeList, pathname) => {
  const len = routeList.length;
  for (let i = 0; i < len; i++) {
    if (routeList[i].path === pathname) {
      return routeList[i];
    }
  };
}