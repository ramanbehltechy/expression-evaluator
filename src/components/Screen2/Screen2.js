import React,{Component} from 'react';
import AddButton from '../Button/Button';
import InputBox from '../InputBox/InputBox';
import OperandSelector from '../OperandSelector/OperandSelector';
import Grid from '@material-ui/core/Grid';

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
    <Grid container spacing={0}>
      <Grid item xs={4}>
          <OperandSelector onSelectChange={this.onChange}/>
        </Grid>
        <Grid item xs={3}>
            <InputBox onInputChange={this.onInputChange}/>
        </Grid>
     
        <Grid item xs={3}>
          <AddButton title="Add Operation" handler = {this.handler}/>
        </Grid>
    </Grid>
    )
  }
  };



export default Screen2;
