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
  
  "<html>
    <head>
      <style>
        div {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        }
      </styly>
    </head>
    <body>
      <div>
        <p>Hello</p>
        <p>World</p>
       </div>
     </body>
  </html>"
  
  Output: Two lines with the first saying World and the second saying Hello.
  
  p{
    padding: 1em;
  }
  
  Result: puts space around the content of selected elements
  
 
  "const f = y => ++y;
  console.log(f(3))"
  
  Output: 4
  
  "<div></div>"
    
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
  function f(x) = {}  --> invalid javascript function
  const f = (x) => {} --> valid
  function f(x){} --> valid
  const f = function(x){} --> valid
  
  Javascript in HTML:
  <javascript>1+1</javascript> --> invalid
  <script>1+1</script> --> valid
  <script src = 'main.js' /> --> valid
  <div onclick='1+1' /> --> valid
  
  Javascript Objects:
  {n:1} --> valid
  {n=1} --> invalid
  {"n"=1} --> invalid
  {"n"="1"} --> invalid
  
  DOM textContent: sets the child text for the element.
  
  Hyperlinks:
  <a href='https//c.com'>x</a> --> valid
  <a src='https://c.com'>x</a> --> invalid
  <link src='https://c.com'>x</link> --> invalid
  <link href='https://c.com'>x</link> --> invalid
  
  <div>other</div>
  <div class="jeader">BYU</div>
  
  Turning only Byu text blue: div.header{ color: blue; }
  
  JSON:
  {"x":3} --> valid
  {'x':3} --> invalid
  {x:3} --> invalid
  {"x":undefined} --> invalid
  
  Console command that makes a script executable: chmod +x deploy.sh
  
  DNS Subdomains:
  cs260.cs.byu.edu --> yes!
  byu --> no
  edu --> no
  byu.edu --> no
  
  Pointing to another DNS record: CNAME record type
  
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
  setTimeout(() => {console.log('D'); resolve(true)}, 10000);
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
  
  
  
  
  
