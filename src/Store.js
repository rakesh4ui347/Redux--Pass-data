import {createStore } from 'redux';
import {reducer} from './Reducer';

const store=createStore(reducer,'no name');
export default store;

