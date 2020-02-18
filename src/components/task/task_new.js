import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Select from 'react-select';
import { customInput } from '../fields/index';
import { required, minLength } from '../validation/index';

class TaskNew extends Component{

  
    
    handleChange = (value) => {
        this.setState({ Description: '12321'  });
        // this.setState({ ProjectId: value.value  });
        console.log(this.props.projectId)
        
        console.log(`Option selected:`, value.value);
        console.log(this.props)
      }
 
    render(){
        const minValidate = minLength(4);
      
        return(
           <form onSubmit={this.props.handleSubmit}>
              < Field
                name="TaskOrderId" 
                visibleName='Id'
                disabled
                component={customInput}
              />
               <Field
                name="Description" 
                visibleName='Description'
                component={customInput}
                validate={[required,minValidate]}
              />
              <Field name="ProjectId" 
                 component={props =>
                   <Select
                    name="ProjectId"
                    value={props.input.value}
                    onChange={this.handleChange}
                    onBlur={() => props.input.onBlur(props.input.value)}
                    options={this.props.projects}
                    placeholder="Select" 
                    simpleValue
                    // valueKey="taskOrderId"
                    // labelKey="description"
                    />
                } 
                />
                
              <button type="submit" className="btn btn-primary">Save</button>
              <Link to="/tasks" className="btn btn-danger" >Cancel</Link>
           </form>
        )
    }
    
}
function mapStateToProps({projects}) {
    console.log('lecimy')
    var array1 = Object.values(projects)
    var array2 = [];
    for(var i = 0; i < array1.length; i++) {
         array2.push({value: array1[i].projectId, label: array1[i].name})
        // array2.push(array1[i]);
    }
    console.log(array2)
    return { projects: array2 };
}
// Ta walidacja zastąpiona jest walidacią którą się podaje przy każdym polu w prop validate
// function validate(values){
//     const errors = {};

//     if(!values.Description)
//         errors.Description = "Enter a description!";
    
//     return errors;
// }
export default reduxForm({
    // validate,
    form: 'TaskNewForm'
})(
   connect(mapStateToProps,null)(TaskNew)
);