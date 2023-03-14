# startup
CS 260 Startup Project


#First edit from vscode

#First edit from github

#Conflict from VS

#I learned that vs code is pretty nifty. I'd always made things harder going through the command line over and over, but it was all right here!
#I also learned that it is still a learning curve. I struggled with resolving the conflict and ended up doing an empty commit to github wich somehow fixed it. Idk, but it worked. 
#Overall, happy to know about this!


Elevator Pitch:
My idea is to create an application to test reflexes. The basic idea is the screen is a mono-color grid. At intervals, one randomized grid square would change color. The user would click in that square as fast as possible and the application would time their response. The user could choose a setting from “Easy” (2x2 grid) to “Hard” (100x100 grid). They could choose the color of the random tile from a provided list. They could choose how many rounds they want to play (and their final score would be the average of all rounds). At the end, their reflex time would be presented on the screen.

The menu (Home Page)

Reflex Test

Choose Difficulty ▽ (▽ = Drop Down Menu)
Beginner [2x2]
Easy [5x5]
Intermediate [25x25]
Hard [50x50]]
Extreme [100x100]

Choose # of Rounds ▽
Rounds: ___

Choose Color ▽
Red
Orange
Yellow
Green
Blue
Purple
Pink
Black

Round 1 Start
<img width="624" alt="image" src="https://user-images.githubusercontent.com/97321928/215187903-c234febe-82a0-430d-839a-96d153b8184f.png">

First Grid Square
<img width="625" alt="image" src="https://user-images.githubusercontent.com/97321928/215188135-754c7fb9-b414-4be4-a5bd-f7c1b1a31575.png">

Etc

Closing Page:
Your reflex score: ___ seconds/mins/hours/whatever

*UPDATE* I think I'm going to make a set number of buttons. Maybe each round there will be more, but I don't know how to let the user choose with what I currently know.
*UPDATE* Round 1 will just have 4 buttons. Round 2 will have 9. Round 3 will have 16. If I don't like the look, I'll change these later.
*UPDATE* I am planning on having just one screen of many butons, but the number of rounds are unlimited. It is only limited by the user pressing "Done". Then times are averaged and the score sheet will appear.
*TO DO* 
Save username as done in Simon.
Evaluate times.
Calculate averages.
Print to scoresheet.
Fit buttons to screen.
Add "Done" button.
Change colors.
*Possible Cool Things*
End if wrong button is clicked.
User picks color scheme.
User picks number of buttons (or level of difficulty).
Allow multiple users to have scores recorded on scoresheet.
Shadow buttons(on hover or all).
Update average on play screen.



http://13.58.9.209/

ssh -i /Users/averypark/Downloads/cs260keypair.pem ubuntu@13.58.9.209

http://avery260website.click

./deployWebsite.sh  -k /Users/averypark/Downloads/cs260keypair.pem -h avery260website.click

Simon Initial Project
I learned that html likes it when you don't type the first " and when you do type the second ". It took a lot of struggling to figure that out. Also <nav><menu><li></li></menu></nav> creates a menu. Then you put the references in the <li> items.
  ./deployFiles.sh  -k /Users/averypark/Downloads/cs260keypair.pem -h avery260website.click -s simon
  
Simon CSS Project
I learned that it is often better to use width properties, rather than margin properties to space elements equal distances apart. I struggled with this for a good amount of time...

Startup CSS Project
I learned that I have a hard time centering things. I sometimes have to try an center a bunch of parent and child elements to get the look I want. I also learned that you can make only text clickable in the button or make the whole button clickable.
  
