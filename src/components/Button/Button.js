import React, { Component }  from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './Button.module.css';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

class AddButton extends Component {
  render() {
    const classes = useStyles;
    return (
      <Button className="AddButton" variant="contained" size="large" onClick = {this.props.handler} >
        {this.props.title}
      </Button>
    );
  }
}

export default AddButton;
