import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects, deleteProject } from '../../actions';

class TaskPaymentsList extends Component {

    componentDidMount(){ 
        this.props.fetchProjects();
    }
    
    renderProjects(){
        return _.map(this.props.projects, project =>{
            return(
                <li className="list-group-item" key = {project.projectId}>
                    {project.name}
                    <div className="text-xs-right">
                        <Link className="btn btn-primary" to={`projects/edit/${project.projectId}`}>
                            Edit
                        </Link>
                        <button
                            className="btn btn-danger pull-xs-right"
                            onClick={this.onDeleteClick.bind(this,project)}>
                            Delete
                       </button>
                       <Link className="btn btn-secondary pull-xs-right" to={`projects/tasks/${project.projectId}`}>
                            Tasks
                        </Link>
                    </div>
                </li>
            )
        });
    }

    onDeleteClick(project){
        this.props.deleteProject(project.projectId,()=>{
            this.props.fetchProjects();
        });
    }

    render(){ 
        return (
            <div>
                <h3>Projects</h3>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="projects/add">
                         Add a project
                    </Link>
                  
               </div>
                <ul className="list-group">
                    {this.renderProjects()}
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
function mapStateToProps({projects}) {
    return {projects};
}

export default connect(mapStateToProps, { fetchProjects, deleteProject })(ProjectList)