Simon Javascript
  I learned that it is really hard to use someone else's javascript. There are too many moving pieces. Eventually I got it to work, but it took a long time and a lot of frustration.
  
  
  
  Midterm Notes
 ---------------------------------------------------------------------------------------------------------------------------------------------------------
  
  Kahoot Notes
  -------------
  @import url('https://fonts.googleapis.com/css?family=Quicksand');  this css loads fonts from google
  
  <html>
    <head>
      <style>
        div {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        }
      </style>
    </head>
   </body>
      <div>
        <p> Hello </p>
        <p>World</p>
       </div>
     </body>
  </html>
  
  Output: Two lines with the first saying World and the second saying Hello.
  
  p{
    padding: 1em;
  }
  
  Result: puts space around the content of selected elements
  
 
  const f = y => ++y;
  console.log(f(3))
  
  Output: 4
  
  <div></div>
    
  Description: creates a division element
    
  CSS box model (Outside going in)
  
  Answer: margin, border, padding, content
  
  let a = ['cow', 'rat', 'fish'];
  let b = a.filter(v => v.match(/A|f/i));
  console.log(b);
  
  Output: ['rat', 'fish']   (Because /i means case insensitive)
  
  let a = ['cow', 'rat', 'fish'];
  let b = a.reduce((a,v) => [a,v].join(':'));
  console.log(b);
  
  Output: cow:rat:fish
  
  let a = [1,2,3];
  let e = a.map(number => {
    return ('a' + number)
  });
  console.log(e);
  
  Output: ['a1', 'a2', 'a3']
  
  document.querySelector('p').addEventListener('mouseover', console.log);
  
  Does: Adds a mouseover event listener to a p element.
  
  <ul></ul>
  
  Description: HTML tag for unordered list
  
  Javascript Functions:
  function f(x) = {}  --> invalid
  const f = (x) => {} --> valid
  function f(x){} --> valid
  const f = function(x){} --> valid
  
  Javascript in HTML:
  <javascript>1+1</javascript> --> invalid (javascript not a tag)
  <script>1+1</script> --> valid
  <script src = 'main.js' /> --> valid
  <div onclick='1+1' /> --> valid
  
  Javascript Objects:
  {n:1} --> valid
  {n=1} --> invalid (no equals in javascript objects)
  {"n"=1} --> invalid (no equals)
  {"n"="1"} --> invalid (no equals)
  
  DOM textContent: sets the child text for the element.
  
  Hyperlinks:
  <a href='https//c.com'>x</a> --> valid
  <a src='https://c.com'>x</a> --> invalid (src is for images)
  <link src='https://c.com'>x</link> --> invalid (link?)
  <link href='https://c.com'>x</link> --> invalid (link?)
  
  <div>other</div>
  <div class="header">BYU</div>
  
  Turning only Byu text blue: div.header{ color: blue; }
  
  JSON:
  {"x":3} --> valid
  {'x':3} --> invalid (need quotes)
  {x:3} --> invalid (need quotes)
  {"x":undefined} --> invalid (can't use undefined in JSON)
  
  Console command that makes a script executable: chmod +x deploy.sh
  
  DNS Subdomains: (aka something.actualwebsitename.com)
  cs260.cs.byu.edu --> yes!
  byu --> no
  edu --> no
  byu.edu --> no
  
  Pointing to another DNS record: CNAME record type
  Regular: A record type
  
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('taco');
      resolvw(true);
    }, 10000);
  });
  console.log('burger');
  
  p
  .then((result) => console.log('shake'))
  .catch((e) => console.log('salad'))
  .finally(() => console.log('nooodles'))
  
  console.log('fries')
  
  Output: burger fries taco shake noodles
  
  const a = async function() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('D'); 
        resolve(true)
      },10000);
    })
  }
  
  try {
    console.log('A');
    await a();
    console.log('B')
  } catch(e) {
    console.log('C');
  }
  
  Output: A D B
  
  Basic html tags
  <!DOCTYPE> 	Defines the document type
  <html>	Defines an HTML document
  <head>	Contains metadata/information for the document
  <title>	Defines a title for the document
  <body>	Defines the document's body
  <div> Creates a division element
  <h1> to <h6>	Defines HTML headings
  <p>	Defines a paragraph
  <br>	Inserts a single line break
  <hr>	Defines a thematic change in the content
  <!--...--> Defines a comment
  <strong> or <b> is bold
  <em> or <i> is italics
  <img>	Defines an image
  <a>	Defines a hyperlink
  <link>	Defines the relationship between a document and an external resource (most used to link to style sheets)
  <nav>	Defines navigation links
  <ul>	Defines an unordered list
  <ol>	Defines an ordered list
  <li>	Defines a list item
  <table>	Defines a table
  <th>	Defines a header cell in a table
  <tr>	Defines a row in a table
  <td>	Defines a cell in a table
  <style>	Defines style information for a document
  <span>	Defines a section in a document
  <header>	Defines a header for a document or section
  <footer>	Defines a footer for a document or section
  <main>	Specifies the main content of a document
    
  Arrow Functions-------------->
  const a = [1, 2, 3, 4];
  // standard function syntax
  a.sort(function (v1, v2) {
    return v1 - v2;
  });
  // arrow function syntax
  a.sort((v1, v2) => v1 - v2);
    
  () => 3;
  // RETURNS: 3

  () => {
    3;
  };
  // RETURNS: undefined

  () => {
    return 3;
  };
  // RETURNS: 3
  
  function makeClosure(a) {
  a = 'a2';
  const b = 'b2';
  return () => [a, b];
}

  Javascript Regular Expressions
  const petRegex = /(dog)|(cat)|(bird)/gim;
  const text = 'Both cats and dogs are pets, but not rocks.';

  text.match(petRegex);
  // RETURNS: ['cat', 'dog']

  text.replace(petRegex, 'animal');
  // RETURNS: Both animals and animals are pets, but not rocks.

  petRegex.test(text);
  // RETURNS: true



  Startup Javascript
  I learned that javascript isn't actually too bad. When I wrote it myself, I could basically write it like any other code (with some googling). I liked how easy it was for me to create my 100 buttons. It would've taken a lot of code without Javascript. But with it, it only took a couple.
    
    
    URL Notes---------------------------------------------------------------------------------------------------------------------------------------
    https://byu.edu:443/cs/260/student?filter=accepted#summary
    
    <scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>
    
    Scheme	- https	- The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.
    Domain name	 - byu.edu -	The domain name that owns the resource represented by the URL.
    Port	- 3000	- The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.
    Path -	/school/byu/user/8014	- The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.
    Parameters -	filter=names&highlight=intro,summary	- The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string.
    Anchor -	summary	- The anchor usually represents an sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.
    
    
    URL, URN, and URI
You will sometimes hear the use of URN or URI when talking about web resources. A Uniform Resource Name (URN) is a unique resource name that does not specify location information. For example, a book URN might be urn:isbn:10,0765350386. A Uniform Resource Identifier (URI) is a general resource identifier that could refer to either a URL and URN. With web programming you are almost always talking about URLs and therefore you should not use the more general URI.
  
     Port Notes--------------------------------------------------------------------------------------------------------------------------------------
      Common Ports
      20	File Transfer Protocol (FTP) for data transfer
      22	Secure Shell (SSH) for connecting to remote devices
      25	Simple Mail Transfer Protocol (SMTP) for sending email
      53	Domain Name System (DNS) for looking up IP addresses
      80	Hypertext Transfer Protocol (HTTP) for web requests
      110	Post Office Protocol (POP3) for retrieving email
      123	Network Time Protocol (NTP) for managing time
      161	Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers
      194	Internet Relay Chat (IRC) for chatting
      443	HTTP Secure (HTTPS) for secure web requests
  
