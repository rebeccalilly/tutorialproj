import React from 'react';
import './ReactTutorial.css';

const ReactTutorial: React.FC = () => {
  return (
    <div>
      <header style={styles.header}>
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
          alt="React Logo"
          style={styles.logo}
        />
        <h1>React Tutorial</h1>
      </header>
      <section style={styles.section}>
        <h2>Overview</h2>
        <p>
          React is a software that lets you build user interfaces out of individual pieces called components.
          React components are JavaScript functions. Putting JSX, which is a JavaScript syntax extension popularized by React, markup close to related rendering logic makes React components easy to create, maintain, and delete. It also adds uniformity making it easier to integrate into large projects.
        </p>
      </section>
      <section style={styles.section}>
        <h2>useState</h2>
        <p>
          The React useState Hook allows for tracking of state in a function component. In general, state refers to data or properties that need to be tracked in an application. You can import this by using <code>import {'{ useState }'} from "react";</code>. Then we initialize our state by calling useState in our function component.
        </p>
        <p>
          useState accepts an initial state and returns two values:
        </p>
        <ul>
          <li>The current state.</li>
          <li>A function that updates the state.</li>
        </ul>
      </section>
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  logo: {
    width: '50px',
    height: '50px'
  },
  section: {
    marginTop: '20px'
  }
};

export default ReactTutorial;
