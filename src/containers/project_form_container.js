import _ from 'lodash';
import React, {Component} from 'react';
import ProjectNew from '../components/project/project_new';
import { connect } from 'react-redux';
import { fetchProject,createProject, updateProject } from '../actions';
class ProjectFormContainer extends Component{

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
        const {projectId} = this.props.match.params; // wyciągnięcie z url parametru o nazwie projectId
        // const projectId = this.props.match.params.projectId;// drugi sposób wyciągnięcia ( pierwszy polecany )
        if(projectId)
            this.props.fetchProject(projectId);
    }

    getInitialValues(){
        const {project} = this.props;
        if(project){
            return{
                ProjectId: project.projectId,
                Name: project.name
            }
        }
    }
    
    render(){
        return(
            <ProjectNew  onSubmit={this.submit} initialValues={this.getInitialValues()}/>
        )
    }
}

function mapStateToProps({projects}, ownProps){ 
    return { project: projects[ownProps.match.params.projectId] };
}

export default connect(mapStateToProps,{ fetchProject,createProject, updateProject })(ProjectFormContainer);