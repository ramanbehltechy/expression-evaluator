import React,{Component} from 'react';
import { ThemeProvider,createMuiTheme,makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

  class InputBox extends Component{ 
    constructor(props)
    {
      super(props);
      this.state = {value: ''};
    }
    handleChange = (e) => {
      this.setState({value:e.target.value});
      this.props.onInputChange(e.target.value);
    }
    render(){
      const classes = useStyles;
      return (
        <ThemeProvider theme={theme}>
              <TextField
                className={classes.margin}
                value={this.state.value}
                label="operand"
                variant="outlined"
                id="mui-theme-provider-outlined-input"
                onChange={ this.handleChange }
                
              />
            </ThemeProvider>
          )
    } 
};



export default InputBox;
