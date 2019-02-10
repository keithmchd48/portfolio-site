import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import './App.css';
import Main from './components/main.js'
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/home">Keith Machado</Link>} scroll>
                    <Navigation>
                        <Link to="/home">Home</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/resume">Resume</Link>
                        {/* <Link to="/projects">Projects</Link> */}
                    </Navigation>
                </Header>
                <Drawer style={{background: '#f7ff00',  /* fallback for old browsers */
                                background: '-webkit-linear-gradient(to right, #db36a4, #f7ff00)',  /* Chrome 10-25, Safari 5.1-6 */
                                background: 'linear-gradient(to right, #db36a4, #f7ff00)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */}} 
                                title={<Link style={{textDecoration: 'none', color: 'white'}} to="/home">Keith Machado</Link>} >
                    <Navigation>
                        <Link style={{color: 'white'}} to="/home">Home</Link>
                        <Link style={{color: 'white'}} to="/contact">Contact</Link>
                        <Link style={{color: 'white'}} to="/resume">Resume</Link>
                        {/* <Link to="/projects">Projects</Link> */}
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
        </div>
    );
  }
}

export default App;
