import React,{Component} from 'react';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import styles from './Screen3.module.css';

class Screen3 extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div style={{textAlign: "center"}}>
      <Grid container spacing={0}>
      <Box>
        {this.props.box1}
      </Box>
      <Box>
        {this.props.box2}
      </Box>
      <Box>
        {this.props.box3}
      </Box>
      =
      <Box>
        {this.props.box4}
      </Box>
  </Grid>
  </div>
    )
  }
};


export default Screen3;
