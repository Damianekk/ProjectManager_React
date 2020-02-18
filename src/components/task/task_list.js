import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTasks } from '../../actions';

class TaskList extends Component {
 
    renderTasks(){
        return _.map(this.props.tasks, task =>{
            return(
                <li className="list-group-item" key = {task.taskOrderId}>
                    {task.description}
                    <div className="text-xs-right">
                        <Link className="btn btn-primary" to={`/task/edit/${task.taskOrderId}`}>
                            Details
                        </Link>
                        <button
                            className="btn btn-danger pull-xs-right"
                            // onClick={this.onDeleteClick.bind(this,project)}
                        >
                            Delete
                       </button>
                    </div>
                </li>
            )
        });
    }

    // onDeleteClick(project){
    //     this.props.deleteProject(project.projectId,()=>{
    //         this.props.fetchTasks();
    //     });
    // }

    render(){ 
        console.log(this.props.tasks);
        return (
            <div>
                <h3>Tasks</h3>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/tasks/add">
                         Add a task
                    </Link>
                  
               </div>
                <ul className="list-group">
                    {this.renderTasks()}
                </ul>
            </div>
        )
    }

}
// function mapStateToProps(state) {
//     return { projects: state.projects }
// }
// powyższa metoda zapisana w inny sposób
// coś w stylu wyciągnięcia property przez {xyz}
// gdzie xyz to nazwa prop.
function mapStateToProps({tasks}) {
    return {tasks};
}

export default connect(mapStateToProps, { fetchTasks })(TaskList)