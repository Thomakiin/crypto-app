

<h1>Crypto App </h1>
<p>
  A React app for users to view the latest data for the top 50 crytocurrencies
</p>

<h2>Demo:</h2>
<p>
  <a href="https://crypto-app-netlify.netlify.app"> View the app here! </a> 
</p>

<img src="https://user-images.githubusercontent.com/29510437/127046117-2ec764b8-f17d-4cd3-978f-1d5aab89b96f.png">

<h2>Features</h2>
<ul>
  <li>
    <h4> Intuitive Sorting </h4> 
    To sort, simply select one of the categories! An indicator will be displayed to show the sort direction (either ascending or descending), click the item again to toggle the direction.
  </li>
  <li>
    <h4> The Latest Data </h4> 
    The data is updated every minute using the latest data from <a href="https://rapidapi.com/Coinranking/api/coinranking1/"> Coinranking's Rapid API page</a>
  </li>
  <li>
    <h4> Scalable Design </h4> 
    UI designed for any device
  </li>
</ul>

<h2>Technical Overview</h2>

<h4>Tech Stack</h4>
<ul>
  <li>React</li>
  <li>Node / Express</li>
  <li>npm</li>
  <li>Heroku</li>
</ul>

<p>
  The focus of this app is the "coins" component where all of the cryptocurrency data is managed and displayed. 
</p>
<p>
 Data is updated every minute using the set interval function
</p>
<p>
  A function is used when fetching and updating the data to make sure it stays sorted using the same configuration (EX: Sort by price descending)
</p>
<p>
  The directional indicator is displayed on the desired element by adding a class called "ascending" or "descending". These classes use the :after selector to display a unicode arrow. 
</p>
<p>
  The % change is shown as red or green for each element depending on whether it was positive or negative change. 
</p>
<p>
  A reusable utility function called sortJSON was created which can sort a list of JSON based on the inputted field name and direction. Greatly reducing the amount of code required as compared to defining a function for each combination of field and direction.   
</p>

<h4> Security: </h4>
<ul>
  <li>
  To avoid exposing the API key to the client, all interactions involving the API key are handled through the server.  Stolen API keys can be abused by an attacker to make the victim pay for their own data usage.
  </li>
  <li>
  Cross-Origin Resource Sharing is implemented to allow the client to make API request from the backend, while using a whitelist to not allow other domains to make calls.
  </li>
  <li>
  The backend hides the API key from being directly exposed in the source code by using environment variables.
  </li>
</ul>

<h4> Responsive Design: </h4>
<p>Padding and icon size are adjusted, and columns are added or removed based on screen width. </p>


<h4>Objective</h4>
<p>
I created this application to practice my skills and learn new technologies.
</p>
<h4> Learning Outcomes: </h4>
<ul>
  <li>
  Learned that confidential data should not be handled on the client
  </li>
  <li>
  Built my first backend to allow me to securely handle my API key, which involved learning how to use Heroku, Node, Express, and environment variables
  </li>
  <li>
  Built my first application that makes fetch requests to an API and uses async functions
  </li>
</ul>





