import React, { Component } from 'react';
import './App.css';
import Shape from 'rollup-starter-lib';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <header className="App-header">
            <div className="App-padding">
              <Shape
                color="midnightblue"
              >
                <div className="App-padding">
                  <h1>Garth's irregular shapes</h1>
                </div>
              </Shape>
            </div>
          </header>
          <main className="App-main">
            <Shape
              color="midnightblue"
              left={{ angle: false }}
              right={{ angle: false }}
            >
              <div className="App-padding">
                <Shape
                  background="midnightblue"
                  color="steelblue"
                  padding={'.5rem'}
                >
                  <div className="App-padding">
                    <p>Example children.</p>
                  </div>
                </Shape>
              </div>
            </Shape>
          </main>
          <footer className="App-footer">
            License
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
