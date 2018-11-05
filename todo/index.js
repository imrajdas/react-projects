import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import Todo from './src/components/todo'
import store from './src/store'

ReactDOM.render(<Provider store={store}><Todo/></Provider>, document.getElementById('app'))
