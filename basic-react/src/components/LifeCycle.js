import React from 'react'

class LifeCycle extends React.Component {

    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red",remove:false};
      this.showWelcome='';
      console.log('in constructor');
    }
    changeColor = () => {
      this.setState({favoritecolor: "blue",remove:false});
    }
    componentDidMount()
    {
      console.log('in componentDidMount');
    }

    // shouldComponentUpdate(){
    //   console.log('in shouldComponentUpdate')
    //   return null;
    // }

    componentDidUpdate()
    {
      console.log(' in componentDidUpdate');
      this.setState({favoritecolor: "blue"});
      setInterval()

    }
    getSnapshotBeforeUpdate()
    {
      console.log('getSnapshotBeforeUpdate');
      return null;
    }

    componentWillUnmount()
    {
      console.log('componentWillUnmount');
    }
    render() {
      console.log('in render');
      console.log('----------------------')
      return (
        <div>
        {this.showWelcome&&<h1>{this.showWelcome}</h1>}
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Remove from DOM</button>
        </div>
      );
    }
  }

export default LifeCycle;

//Mounting ---> First render  --->1.constructor 2.render() 3.componentDidMount()
//Update ---> Re render 
  // 1.shouldComponentUpdate()
  // 2.render()
  // 3.getSnapShotBeforeUpdate()
  // 4.componentDidUpdate()

//UnMounting ---> component is getting unmounted.
