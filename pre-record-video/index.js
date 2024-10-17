/* ##### <<<<<<<<<<< List of Pre-record video >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/* ####<< vs-51= >> <<< Epi-1 <<<<<<<<<     Express.js introduction  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/* ####<< vs-82 >>  <<< Epi-2 <<<<<<<<<     First Express.js Application  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-100 >> <<< Epi-3 <<<<<<<<<     Express.js Routing  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-157 >> <<< Epi-4 >>><<<<<<     4 Topic we need to focus >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/* ####<< vs-165 >> <<< Epi-5 >>><<<<<<     Response >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-209 >> <<< Epi-6 >>><<<<<<     String Response >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-230 >> <<< Epi-7 <<<<<<<<<<<   2. Response Status code (Epi-5 >>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-248 >> <<< Epi-8 <<<<<<<<<<<   3. JSON Reaponse >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-269 >> <<< Epi-9 <<<<<<<<<<<   4. Response Download >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-280 >> <<< Epi-10 <<<<<<<<<<   4. Response Redirect >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-298 >> <<< Epi-11 <<<<<<<<<<<  5. Response Header >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-315 >> <<< Epi-12 <<<<<<<<<<<  6. Response Set Cookies >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-333 >> <<< Epi-13 <<<<<<<<<<<  7. Response Clear Cookies >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-361 >> <<< Epi-14 <<<<<<<<<<<  Working with Request // get() = Post()>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/* ####<< vs-382 >> <<< Epi-15 <<<<<<<<<<<  Request get()  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-403 >> <<< Epi-16 <<<<<<<<<<<  Get Request with URL query  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-432 >> <<< Epi-17 <<<<<<<<<<<  Get Request Header  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-460 >> <<< Epi-18 <<<<<<<<<<<  Post Request  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-480 >> <<< Epi-19 <<<<<<<<<<<  Post Request with query  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-498 >> <<< Epi-20 <<<<<<<<<<<  Post Request Header  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/* ####<< vs-513 >> <<< Epi-21 <<<<<<<<<<<  Post Request JSON()  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-556 >> <<< Epi-22 <<<<<<<<<<<  Multipart form Data >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-587 >> <<< Epi-23 <<<<<<<<<<<  File upload >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-620 >> <<< Epi-24 // 25 // 26< Middleware >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-637 >> <<< Epi- 25 <<<<<<<<<<< Middleware => Application >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* ####<< vs-660 >> <<< Epi- 26 <<<<<<<<<<< Middleware => Application >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

/* ### 1. Keyboard open repository? <<<<<<<<<<<<>>>>>>>>>>>>>>>>
github porfile open 
+ repository open 
+ emty + keybord= ( . ) click to 
+ VS code */

/* ## 2. What is port create? >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let port = processenv.port || 9000 => by defalult access to keep */

/* ### 3. falseValue?<<<<<<<<>>>>>>>>>>>>>>>>>>>
=> 1. "" 
=> 2. undefined 
=> 3. null 
=> 4. NaN 
=>  5. 0 
=> 6. -0 */

/* ### VS-code :::
       Api check = Thunder Client */

/* ####>>>>><< Epi-1 <<<<<<<<< Express.js introduction  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*  Start */
/* ### What is Express.js?
   => This is server side web framwork for node. */
// => express .js Server site language
// => Node.js of Framwork in Express.js

/* ### Uses?
=> To Develop server side rest API for Mobile, Destrop, Web Application & IOT devices.
=> Using template engine with express you can develop complete web site or web application too.
=> You can use React, Vue, Angular with express to develop complete web site or web appliction.   */

/* ### What will be our learning strategy?
1. Express Rest API Development.
2. Working with templete engine and express together.
3. Working with React & Express.js together.
4. Deploy & Testign with Real server. */

/* ### Tools ? 
=> Node.js => VS-code => WebStrom => Postman */

//#### Prostman Websit login ?

//### Knowlege Required : => Node.js + javascript

//###### Express.js // Node.js code backend run
// send() => Response Body
// end() => Response ending
// res.write()
// res.JSON()

