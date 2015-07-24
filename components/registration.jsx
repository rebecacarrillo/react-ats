﻿/* Registration.jsx *//* This is the parent *//* Form contains: info, service information, other details. Success page /*	to also be made  *//* need to define saveValues and next Step Functions here */var fieldValues = {  /* field values are separated into groups - first page is basic fields "Infofields" */  /* page 1 field values */  name     : null,  dob      : null,  phone : null,  email    : null,  address   : null,  addressLine : null, /* go back and fix this later during debugging - the variable is named "addressline" in its component file */   city: null,   state : [],  zip : null,   bahaiid : null,  /* page 2 field values */  serviceBegin : null,  lengthCommit : null,   languages    : null,  /* these are the pain in the ass questions about the ruhi books */  /* they should all be radio selects */  book1 : [],  book2 : [],  book3 : [],  book4 : [],  book5 : [],  book6 : [],  book7: [],  book8: [],/* Both of the following fields are text areas, not text input */jyeExp: null, /* experience with junior youth empowerment program */coreExp: null, /*experience with the bahai core activities *//* page 3 field values *//* all of the following questions should be text areas except for the question about the car, which should be... a text input? */financeService : null,specialNeeds: null,postServicePlans: null,car : null,             /* text input max out at one column */references : null,      /* text area */comments : null,        /* text area */heard : null,           /* How did you hear about this website? Text input */ }var React 			= require('react')var InfoFields 		= require('./InfoFields')var ServiceFields 	= require('./ServiceFields')var DetailFields 	= require('./DetailFields')/* Confirmation fields show all data at once before submitting */var Confirmation 	= require('./Confirmation')var Success			= require('./Success')var Registration = React.createClass({  getInitialState: function() {    return {      step : 1    }  },  render: function() {    switch(this.state.step) {      case 1:        return <InfoFields  fieldValues={fieldValues}                            nextStep={this.nextStep}                            saveValues={this.saveValues}/>      case 2:        return <ServiceFields fieldValues={fieldValues}                           nextStep={this.nextStep}                           previousStep={this.previousStep}                           saveValues={this.saveValues}/>      case 3:        return <DetailFields />      case 4:       return <Confirmation fieldValues={fieldValues}                           previousStep={this.previousStep}                           submitRegistration={this.submitRegistration} />        case 5:		return <Success fieldValues={fieldValues} />    }  }} module.exports = Registration/* saves functions, navigate right and left */saveValues: function(fields) {  return function() {    fieldValues = Object.assign({}, fieldValues, fields)  }()}, nextStep: function() {  this.setState({    step : this.state.step + 1  })},previousStep: function() {  this.setState({    step : this.state.step - 1  })},