import React from 'react';
import ReactDOM from 'react-dom/client';

// React Hello World component
const App = () => {
    return (
        <div>
            <h1>Hello World from React!</h1>
            <p>Welcome to Namaste React 🙏</p>
            <div style={{padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '10px', marginTop: '20px'}}>
                <h2>🎉 Success!</h2>
                <p>Your React application is working perfectly!</p>
            </div>
        </div>
    );
};

// Get the root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
