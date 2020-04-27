const express = require("express");
const routes = require("./routes/api"); // Import routes from the routes folder

var cors = require("cors"); // Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.

const app = express();

app.use(cors());

app.use(express.json()); //  useNewUrlParser: true, useFindAndModify: false
/*  
This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option.
*/

app.use(express.urlencoded({ extended: true }));
/*
Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.
A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body). This object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).
*/

app.use("/", routes); // Use Api routes in the App

app.listen(4004, function () {
	// Launch app to listen to specified port

	console.log("now listening for requests");
});
