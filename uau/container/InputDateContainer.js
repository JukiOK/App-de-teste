import React, {Component} from 'react'
import {connect} from 'react-redux'
import {niverDate} from '../redux/actions/inputDateActions.js'
import InputDate from '../components/input_date/InputDate.js'

const dispatchNiverDate = (dispatch, date) =>{
  console.log(date);
  dispatch(niverDate(date))
}

const mapStateToProps = (state, ownProps) => {
  return{

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchNiverDate: (date) => dispatchNiverDate(dispatch, date),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputDate)
