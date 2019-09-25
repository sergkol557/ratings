import * as React from 'react';
import { render } from 'react-dom';
import App from './components/example';

if (document.querySelector('#example')) {
    render(<App />, document.getElementById('example'));
}
