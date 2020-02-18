import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // routing ( określanie ścieżki po której otwiera się dany komponent [powiązanie komponentu z url])
import promise from 'redux-promise'; // umożliwia pobieranie za pomocą reduxa z WebApi // npm install --save axios redux-promise

import reducers from './reducers';

import ProjectList from './components/project/project_list';
import ProjectListItem from './components/project/project_list_item';
import ProjectFormContainer from './containers/project_form_container';

import TaskListContainer from './containers/task_list_container';
import TaskFormContainer from './containers/task_form_container';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <div>
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>> 
          <Route path="/projects/tasks/:projectId" component={TaskListContainer}/> 
          <Route path="/projects/edit/:projectId" component={ProjectFormContainer}/> 
          <Route path="/projects/add" component={ProjectFormContainer}/> 
          <Route path="/projects" component={ProjectList}/>
          <Route path="/tasks/add" component={TaskFormContainer}/>
          <Route path="/tasks" component={TaskListContainer}/>         
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  </div>
  , document.querySelector('.container'));