/* ####<<<< Epi-2 >>>>>>><<<<<<<<<<<<<<<<< First Express.js Application  >> installation >>>>>>>>>>>>>>>>>>>>>>>> */
//#### Package.jso file create =>>>  npm init --yes
//### To install Express ? ==>>>>>>>> npm install express --save  //#### package-lock-json
//### package.json ==>>>>> "express": "^4.19.2"

/* const express = require("express");
app = express(); // Application create // call express()


app.get("/", function (req, res) {      // forward / = Home page 
    res.send("Hello Express.js");
});

app.listen(5050, function () {
  console.log("Server runint Successful");
});
*/

/* ####<<<< Epi-3 >>>>>>><<<<<<<<<<<<<<<<< Express.js Routing  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
//### ("/about") =>
// ### localhost:8080/about => about - URI => short for “Uniform Resource Identifier”
// window / Browser Access -> get()

/* const express = require("express");
app = express();

app.get("/", function (req, res) {
    res.send("Home page");
});

app.get("/About", function (req, res) {
    res.send("About page");
});

app.get("/contact", function (req, res) {
    res.send("Contact page");
});

app.listen(8080, function () {
    console.log("Server successful");
}); */

// http://localhost:8080/about
// http://localhost:8080/contact
// http://localhost:8080/blog

//### postman -> checker <<<<< part-2 >>>>>>>>>>>>>>>>>>>>>>
//get => http://localhost:8080/servise
//post => http://localhost:8080/blog
//put => http://localhost:8080/about
//delete => http://localhost:8080/contact

/* const express = require("express");
app = express();

app.get("/", function (req, res) {
  res.send("Home page");
});

app.post("/About", function (req, res) {
  res.send("About page");
});

app.put("/blog", function (req, res) {
  res.send("blog page");
});

app.delete("/contact", function (req, res) {
  res.send("Contact page");
});

app.listen(8080, function () {
  console.log("Server successful");
}); */

/* ####<<<< Epi-4 >>>>>>><<<<<<<<<<<<<<<<< 4 Topic we need to focus >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* 
### 4 Topic >>>>>>>>>>>
1. Request 
2. Resposnse 
3. Middleware 
4. Database Operation */

/* ####<<<< Epi-5 >>>>>>><<<<<<<<<<<<<<<<< Response >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* 
##### Response kinds of 4 Topic. >>>>>>>>>part-1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
1. Response Body 
2. Response Header 
3. Response Statuse 
4. Response Cookies */

//#### Postman <<<< part-2 >> <<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* 1. Response Body >>>>>>> part-2.1 >>>>>>>>>>>>> 
=> json -> XML -> Text -> Auto */

/* 2. Response Header >>>>> part-2.2 >>>>>>>>>>>>>>
=> X-Powered-By 
-> Content-Type -
> Cotent-Langht 
-> ETag 
-> Data 
-> Connection 
-> Keep-Alive */

/* 3. Response Statuse >>>> part-2.3 >>>>>>>>>>>>>> 
/* URL : https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599) */

/* 4. Response Cookies >>>>>>>>>>>>> part-1-4>>>>>>>>>>>>>>>
=>  Response with cookies Data set  */

// #### part-2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* 
1. Get/Post Request --> String Response
2. Get/Post Request --> Response Status code 
3. Get/Post Request --> JSON Response
4. Get/Post Request --> Download Response
5. Get/Post Request --> Response Redirect
6. Get/Post Request --> Response Header
7. Get/Post Request --> Set Response Cookies
8. Get/Post Request --> Clear Response Cookies */

/* ####<<<< Epi-6 >>>>>>><<<<<<<<<<<<<<<<< String Response >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
// ##### 1. Get/Post Request --> String Response
// #####  send() => Response Body
// #####  end() => Response ending

/* let express = require("express");
app = express();

// String response get() // post()
app.get("/", function (req, res) {
  res.send("Home page");
});

app.post("/blog", function (req, res) {
  res.send("Blog page");
});

app.listen(9090, function () {
  console.log("Server is successful");
}); */

