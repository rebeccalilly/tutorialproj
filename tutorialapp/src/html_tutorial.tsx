import "./html_tutorial.css";

function Mainpage() {
  return (
    <div className="mainpage">
      <div>
        <h1>HTML</h1>
      </div>
      <div className="basepage">
        <div className="box">
          <h2 id="banner">What is HTML?</h2>

          <p>
            HTML is a markup language that uses tags to define the structure of
            a web page. These tags are enclosed in angle brackets "&lt; &gt;"
            and come in pairs, consisting of an opening tag and a closing tag.
            The content included between these tags is what appears on the web
            page.
          </p>
        </div>
        <div className="box">
          <h2 id="banner">Basic HTML Structure:</h2>

          <img
            src="https://i.pinimg.com/736x/0e/42/ac/0e42ac51a917ee4ccfc81412f8dc9ac3.jpg"
            alt=""
          />
        </div>
        <div className="box">
          <h2 id="banner">Key HTML Elements:</h2>

          <p>
            <pre>
              <ul>
                &lt;html&gt;: This is the root element that wraps all content on
                the web page.
              </ul>
              <ul>
                &lt;head&gt;: This element contains information about the
                document, such as the title and links to external resources.
              </ul>
              <ul>
                &lt;title&gt;: The title element specifies the title of the web
                page displayed in the browser's title bar or tab.
              </ul>
              <ul>
                &lt;body&gt;: This is the main content area of the web page.
              </ul>
              <ul>
                &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, etc.: These are heading tags
                used to define headings of different levels.
              </ul>
              <ul>
                &lt;p&gt;: This element is used to define paragraphs of text.
              </ul>
            </pre>
          </p>
        </div>
        <div className="box">
          <h2 id="banner">Creating Your First HTML Page:</h2>

          <p>
            To create your own HTML page, all you need is a simple text editor
            such as Notepad (for Windows) or TextEdit (for macOS). Save your
            file with a .html extension, and you're ready to go!
          </p>
        </div>
        <div className="box">
          <h2 id="banner">Learning HTML:</h2>

          <p>
            There are numerous resources available online to learn HTML,
            including tutorials, guides, and interactive courses. Websites such
            as W3Schools, MDN Web Docs, and Codecademy offer comprehensive
            lessons for beginners and advanced users alike.
          </p>
        </div>
        <div className="box">
          <h2 id="banner">Get Started Today!</h2>

          <p>
            Now that you have a basic understanding of HTML, why not try
            creating your web page? Experiment with different tags and elements
            to see how they affect the layout and structure of your content. The
            possibilities are endless, and the web is waiting for your
            creativity to shine!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
