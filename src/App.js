import React, { Component } from 'react';
import {Header, Container, Menu} from "semantic-ui-react";
import './App.css';

import SampleComponent from "./SampleComponent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <Header inverted as="h1">Project Mini-Mek</Header>
                </div>
                <Container>
                  <Menu tabuler size="massive">
                    <Menu.Item name="unitInfo" active={true}>Unit Info</Menu.Item>
                    <Menu.Item name="pilots" active={false}>Pilots</Menu.Item>
                    <Menu.Item name="mechs" active={false}>Mechs</Menu.Item>
                    <Menu.Item name="unitOrganisation" active={false}>Unit Organisation</Menu.Item>

                  </Menu>
                </Container>
                
            </div>
        );
    }
}

export default App;
