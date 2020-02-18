import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchProject, deleteProject } from '../../actions';
import { connect } from 'react-redux';

class ProjectListItem extends Component {
    componentDidMount(){
        const {projectId} = this.props.match.params; // wyciągnięcie z url parametru o nazwie projectId
        // const projectId = this.props.match.params.projectId;// drugi sposób wyciągnięcia ( pierwszy polecany )
       
        // if(!this.props.project){ // Jeśli bardzo nam zależy na zmniejszeniu "strzałów do webapi to możemy dać tego if-a, wtedy ten projekt załaduje się z listy projektów jeśli tam był"
            this.props.fetchProject(projectId);
        // }

    }

    onDeleteClick(){
        const {projectId} = this.props.match.params;
        this.props.deleteProject(projectId,()=>{
            this.props.history.push('/projects');
        });
    }

    render(){ 
         const { project } = this.props;

        if(!project){
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/projects" className="btn btn-primary">Back to list</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete
                </button>
                <h3>Project: {project.name}</h3>
            </div>
        )
    }

}
// gdy metoda powyżej render zostaje wywoływana to poniższa metoda 
// definiuje jakich propertisów komponent potrzebuje
// przykładowo w metodzie render komenda this.props jest jednoznaczna z ownProps (this.props === ownProps)
// metoda nadaje sie idealnie do jakiś obliczeń itp które chcemy zrobić aby pokazać już wynik dla użytkownika 
function mapStateToProps({projects}, ownProps){
    return { project: projects[ownProps.match.params.projectId] };
}

export default connect(mapStateToProps,{ fetchProject, deleteProject })(ProjectListItem);