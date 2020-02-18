import _ from 'lodash';
import React, {Component} from 'react';
import TaskList from '../components/task/task_list';
import { connect } from 'react-redux';
import { fetchTasks , fetchProjectTasks } from '../actions';
class TaskListContainer extends Component{

    componentDidMount(){
        const {projectId} = this.props.match.params; // wyciągnięcie z url parametru o nazwie projectId
        // const projectId = this.props.match.params.projectId;// drugi sposób wyciągnięcia ( pierwszy polecany )
        console.log(projectId)
        if(projectId){
            this.props.fetchProjectTasks(projectId);
        }
        else
            this.props.fetchTasks();
    }
 
    
    render(){
        return(
            <TaskList/>
        )
    }
}

function mapStateToProps({tasks}) {
    return {tasks};
}

export default connect(mapStateToProps, { fetchTasks, fetchProjectTasks })(TaskListContainer)