import  { Component } from "react";
import './App.css';
import Screen1  from "./components/Screen1/Screen1";
import Screen2  from "./components/Screen2/Screen2";
import Screen3 from "./components/Screen3/Screen3";


class App extends Component {
  constructor(){
    super();
    this.state = {
      screen1: true,
      screen2: false,
      screen3:false,
      operand:'',
      operator:'',
      number:'',
      result:0
    };
  }

  handleClick = (val) =>{
      if(val=='')
      {
        return;
      }
      this.setState({screen1:false,screen2:true,number:val});
  }
  inputChange = (val) =>{
      this.setState({operand:(eval(this.state.number + this.state.operator +val ))});
  }
  changeVal = (val) =>{
    this.setState({operator:val})
  }
  operationClick = () =>{
    if(this.state.operand=='' && this.state.operator==''){
      return;
    }
    this.setState({screen3:true,result:eval(this.state.number + this.state.operator + this.state.operand)});
  }
  render() {
    const { screen1, screen2,screen3 } = this.state; 
  
    return (
      <div className="App">
        <header className="App-header">
          <p>
          Expression Evaluator
         </p>
          {screen1 && <Screen1 oncl = {this.handleClick}/>}
          {screen3 && <Screen3 box1={this.state.number} box2={this.state.operator} box3={this.state.operand} box4 ={this.state.result}/>}
         {screen2 && <Screen2 inputChange ={this.inputChange} changeVal={this.changeVal} operationClick={this.operationClick} />}
        </header>
      </div>
    )
  }
}

export default App;
