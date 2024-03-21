import React, { Component } from 'react';
import ReactDOM from "react-dom";
// import logo from "./react-logo.png";

function OriginalContent() {
    return (
        <div>
            <h1>Hello, world!</h1>
            <p>Welcome to your new single-page application, built with:</p>
            <ul>
                <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
                <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
                <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
            </ul>
            <p>To help you get started, we have also set up:</p>
            <ul>
                <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
                <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
                <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
            </ul>
            <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
        </div>
    )
}

function MyHomePageContent() {
    return (
        <div>
            <Header />
            <h1>Fun facts about React</h1>
            <ul className="main-facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <header>
            <nav>
                <img className="logo" src="./react-logo.png" />
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small className="home-footer">© 2024 Mendes development. All rights reserved.</small>
        </footer>
    )
}

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <MyHomePageContent />
        );
    }
}
