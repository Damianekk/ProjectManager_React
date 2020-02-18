import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { customInput } from '../fields/index';

class ProjectNew extends Component{
     
   
    componentDidMount(){
        console.log(this.props)
    }

    render(){ 
        return(
           <form onSubmit={this.props.handleSubmit} >
              < Field
                name="ProjectId" 
                visibleName='Id'
                disabled
                component={customInput}
              />
               <Field
                name="Name" 
                visibleName='Name'
                component={customInput}
              />
              <button type="submit" className="btn btn-primary">Save</button>
              <Link to="/projects" className="btn btn-danger" >Cancel</Link>
           </form>
        )
    }
}
function validate(values){
    const errors = {};

    if(!values.Name)
        errors.Name = "Enter a name!";
    
    return errors;
}
export default reduxForm({
    validate,
    form: 'ProjectNewForm'
})(
   connect(null,null)(ProjectNew)
);