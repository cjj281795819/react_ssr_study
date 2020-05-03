export const envInitialData = (props) => {
  let initialData;

  if (__isServer) {
    initialData = props.staticContext.initialData;
  } else {
    initialData = props.initialData;
  };

  return initialData || {};
};