/* ####<<<< Epi-7 <<<<<<<<<<< 2. Response Status code (Epi-5 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
//@@@ status: 200 OK
/* let express = require("express");
app = express();

//@@@ res.status(200).end(|)
app.get("/", function (req, res) {
  res.status(401).end("Unauthourize.....");
});

app.post("/blog", function (req, res) {
  res.status(200).end("Continue...");
});

app.listen(9090, function () {
  console.log("Server is successful");
}); */

/* ####<<<< Epi-8 <<<<<<<<<<< 3. JSON Reaponse >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* let express = require("express");
app = express();

//@@@ res.json()
app.get("/", function (req, res) {
  let myJsonArray = [
    { naem: "Azizu", city: "Dhaka", occupation: "Developer" },
    { name: "Somn", city: "Shylt", occupation: "Developer" },
    { name: "Ashik", city: "Chigg", occupation: "Techer" },
    { name: "Shayan", city: "Brahmanbari", occupation: "Student" },
  ];
  res.json(myJsonArray);
});

app.listen(9090, function () {
  console.log("Server is successful");
}); */

/* ####<<<< Epi-9 <<<<<<<<<<< 4. Response Download >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* let express = require("express");
app = express();

//@@@ res.download() => VS-code =>  create folder = upload  => file
app.get("/download", function (req, res) {
  res.download("./uploads/man.avif");
});

app.listen(9090, function () {
  console.log("Server is successful");
}); */

/* ####<<<< Epi-10 <<<<<<<<<<< 4. Response Redirect >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* let express = require("express");
app = express();

//@@@ Response Redirect()
app.get("/bangladesh", function (req, res) {
  res.redirect("http://localhost:9090/india");
});

app.get("/india", function (req, res) {
  res.send("This is india");
});

app.listen(9090, function () {
  console.log("Server is successful");
}); */

/* ####<<<< Epi-11 <<<<<<<<<<< 5. Response Header >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* let express = require("express");
app = express();

//@@@ Header data add  => res.append()
app.get("/blog", function (req, res) {
  //key: name // value:'aziz'
  res.append("name", "Aziz");
  res.append("city", "Dhaka");
  res.append("age", "26 years old");
  
  res.status(201).end("Hello world");
});

app.listen(9090, function () {
  console.log("Server is successful");
}); */

/* ####<<<< Epi-12 <<<<<<<<<<< 6. Response Set Cookies >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* let express = require("express");
app = express();

//@@@ cookies --> res.cookie() => Storage > cookies > Link click > // Postman > cookies
app.get("/blog", function (req, res) {
  res.cookie("Name", "Azizl");
  res.cookie("City", "Dhaka");
  res.cookie("age", "27");

  res.end("Cookies set successs");
});

app.listen(9090, function () {
  console.log("Server is successful");
}); */

/* ####<<<< Epi-13 <<<<<<<<<<< 7. Response Clear Cookies >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
// #### http://localhost:9090/blog = from delete cookies
// #### http://localhost:9090/blog-1 => Coolies clear

/* let express = require("express");
app = express();

//@@@ cookies --> res.cookie() => Storage > cookies > Link click > // Postman > cookies
//
 app.get("/blog", function (req, res) {
  res.cookie("Name", "Azizl");
  res.cookie("City", "Dhaka");
  res.cookie("age", "27");
  
  res.end("Cookies set successs");
});

app.get("/blog-1", function (req, res) {
  res.clearCookie("Name");
  res.clearCookie("age");
  
  res.end("Cookies Clear successs");
});

app.listen(9090, function () {
  console.log("Server is successful");
}); */

/* ####<<<< Epi-14 <<<<<<<<<<< Working with Request // get() = Post()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/* #### Request Method
1. get()
2. post() 
3. put()
4. delete() */

/*@@@@ Request get() 
1. Create simple get request
2. Simple get request with URL Parameter
3. Catch Request Header simple Get Method 
*/

/*@@@@ Request post() 
1. Request
2. Request with URL parameter
3. Request Header
4. Reques JSON Body
5. Request Multipart form Data
6. Request File Upload
*/

