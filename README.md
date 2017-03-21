# [Goal #194: Postalicious - Demystifying HTTP](http://jsdev.learnersguild.org/goals/194-Postalicious-Demystifying_HTTP.html)
![screen shot 2017-03-20 at 2 37 40 pm](https://cloud.githubusercontent.com/assets/17223371/24123180/c791805a-0d7b-11e7-89bc-d2423a0d4b94.png)

Build a loose clone of the Postman extension for Google Chrome. Let’s go early aughts style and call it… Postalicious.

Postalicious is an app that lets you send custom HTTP requests to a server and inspect both the request and the response messages. In this way, it lets you control things like request parameters, headers, and the message body, and then you can see the raw response from the server.

Here’s a wireframe of the Postalicious interface that you can use to design around:

postalicious

In order to give Postalicious something to practice on, you’ll also build a simple HTTP server using Node.js and Express (we’ll just call this the “sandbox server”). This server won’t do much, but it will provide a range of response to different kinds of requests so that your Postalicious app has a good sandbox to play with.

If you are brand-new to HTTP, or just a little rusty, it is highly recommended that you go through some or all of the courses and tutorials in the resources section. Don’t limit yourself to just these resources — there are lots of good learning materials on the web — but these at least should put you on more solid footing.

It is recommended that you build the sandbox server first, and then the Postalicious app after.

Finally, as a stretch exercise, use Postalicious to send requests to a real-world web API.
Context

HTTP is what makes the web work. Well, it’s part of what makes the web work. Knowing what it is and how it works is important for any web developer, because it makes everything else that is built on top of HTTP easier to understand, debug, and make sense of.

In this goal, you’ll become familiar with terms like request, response, client, server, status code, protocol, header, body, and HTTP verb. You’ll also have to deal with the parts of a URL (Uniform Resource Locator): the protocol, host, port, (resource) path, and query.

That may sound like a lot of vocabulary words. It is. But these are the building blocks of the web - if you don’t know what they mean, this is a perfect opportunity to find out!

The good news is that HTTP is really not hard to work with - it’s built to be human-readable. The following message is an abridged, but not unrelated, version to what your browser sends every time you search for “hedgehog” on Google:

GET /search?q=hedgehog HTTP/1.1
Host: www.google.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36
Accept: text/html

Let’s break that down quickly and put some of those vocabulary words to use. If you read it left-to-right, top-to-bottom, it can be interpreted like this:

    (1st line): Send a request using the GET method/verb to the path /search with a query string containing one key q having the value hedgehog, using version 1.1 of the hypertext transfer protocol (HTTP).
    (2nd line): In the header, specify the host to send this request to the server at www.google.com*.
    (3rd line): Include a user agent key in the header to identify the client as a Chrome browser operating on a Mac computer running OSX 10.12.3.
    (4th line): Use the accept key in the header with the value text/html to tell the server which content types (also called MIME types) the client can understand so that it sends the appopriate type in the body of the response message.
    (5th line): Leave a blank line to signal the end of the message.

*Implied in this message is the fact that this request will be sent to port 80 because this is the default for HTTP requests.

If that all sounds like ancient Greek to you, never fear. If you take it one step at a time and dive into each concept, experiment with it in your code, and do your proper research, you’ll get to a place where the above makes perfect sense.
Specifications

General

    The artifact produced is a repo with at least two sub-folders: postalicious/ and sandbox-server/.
    The artifact produced is properly licensed, preferably with the MIT license.

Sandbox Server

    Can run the command npm run sandbox-server (or npm run sb, if you want to save some typing) to start the sandbox web server at port 3000.
    The sandbox server source code is written using the Express library.
    Sending a GET request to the path / responds with…
        a 200 (OK) status code
        a plain-text response body with the content Welcome to Sandbox!
        the Content-Type header set to text/plain
    Sending a GET request to the path /search?q=doodads responds with…
        a 200 (OK) status code
        a plain-text response body with the content You searched for: "doodads" (it doesn’t need to actually do any searching, just return the plain text)
        the Content-Type header set to text/plain
    Sending a GET request to the path /search responds with…
        a 400 (Bad Request) status code
        a plain-text response body with the content You didn't provide a search query term :(
        the Content-Type header set to text/plain
    Sending a POST request to the path /things with a plain text body flying car responds with…
        a 201 (Created) status code
        a plain-text response body with the content New thing created: "flying car"! (it doesn’t need to actually create anything, just return the plain text)
        the Content-Type header set to text/plain
    Sending a GET request to the path /somefile with an Accept header of text/plain responds with…
        a 200 (OK) status code
        a plain-text response body with the content This is a plain text file
        the Content-Type header set to text/plain
    Sending a GET request to the path /somefile with an Accept header of text/html responds with…
        a 200 (OK) status code
        an HTML response body with the content <!DOCTYPE html><html><body>This is an HTML file</body></html>
        the Content-Type header set to text/html
    Sending a GET request to the path /myjsondata with an Accept header of application/json responds with…
        a 200 (OK) status code
        an HTML response body with the content { "title": "some JSON data" }
        the Content-Type header set to application/json
    Sending a GET request to the path /old-page responds with…
        a 301 (Moved Permanently) status code
        the Location header set to http://localhost:3000/newpage
    Sending a POST request to the path /admin-only responds with a 403 (Forbidden) status code
    Sending a GET request to the path /not-a-page responds with a 404 (Not Found) status code
    Sending a GET request to the path /server-error responds with a 500 (Internal Server Error) staus code

Postalicious

    Can run the command npm run postalicious (or npm run pl, if you want to save some typing) to start the Postalicious app at port 3001.
    Users can visit the main page of the Postalicious site at http://localhost:3001.
    Main page has three main sections:
        Request builder HTML form
        Raw HTTP request
        Raw HTTP response
    When a user fills out the HTML form and clicks a “Send” button…
        The raw HTTP request is generated and shown
        The HTTP request is sent, and the raw response message is shown
    Users can fill out an HTML form to specify HTTP request details.
    Submitting the form will send the request according to the specified details.
    Using the HTML form, users can specify…
        host and path
        HTTP verb/method
        query parameter keys + values
        header keys + values
        request body

Stretch

Use the stretch goals to go deeper into the nuts and bolts of HTTP.

    Sandbox server is written using only the core Node.js modules (instead of Express, use the built-in HTTP module).
    Users of Postalicious can “save” their requests in a history panel
    Clicking on a saved request will re-load it into the form
    Using Postalicious, create some HTTP requests to various real-world APIs:
        Get all issues for a repo through the GitHub API
        Get all tweets with the hashtag #javascript with the Twitter API
        Any other API request(s) of your choice
        External HTTP requests are saved in files under a example-requests/ directory (make sure to obscure any secure information before saving these files, like your password or authentication token)

Quality Rubric

Well formatted code

    Code uses a linter, which can be invoked with a command (e.g. npm run lint). [50 points]
    Running the linter on all source code files generates no linting errors. [50 points]

Clear and useful README

    Repository includes a README file with installation and setup instructions. [25 points]
    Repository includes a README file with usage instructions and at least one example use case. [25 points]

Proper dependency management

    There is a command to install dependencies (e.g. npm install) and it is specified in the installation and setup instructions of the README. [50 points]

Good project management

    Commit messages are concise and descriptive. [25 points]
    All features are added via pull requests. [25 points]
    Every pull request has a description summarizing the changes made. [25 points]
    Every pull request has been reviewed by at least one other person. [25 points]

Resources
Courses and Tutorials

    Treehouse course on HTTP Basics (67-minute Development Tools Course)
    Overview of HTTP from NTU Singapore
    Tips on HTTP from Tuts+
    Beginner’s Guide to HTTP and REST from Tuts+
    Mozilla Developer Network’s Guide to HTTP
    30 min course on the Basics of HTTP

Tools

    Postman is a nice GUI for building HTTP requests
    curl is a super useful tool for making HTTP requests from the command line

