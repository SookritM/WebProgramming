#Thursday, January 19th: Course Introduction
* Course wait-list
* Why (still) the web?  Why are you here?
* Motivation 1, the first web page (1992): http://info.cern.ch/hypertext/WWW/TheProject.html
* Motivation 1A: http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html
* Motivation 2: http://www.dolekemp96.org/
* Administrativa
* How two computers talk to each other: basic networking
* The Internet vs the World Wide Web

#Tuesday, January 24th: HTTP
* PSA on sexual harassment
* Last class: the big ideas?
* Recall telephone conversation example
* Telephone extension numbers
* So what is the web?
* Two special computers: web server and web client
* URLs:
  `protocol://domain/<any directories here>/<filename>`
* The big idea of HTTP, how the web works: request-response, similar to Q&A
* Examining HTTP requests and responses on Reddit...
* HTTP commands: GET and POST
  - GET: Download data
  - POST: Upload data, send data to web server
* Demo: Web server
* Q: How to browse web without web browser?
  
#Tuesday, January 26th: HTML
* Last class: recall how HTTP works
* Recall question: if no port number is provided, the default port number to connect to on web server is...?
* Recall question: what HTTP command is executed when entering URL address?
* Recall question: if no file is provided in URL, the file with what name is generally served by default?
* To ponder: the best status code to use...?
* Take a look at the HTML
* What is markup?
  - The paragraph analogy
* Motivation: writing
* Block vs. inline elements
* Attributes
* Image --a special tag...
* Anchors
* Absolute vs relative URLs
* What's wrong with the HTML?
* W3C validator

#Tuesday, January 31st: Revision Control with Git
* Last class: HTML => for the content, for document appearance and behavior, W3C validator
* Last class: Two major types of HTML body elements: block level and inline
* Recall question: difference between absolute and relative URLs --which to use for portability?
* Recall question: why is the `alt` attribute necessary for images?
* What I am NOT going to do: discuss every HTML tag
* What is important to discuss: the finer points of HTML
  - #fail
  - Recall last class: what's peculiar about HTML? (hints: closing tags, attributes, nesting)
  - Commandments
* Question: _how do you build a web browser?_
* What I've noticed in the past: many connecting to Tufts CS to do work via SSH, questions on submitting assignments and labs in this class, how to upload web pages to a server
* About file permissions and the HTTP response status code 403
* The nightmare scenario that illustrates the need for revision control: in the past...
* What if I need to hire developers to work on different pieces of a projet?
* Why revision control? Keep track of changes, document changes
* Why Git? Speed, no dependency of a remote server (unlike Subversion)
* Why GitHub for repositories? Network effect
* Example with our course website
* IMPORTANT: you are not expected to master Git by the end of this course.  The reality, even for the most seasoned people: https://twitter.com/ErrataRob/status/707327952158121984

#Thursday, February 2nd: Cascading Style Sheets (CSS)
* Why do you want to separate style?
* One CSS _rule_ is made up of _selectors_ and _declarations_. A declaration is a _property-value_ pair.
  - You really want to refer to a CSS cheat sheet!
* Three types of selectors: HTML tag names, ID, class
  - ID: should only be used once; starts with "#"
  - class: can be used many times; start with "."
  - Mixing IDs and classes is confusing, generally not a good idea.
  - "id" and "class" attribute exist for all HTML elements
  - Generic block HTML element: div
  - Generic inline HTML element: span
* Box model for HTML body elements
* The "cascading" in "cascading style sheet"
  - What if there is more than one style specified for an HTML element?

#Tuesday, February 7th: Responsive Design
* Last class: CSS
* Why CSS?  What do they give you?
* Recall: id vs class
* Recall: what is cascading?
* Loading additional stylesheets
* Today: mobile
* Take out your phone or mobile device.  Go to...
* How mobile web browsers work: render pages in a virtual window (i.e., the viewport), usually wider than the screen, so they don't need to squeeze every page layout into a tiny window. Users can pan and zoom to see different areas of the page.  That is, a mobile browser it will assume that you are viewing a desktop experience and that you want to see all of it.
* `<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />` => your layout will be displayed properly at 1:1 scale.  No zooming will be applied.
* So can I have a different stylesheets for different screen sizes and devices?
  - http://broadcast.oreilly.com/2010/04/using-css-media-queries-ipad.html
* Can I have different rules in a CSS for different screen sizes (e.g., widths)?
* Gmail in the news recently: http://googleappsdeveloper.blogspot.com/2016/09/your-emails-optimized-for-every-screen-with-responsive-design.html
* Your next lab
* Why this technique?

#Tuesday, February 14th: JavaScript
* So far, we have covered quite a bit: HTTP, HTML, CSS, Git
* What are the problems and limitations with just HTML and CSS?
* HTTP: stateless protocol, no memory of previous requests
* In the early 90s, "Netscape quickly realized that the Web needed to become more dynamic. Even if you simply wanted to check that users entered correct values in a form, you needed to send the data to the server in order to give feedback." http://speakingjs.com/es5/ch04.html
* Our focus is still on the client-side
* Variables: dynamic typing but will be one of the following: number, string, array, object, boolean
  - Three states of a variable: (1) not set yet (undefined), (2)set to nothing (null), (3) set to a valid value
