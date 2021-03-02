import React,{Component} from 'react';
import AddButton from '../Button/Button';
import InputBox from '../InputBox/InputBox';
import OperandSelector from '../OperandSelector/OperandSelector';

class Screen2 extends Component {
  constructor(props) {
    debugger;
    super(props);
  }
  onChange = (val) =>{
      this.props.changeVal(val);
  }
  onInputChange = (val) =>{
     this.props.inputChange(val);
  }
  handler = () => {
    this.props.operationClick();
  }
  render(){
  return(
    <div>
      <OperandSelector onSelectChange={this.onChange}/>
      <InputBox onInputChange={this.onInputChange}/>
      <AddButton title="Add Operation" handler = {this.handler}/>
    </div>
    )
  }
  };



export default Screen2;
