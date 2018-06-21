import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';

import {getInitialNotes, addNote, removeNote} from './store/actions'
// styles in-component - pay attention to the syntax
const styles = {
  textAlign: 'center',
  margin: 0,
  padding: 0,
  fontFamily: 'sans-serif',
};


// statefull component
class App extends Component {
  render() {
    return (
      <div style={styles}>
        <Header name={this.props.name}/>
        <Form  addNote={this.props.addNewNote}  />
        <Grid notes = {this.props.notes} removeNote={this.props.removeNote}/>
      </div>
    );
  }
}

/**
 * these will be mapped to func props of App, which is passed into Connect
 * @param {*} dispatch 
 * @param {*} ownProps 
 */
const mapDispatchProps = (dispatch, ownProps) => {
  return {
    getInitialNotes: ()=> {
      dispatch(getInitialNotes())
    },
    addNewNote: (note)=>{
      dispatch(addNote(note))
    },
    removeNote: (note) =>{
      dispatch(removeNote(note))
    }
  }
};

/**
 * these will be mapped to data props of App, which is passed into Connect
 * @param {*} state 
 * @param {*} ownProps 
 */
const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes,
    name:state.name,
  }
}
export default connect(mapStateToProps, mapDispatchProps)(App);