import React, { Component } from 'react';
import './App.css';
import Shape from 'rollup-starter-lib';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <header className="App-header">
            <Shape
              color="crimson"
              left={{ angle: false }}
              right={{ angle: false }}
              top={{ angle: false }}
            >
              <h1>Irregular shapes</h1>
            </Shape>
          </header>
          <main className="App-main">
            <div className="App-padding">
              <Shape
                padding={'.5rem'}
              >
                <div className="App-padding">
                  <p>Props.</p>
                  <p>
                    <code>
                      <pre>
                        const props = &#123;,<br/>
                        sides: false false true false<br/>
                        bottom:     true  | left  | right,<br/>
                        left:       true  | top   | bottom,<br/>
                        right:      true  | top   | bottom,<br/>
                        top:        true  | left  | right,<br/>
                        background: color,<br/>
                        children:   function,<br/>
                        color:      color,<br/>
                        fill:       color | linear-gradient,<br/>
                        inset:      size,<br/>
                        padding:    size,<br/>
                        &#125;<br/>
                        &lt;Shape &#123;...&#123;...props&#125;&#125;&gt;
                      </pre>
                    </code>
                  </p>
                  <p>Can't decide if I like this font or not.</p>
                </div>
              </Shape>
            </div>
          </main>
          <footer className="App-footer">
            <Shape
              bottom={{ angle: false }}
              color="crimson"
              left={{ angle: false }}
              right={{ angle: false }}
            >
                <p>License</p>
            </Shape>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
