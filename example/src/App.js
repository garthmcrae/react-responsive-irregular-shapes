import React, { Component } from 'react';
import './App.css';
import Shape from 'react-responsive-irregular-shapes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <Shape
              background="darkslategray"
              color="white"
              insetBottom={`right`}
              padding={`2rem 1rem 4rem`}
          >
            <div className="container">
              <h1>React responsive irregular shapes</h1>
            </div> 
          </Shape>
        </header>
        <main className="main">
          <div className="container">
            <h2>Installation</h2>
            <p>Using npm.</p>
            <p><code>npm install react-responsive-irregular-shapes --save</code></p>
            <h2>Features</h2>
            <div className="layout">
              <div className="cell">
                <Shape inset={`right top`} padding={`.5rem`}>
                  <div className="margin">
                    <h3>Responsive</h3>
                    <p>Shapes maintain irregularity when increasing and decresing in size on both X and Y axis.</p>
                  </div>
                </Shape>
              </div>
              <div className="cell">
                <Shape inset={`right bottom`} padding={`.5rem`}>
                  <div className="margin">
                    <h3>Irregular</h3>
                    <p>Configurable padding and insets for individual sides or pass shorthand values (see below).</p>
                  </div>
                </Shape>
              </div>
              <div className="cell">
                <Shape inset={`left bottom`} padding={`.5rem`}>
                  <div className="margin">
                    <h3>Shapes</h3>
                    <p>Easily configure quadrilaterals, trapezia (trapezoids) and parrallelograms.</p>
                  </div>
                </Shape>
              </div>
            </div>
          </div>
          <Shape insetBottom={`right`} insetTop={`right`} padding={`3rem 0`}>
            <div className="container">
              <h2>Usage</h2>
              <p>Examples below of usage.</p>
              <h3>Shorthand</h3>
              <pre><code>
&lt;Shape<br />
&nbsp;&nbsp;background="darkslategray"<br />
&nbsp;&nbsp;color="lightskyblue"<br />
&nbsp;&nbsp;insetBottom="right"<br />
&nbsp;&nbsp;padding="2rem 1rem 4rem"<br />
&gt;<br />
&nbsp;&nbsp;...<br />
&lt;/Shape&gt;<br />
              </code></pre>
              <h3>Long hand</h3>
              <pre><code>
&lt;Shape<br />
&nbsp;&nbsp;background="darkslategray"<br />
&nbsp;&nbsp;color="lightskyblue"<br />
&nbsp;&nbsp;insetBottom="right"<br />
&nbsp;&nbsp;padding="2rem 1rem 4rem"<br />
&gt;<br />
&nbsp;&nbsp;...<br />
&lt;/Shape&gt;<br />
              </code></pre>
              <h3>Mixed</h3>
              <pre><code>
&lt;Shape<br />
&nbsp;&nbsp;background="darkslategray"<br />
&nbsp;&nbsp;color="lightskyblue"<br />
&nbsp;&nbsp;insetBottom="right"<br />
&nbsp;&nbsp;padding="2rem 1rem 4rem"<br />
&gt;<br />
&nbsp;&nbsp;...<br />
&lt;/Shape&gt;<br />
              </code></pre>
            </div>
          </Shape>
          <div className="container">
            <h2>Properties</h2>
            <p><code>
              background = `whitesmoke`,<br />
              children,<br />
              color = `darkslategray`,<br />
              className = `Shape`,<br />
              display = `block`,<br />
              fill = `white`,<br />
              inset = `1rem`,<br />
              insetTop = inset,<br />
              insetRight = inset,<br />
              insetBottom = insetTop,<br />
              insetLeft = insetRight,<br />
              padding = `1rem`,<br />
              paddingTop = padding,<br />
              paddingRight = padding,<br />
              paddingBottom = paddingBottom,<br />
              paddingLeft = paddingRight,<br />
              position = `relative`,<br />
            </code></p>
          </div>
        </main>
        <footer className="footer">
          <Shape
              background="darkslategray"
              color="white"
              insetTop={`right`}
              padding={`2rem 1rem 1rem 1rem`}
          >
            <div className="container">
              <p><a href="https://opensource.org/licenses/MIT">MIT licence</a> . <a href="https://github.com/garthmcrae/react-responsive-irregular-shapes">Github</a></p>
            </div>
          </Shape>
        </footer>
      </div>
    );
  }
}

export default App;
