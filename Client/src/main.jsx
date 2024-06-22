import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import "./index.css";
import Reducers from "./Reducer";

const store = createStore(Reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   
      <App />
    
  </Provider>
);