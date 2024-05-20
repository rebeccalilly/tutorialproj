import "./howtocss.css";

const Howtocss = () => {
  return (
    <div className="app">
      <header>
        <h1>DCS S33 - CSS</h1>
      </header>

      <div className="explanation">
        <h2>What is CSS?</h2>
        <p>
          CSS stands for Cascading Style Sheets. It is a language used for
          describing the presentation of a document written in HTML.
        </p>
        <p>
          CSS is used to style HTML elements on a webpage. It defines how these
          elements should be displayed to the user. CSS gives web developers
          control over visual aspects of a webpage, including its layout,
          colors, fonts, spacing, and overall design.
        </p>
      </div>

      <div className="example">
        <h2>Simple Example</h2>
        <p>Let's say you have a paragraph element in HTML:</p>

        <pre>{`<p>Hello, world!</p>`}</pre>
        <p>You can use CSS to change its color to blue:</p>
        <pre>
          {`p {
  color: blue;
}`}
        </pre>
        <p>In addition, you can use CSS to make it bold:</p>
        <pre>
          {`p {
  color: blue;
  font-weight: bold;
}`}
        </pre>
        <p>Now, the paragraph will appear in blue and bold on the webpage:</p>
        <p className="example__text">Hello, world!</p>
      </div>
      <div className="example">
        <h2>How to add CSS to HTML code?</h2>
        <pre>
          {`<head>
                <title>Appears in Tab</title>
		<link rel="stylesheet" href="style.css"/>
</head>`}
        </pre>
      </div>
      <div className="example">
        <h2>What is the difference between id and class?</h2>
        <p>
          Id is meant for a single element on the page, while class is meant to
          be used for multiple elements on the page.
        </p>
        <ul>
          <li>To use id in css files, developers can use #</li>
          <li>To use class in css files, developers can use . (dot)</li>
        </ul>
      </div>
      <div className="example ulist">
        <h2>Essential commands to get started with CSS</h2>
        <ul>
          <li>color</li>
          <li>background-color</li>
          <li>font-family</li>
          <li>font-size</li>
          <li>text-align</li>
          <li>margin</li>
          <li>padding</li>
          <li>border</li>
          <li>display</li>
        </ul>
      </div>
    </div>
  );
};

export default Howtocss;
