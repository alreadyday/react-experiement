import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './page/App';


class Index extends PureComponent {
    render() {
        return (
            <Router>
                <App />
            </Router>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
