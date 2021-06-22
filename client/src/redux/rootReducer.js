import { combineReducers } from 'redux';
import footerReducer from './footer/footer.reducer';
import servicesReducer from "./services/services.reducer";
import projectsReducer from "./projects/projects.reducer";
import appReducer from "./app/app.reducer";
import membersReducer from "./members/members.reducer";

import { createForms } from 'react-redux-form';

import { initialContactState, initialLoginState, initialRegisterState } from './forms';

const rootReducer = combineReducers({
  footerReducer,
  servicesReducer,
  projectsReducer,
  appReducer,
  membersReducer,
  ...createForms({
    contacts: initialContactState,
    login: initialLoginState,
    register: initialRegisterState
  })
});

export default rootReducer;