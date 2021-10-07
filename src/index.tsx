import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './App';

const MainApp: React.FC = () => {
    return(
        <App />
    )
}

ReactDom.render(
    <MainApp />,
    document.getElementById("root")
)