/* ####<<<< Epi-15 <<<<<<<<<<<  Request get()  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*@@@@ Request get() 
1. Create simple get request
2. Simple get request with URL Parameter
3. Catch Request Header simple Get Method 
*/
// req.Header
// req.query
// req.body

/* let express = require("express");
app = express();

app.get("/blog", function (req, res) {
  res.end("This is simple get request");
});

app.listen(9090, function () {
  console.log("Server Success");
}); */

/* ####<<<< Epi-16 <<<<<<<<<<< Get Request with URL query  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

//#### http://localhost:9090/blog => ?firstName=Azizul&lastName=Hakim
/*  ? + firstName = Azizul & lastName = Hakim */
// query => 2 ta = firstName = lastName

/*@@@@ Request get() 
1. Create simple get request
2. Simple get request with URL Parameter
3. Catch Request Header simple Get Method 
*/
// req.Header
// req.query
// req.body

/* let express = require("express");
app = express();

app.get("/blog", function (req, res) {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;

  res.end(firstName + " " + lastName); // http://localhost:9090/blog?firstName=Azizul&lastName=Hakim
});

app.listen(9090, function () {
  console.log("Server Success");
}); */

/* ####<<<< Epi-17 <<<<<<<<<<< Get Request Header  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* let express = require("express");
app = express();

app.get("/", function (req, res) {
  let fullName = req.header("fullName");

  res.end(fullName);
});

app.get("/home", function (req, res) {
  let firstName = req.header("firstName");
  let lastName = req.header("lastName");

  res.end(firstName + " " + lastName);
});

// Postname Header access
app.get("/blog", function (req, res) {
  let Connection = req.header("Connection");

  res.end(Connection);
});

app.listen(9090, function () {
  console.log("Server Success");
}); */

/* ####<<<< Epi-18 <<<<<<<<<<< Post Request  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*@@@@ Request post() 
1. Request
2. Request with URL parameter
3. Request Header
4. Reques JSON Body
5. Request Multipart form Data
6. Request File Upload */

/* let express = require("express");
app = express();

app.post("/", function (req, res) {
  res.end("This is post mathods");
});

app.listen(9090, function () {
  console.log("Sercer success");
}); */

/* ####<<<< Epi-19 <<<<<<<<<<< Post Request with query  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
//## postman = Post +  body + param +
//URL =  http://localhost:9090?firstName=Azizul&lastName=Hakim

/* let express = require("express");
app = express();

app.post("/", function (req, res) {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;

  res.end("My Name is " + firstName + " " + lastName);
});

app.listen(9090, function () {
  console.log("Server Successfuly");
}); */

/* ####<<<< Epi-20 <<<<<<<<<<< Post Request Header  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* let express = require("express");
app = express();
// postman = header + userName = Azizul hakim + password = 2835798023
app.post("/", function (req, res) {
  let userName = req.header("userName");
  let password = req.header("password");

  res.end("Username: " + userName + " " + "Password: " + password);
});

app.listen(9090, function () {
  console.log("Server Successfuly");
}); */

/* ####<<<< Epi-21 <<<<<<<<<<< Post Request JSON()  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
//#### Body-parser-npm = packages  => https://www.npmjs.com/package/body-parser
// vs-code install => npm install body-parser

/* let express = require("express");
//vs code install =>  npm install body-parser
let bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json());

app.post("/", function (req, res) {
  let jsonData = req.body;
  
  let name = jsonData["name"];
  let city = jsonData["city"];
  
  res.send(name + " " + city);
});

app.listen(9090, function () {
  console.log("Server Successfuly");
}); */

//##### Postman + body + row + json ><<<<<<<<<<<<<<<<<<
/* {
  "name": "Azizul hakim",
  "city": "Dhaka"
} */

//@@@@  postman jsonStringify (Result) => {"name":"Azizul hakim","city":"Dhaka"}   /// Support
/* app.post("/", function (req, res) {
  let jsonData = req.body;
  let jsonStringify = JSON.stringify(jsonData);
  
  res.send(jsonStringify);
  
}); */

//##### Vs code = > :
/* let name = jsonData["name"];
let city = jsonData["city"];  // Answer : Azizul hakim Dhaka */

