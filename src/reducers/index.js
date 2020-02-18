import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ProjectsReducer from './reducer_projects';
import TasksReducer from './reducer_tasks';

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  tasks: TasksReducer,
  form: formReducer
});

export default rootReducer;