* Operations: "+" is interesting
* Function arguments: (1) too many: extras ignored, (2) too few: remainders get an undefined value
* Lists (a.k.a., arrays)
* _(Almost)_ everything in JavaScript is an object_ https://stackoverflow.com/questions/9108925/how-is-almost-everything-in-javascript-an-object

#Thursday, February 16th: Functions in JavaScript
* Last class: JavaScript data and data structures (lists and dictionaries)
* Recall: almost everything in JavaScript is a/an ______
* Too many built-in JavaScript objects to name: string, Date, Math
* Special object in JavaScript: the associative array a.k.a., dictionary a.k.a., hash a.k.a., finite map
* So what about functions?
* Who is in COMP 105 currently or have taken COMP 105?
* What if I told you functions can be used as values to variables? Functions as arguments to functions? That's what it means by functions as first-class!
* Consider example at http://www.joelonsoftware.com/items/2006/08/01.html
* Recall Algebra: function composition
* Why is this a powerful idea?
  - Reduce repetitive code
  - More reusable and scalable code
  - "Object Oriented Programming" in JavaScript
  - Example: `apply` https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
* Is this idea that important in JavaScript? Yes, not only in JavaScript but in many languages and frameworks as well
  - Events
  - Callbacks (e.g., working with the GPS)
  - Asynchronous communications (e.g., downloading data from the web within a running app)
* Okay, but how do I use JavaScript in an HTML page?  Or how do I dynamically modify a loaded HTML page using JavaScript?

#Tuesday, February 21st: Document Object Model (DOM)
* Last class: first class functions
* Today: the "var" keyword, using JavaScript in an HTML page
* The big idea: using JavaScript to dynamically modify HTML content _after it is loaded_.  Yes, you can mix HTML and JavaScript
* We will apply the idea of first class functions
* Definition: event
* The document object: a JavaScript object that contains the entire structure of an HTML page after it is loaded, in tree-like format (thus, known as the Document Object Model tree).  Example of a DOM tree: https://developer.mozilla.org/en-US/docs/Using_the_W3C_DOM_Level_1_Core
* Example 1: Tufts FML
* Example 2: Prepending
  `// The idea: create a new node and prepend to the first node in the "content" div
        newElem = document.createElement("p");
        newElem.innerHTML = '<p><span class="message">' +theMessage + " #FML</span></p>";
        toUpdate.insertBefore(newElem, toUpdate.childNodes[0]);`
* A powerful idea: update the HTML based on events
* Example 3: Highlighting paragraphs in an HTML document
* Example 4: Double Rainbow
* Nex time: even more powerful idea: update the HTML with data from a web server
* Your next lab
* Your Assignment 2

#Tuesday, February 28th: Asynchronous, XMLHttpRequest
* Last class: events, modifying HTML after it is loaded using JavaScript via DOM
* Last class + this week: you will start to see _why_ first class functions and JavaScript objects are so important
* This week: asynchronous, limitations of JavaScript
* So far, you have only worked with synchronous communications. Problem: slow, linear, "locking", not smooth
* The bigger idea: asynchronous communications.  Where it is used: events
* Real example: Twitter timeline.  Take a look at number of requests made _after page is loaded_
* Another real example: email in the past vs Gmail
* Are async and events the same? No. Are they related? Yes --almost all event handling functions are asynchronous.
  - Asynchronous: "where data can be transmitted intermittently rather than in a steady stream"; not going at the same rate
  - Are they the same? No. Are they related? Yes --almost all event handling functions are asynchronous.
* The idea of XMLHttpRequest => make a request to a server-side script to get data, manage the response
* XHR key methods and attributes: `open()`, `send()`, `onreadystatechange`, `status`, `readyState`, `responseText`
* The data that now typically get back in the `responseText`: JSON
* Client-side JS is heavily event-based
* Examples of async APIs in JavaScript: `navigator.geolocation.getCurrentPosition()`, `XMLHttpRequest`
* Finishing up on the XMLHttpRequest example:
  - Asynchronous
  - The event: onreadystatechange.  The readyState values:
    - 0 => The request is not initialized
    - 1 => The request has been set up
    - 2 => The request has been sent
    - 3 => The request is in process
    - 4 => The request is complete
* Parsing the JSON data
* Is checking for readyState 4 good enough?  NO!
* Caveats with XMLHttpRequest and one of the limitations of client-side JavaScript
* JSON: Data exchange format (think text file).  JSON is string, NOT JavaScript objects.
* Why JSON?
* Example
* Limitations of Client-Side JavaScript:
  - Client-side tasks (or what you can do with client-side JavaScript)
    - Dynamically modify browser content, e.g., with animation
    - Dynamically fetch new documents from servers
    - Allow new methods of user interaction other than links and buttons
    - Get information about a user's computer (navigator.userAgent)
  - Limitations of client-side scripts
    - Other people cannot access data or information that you have (i.e., you can't make responses)
    - Can't to write to files on disk
    - You are constrained by web browser (i.e., browser incompatibility issues)
    - Storage constraints (e.g., cookies, local storage)
    - Security issues (e.g., same origin policy)
    - View source