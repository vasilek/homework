import React, { Component } from 'react';
import { connect } from 'react-redux';
import  MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui'
import Menu from './Menu';

class Show extends Component {
  render() {
    console.log(this.props.testStore);
    return (
    <MuiThemeProvider>
      <div>
          <Menu />
          <List>

          {this.props.testStore.personlist.map((person, index) =>
            <ListItem key={index}>{person}</ListItem>
          )}

          </List>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(Show);