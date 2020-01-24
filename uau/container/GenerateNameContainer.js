import React, {Component} from 'react'
import {connect} from 'react-redux'
import GenerateName from '../components/generate_name/GenerateName'

const mapStateToProps = (state, ownProps) => {
  console.log("aAaaaaaaaas", state);
  const {inputDate} = state;
  return{
    niverDate: (inputDate && inputDate.niverDate) || "",
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateName)
