import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Dropzone from 'react-dropzone';
import Papa from 'papaparse';


class Upload extends Component {
  onDrop(file){
    console.log('Received file: ', file);
    var passJSON = this.props.passJSON;
    //var header = ["1","2","3","4","5","date","expire","last_name","first_name","middle_name","suffix","street","city","state","zip"];
    //var header = "1,2,3,4,5,date,expire,last_name,first_name,middle_name,suffix,street,city,state,zip";
    Papa.parse(file[0], {
      skipEmptyLines: true,
      header:false,
      complete(results){
        console.log(results);
        var json = results.data;
        passJSON(json);
      }
    });
  }

  render(){
    return (
      <div>
        <Dropzone multiple={false} onDrop={this.onDrop.bind(this)}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <pre>
          <code>
            {this.props.json}
          </code>
        </pre>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { json: state.data.json };
}

export default connect(mapStateToProps, actions)(Upload);
