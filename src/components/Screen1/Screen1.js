import React,{Component} from 'react';
import AddButton  from "../Button/Button";
import InputBox from '../InputBox/InputBox';
import styles from './Screen1.module.css';


class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operand:''
    }
  }
  
  handler = () => {
    this.props.oncl(this.state.operand);
  }
  
  handleChange = (val) =>{
      this.setState({
        operand: val
      });
  }
render() {
  return(
    <div className={styles.Screen1}>
        <InputBox onInputChange={this.handleChange}/>
        <AddButton title="Add Number" handler = {this.handler}/>
    </div>
    )
  }
};


export default Screen1;
