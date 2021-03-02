import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './OperandSelector.module.css';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));




class OperandSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: ''
    }
  }
  
handleChange = (event) => {
  this.setState({operator:event.target.value});
  this.props.onSelectChange(event.target.value);
};
render() {
  const classes = useStyles;
  return (
  <div className={styles.OperandSelector}>
  <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Operator</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={this.state.operator}
          onChange={this.handleChange.bind(this)}
          label="Operator"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'+'}>+</MenuItem>
          <MenuItem value={'-'}>-</MenuItem>
          <MenuItem value={'*'}>*</MenuItem>
          <MenuItem value={'/'}>/</MenuItem>
        </Select>
      </FormControl>
  </div>
  );
}
}



export default OperandSelector;
