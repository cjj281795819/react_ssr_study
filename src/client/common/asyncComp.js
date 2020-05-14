import React from "react";

const asyncComp = (load) => {
  return class AsyncComp extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        Comp: null
      };
    }

    static _load = load;

    asyncLoad = async () => {
      const { default: Comp } = await AsyncComp._load();
      this.setState({ Comp });
    };

    componentDidMount() {
      if (!this.state.Comp) {
        console.log('加载异步组件');
        this.asyncLoad();
      }
    }

    render() {
      const { Comp } = this.state;
      return (
        Comp ? <Comp {...this.props} /> : <div>loading</div>
      )
    }
  };
};

export default asyncComp;