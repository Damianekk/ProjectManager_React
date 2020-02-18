import _ from 'lodash';
import React, {Component} from 'react';
import TaskNew from '../components/task/task_new';
import { connect } from 'react-redux';
import { fetchProjects,fetchTask } from '../actions';
class TaskFormContainer extends Component{

    submit=values=>{
        if(values.ProjectId){
            this.props.updateProject(values,()=>{
                this.props.history.push('/projects');
            });
        }else{
            this.props.createProject(values,()=>{
              this.props.history.push('/projects');
            });
        }
    }

    componentDidMount(){
        const {taskOrderId} = this.props.match.params; // wyciągnięcie z url parametru o nazwie projectId
        // const projectId = this.props.match.params.projectId;// drugi sposób wyciągnięcia ( pierwszy polecany )
        this.props.fetchProjects();
        if(taskOrderId)
            this.props.fetchTask(taskOrderId);
    }

    getInitialValues(){
        // const {task} = this.props;
        // const {projects} = this.props;
        // if(projects && task){
            return{
                TaskOrderId: 2,
                Description: 'elo 3 2 0',
                ProjectId: 1
            }
        // }
    }
    
    render(){
        return(
            <TaskNew  onSubmit={this.submit} initialValues={this.getInitialValues()}/>
        )
    }
}

function mapStateToProps({tasks,projects}, ownProps){ 
  
    return { projects, tasks: tasks[ownProps.match.params.taskOrderId] };
}
// function mapStateToProps({tasks}) {
//     var array1 = Object.values(tasks)
//     var array2 = [];
//     for(var i = 0; i < array1.length; i++) {
//          array2.push({value: array1[i].taskOrderId, label: array1[i].description})
//         // array2.push(array1[i]);
//     }
//     // console.log(array2)
//     return { tasks: array2 };
// }

export default connect(mapStateToProps,{ fetchProjects, fetchTask })(TaskFormContainer);