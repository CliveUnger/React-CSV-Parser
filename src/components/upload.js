import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Dropzone from 'react-dropzone';
import Papa from 'papaparse';


class Upload extends Component {
  onDrop(file){
    console.log('Received file: ', file);
    var passJSON = this.props.passJSON
    Papa.parse(file[0], {
      skipEmptyLines: true,
      complete(results){
        console.log(results);
        passJSON(results.data);
      }
    });
  }

  /*onDrop(file){
    var array = ParseCSV(file);
    console.log(array);
    this.props.passJSON(array);
  }*/

  render(){
    return (
      <div>
        <Dropzone multiple={false} onDrop={this.onDrop.bind(this)}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <code>
        {this.props.json}
        </code>
      </div>
    );
  }
}


export default connect(null, actions)(Upload);
