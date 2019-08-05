import React, { Component } from 'react';
import './App.css';
import { Layout, Header, HeaderRow, Textfield, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/Main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
            <div className="demo-big-content">
              <Layout>
                  <Header className = "header-color" waterfall hideTop>
                      <HeaderRow title="Title">
                          <Textfield
                              value=""
                              onChange={() => {}}
                              label="Search3"
                              expandable
                              expandableIcon="search"
                          />
                      </HeaderRow>

                      <HeaderRow className = "main-header">
                          <Navigation>
                              <Link to="/Landing">Landing</Link>
                              <Link to="/About">About</Link>
                              <Link to="/Resume">Resume</Link>
                              <Link to="/Exp">Experience</Link>
                              <Link to="/Eats">Eats</Link>
                          </Navigation>
                      </HeaderRow>
                      
                  </Header>
                  <Drawer title="Title">
                      <Navigation>
                          <Link to="/Landing">Landing</Link>
                          <Link to="/About">About</Link>
                          <Link to="/Resume">Resume</Link>
                          <Link to="/Experience">Experience</Link>
                          <Link to="/Eats">Eats</Link>
                      </Navigation>
                  </Drawer>
                  <Content>
                      <div className="page-content" />
                      <Main/>
                  </Content>
              </Layout>
          </div>
    );
  }
}

export default App;