/* ####<<<< Epi-22 <<<<<<<<<<< Multipart form Data >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
//## multer installation
// => https://www.npmjs.com/package/multer
//vs cod =>  Multipart from Data = npm install --save multer

/* let express = require("express");
let multer = require("multer");

let app = express();
let multer1 = multer();

app.use(multer1.array());
app.use(express.static("public"));

app.post("/", function (req, res) {
  let jsonData = req.body;
  
  res.send(JSON.stringify(jsonData));
});

app.listen(9090, function (req, res) {
  console.log("Server site successful");
}); */

/* ####  postman = params = form-data 
=> name = Azizul hakim 
=> city = Dhaka 

Answer : {"name":"Azizul hakim","city":"Dhaka "}
*/

/* ####<<<< Epi-23 <<<<<<<<<<< File upload >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
//#### Api check = Thunder Client
const express = require("express");
const multer = require("multer");

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, callBack) {
    callBack(null, "./uploads");
  },
  filename: function (req, file, callBack) {
    callBack(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("fileName");

app.post("/", (req, res) => {
  upload(req, res, function (error) {
    if (error) {
      res.send("file upload is faild");
    } else {
      res.send("file upload success");
    }
  });
});

app.listen(3000, () => {
  console.log("Server is success!");
});

/* const express = require("express");
const multer = require("multer");

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, callBack) {
    callBack(null, "./uploads");
  },
  filename: function (req, file, callBack) {
    callBack(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("myfile");

app.post("/", function (req, res) {
  upload(req, res, function (error) {
    if (error) {
      res.send("file upload fail");
    } else {
      res.send("file upload success");
  }
  });
});

app.listen(9090, function () {
  console.log("Server successsfuly");
}); */

/* ####<<<< Epi-24 // 25 // 26 <<<<<<<<<<< Middleware >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/*
###### Request ---------- Meddleware ----------- Respons 
#### Use of Middleware?
1. User agent check, valid request check
2. Authentication, Authorization, Verification
3. Request Liming => Tourch actact =>  1 minute = 5,000 request accepted 
4. And other's security measures
*/

/* 
##### Middleware Placing?
1. Application = one medddleware All Request + Response  worked => full application 1 meddleware 
2. Route level => multiple class work
*/

/* ####<<<< 25 <<<<<<<<<<< Middleware => Application >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* let express = require("express");
let app = express();

app.use(function (req, res, next) {
  console.log("I am application level middleware");
  next();
}); // Middleware => req----(next)Middleware-----res

app.get("/", function (req, res) {
  res.send("Home page");
});
app.get("/about", function (req, res) {
  res.send("About page");
});
app.get("/contact", function (req, res) {
  res.send("Contact page");
});

app.listen(9090, function () {
  console.log("Server successful");
}); */

/* ####<<<< Epi- 26 <<<<<<<<<<< Middleware => Application >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
/* let express = require("express");
 let app = express();

app.get("/", function (req, res) {
  res.send("Home page");
});
app.get("/about", function (req, res) {
  res.send("About page");
});

app.use("/contact", function (req, res, next) {
  console.log("I am application level middleware");
  next();

}); // Middleware => req----(next)Middleware-----res
app.get("/contact", function (req, res) {
  res.send("Contact page");
});

app.listen(9090, function () {
  console.log("Server successful");
}); */

/* END */

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Anisul Islam (EXpress.js) >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//### 1. npm init --y
//### 2. npm install express
//### 3. npm install nodemon
//### 4. npm install body-parse

/* const express = require("express");
const app = express();
const port = 9090;

//BodyParser used >>>>>>>>>>>>>
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Get methods => html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});
app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});

//Post methods => body received ??
app.post("/triangle", (req, res) => {
  const height = req.body.height;
  const base = req.body.base;
  const area = 0.5 * base * height;
  res.send(`<h2>Area of Triangle is : ${area}</h2>`);
  res.end();
});
app.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const area = Math.PI * radius * radius;
  res.send(`<h2>Area of Circle is : ${area}</h2>`);
  res.end();
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}); */
//Ans: Server is running at http://localhost:9090
