import axios from 'axios'

const ROOT_URL = 'http://localhost:56348/api';

export const FETCH_PROJECTS = 'fetch_projects';
export const FETCH_PROJECT = 'fetch_project';
export const CREATE_PROJECT = 'create_project';
export const DELETE_PROJECT = 'delete_project';
export const UPDATE_PROJECT = 'update_project';


export const FETCH_TASKS = 'fetch_tasks';

export function fetchProjects(){
    const request = axios.get(`${ROOT_URL}/projects`)
    return{
        type: FETCH_PROJECTS,
        payload: request
    }
}

export function updateProject(values,callback){ 
    const request = axios.put(`${ROOT_URL}/projects?projectId=${values.ProjectId}`, values)
        .then(()=>callback());

    return{
        type: UPDATE_PROJECT,
        payload: request
    }
}

export function createProject(values,callback){ 
    const request = axios.post(`${ROOT_URL}/projects`,values)
        .then(()=>callback());

    return{
        type: CREATE_PROJECT,
        payload: request
    }
}
export function fetchProject(projectId){ 
    const request = axios.get(`${ROOT_URL}/projects/${projectId}`)
            
    return{
        type: FETCH_PROJECT,
        payload: request
    }
}

export function deleteProject(projectId,callback){ 
    const request = axios.delete(`${ROOT_URL}/projects/${projectId}`)
            .then(()=>callback());

    return{
        type: DELETE_PROJECT,
        payload: projectId
    }
}

export function fetchTasks(){
    const request = axios.get(`${ROOT_URL}/tasks`);

    return{
        type: FETCH_TASKS,
        payload: request
    }
}
export function fetchProjectTasks(projectId){
    const request = axios.get(`${ROOT_URL}/tasks/GetTasksByProjectId/${projectId}`);

    return{
        type: FETCH_TASKS,
        payload: request
    }
}

export function createTask(values,callback){ 
    const request = axios.post(`${ROOT_URL}/tasks`,values)
        .then(()=>callback());

    return{
        type: CREATE_PROJECT,
        payload: request
    }
}
