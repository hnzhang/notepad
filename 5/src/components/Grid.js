import React, { Component } from 'react';
import Single from './Single';

export default class Grid extends Component {
  removeNote(note) {
    this.props.removeNote(note);
  }

  renderItems(){
    return this.props.notes.map(
      item => (
      <Single key={item.id} note={item} removeNote={this.removeNote.bind(this)} />
    ));
  }

  render() {
    return (
      <div className="row">
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    );
  }
}
