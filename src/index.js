import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';


// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World');


ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>,
  document.querySelector('#root')
);


