<h1>Crypto App </h1>
<p>
  A React app for users to view the latest data for the top 50 crytocurrencies
</p>

<h2>Demo:</h2>
<p>
  <a href="https://crypto-app-netlify.netlify.app"> View the app here! </a> 
</p>


<h2>Features</h2>
<ul>
  <li>
    <h4> Intuitive Sorting </h4> 
    To sort, simply select one of the categories! An indicator will be displayed to show the sort direction (either ascending or descending), click the item again to toggle the direction.
  </li>
  <li>
    <h4> The Latest Data </h4> 
    The data is updated every minute using the latest data from <a href="https://rapidapi.com/Coinranking/api/coinranking1/"> Coinranking's API</a>
  </li>
  <li>
    <h4> Scalable Design </h4> 
    UI designed for any device
  </li>
</ul>

<h2>Technical Breakdown</h2>

<h4>Tech Stack</h4>
<ul>
  <li>React</li>
  <li>Node / Express</li>
  <li>npm</li>
</ul>

<h4> Security: </h4>
<ul>
  <li>
    All interactions involving the API key are handled through the server, acting as a proxy to the client to allow retrieval of data without exposing confidential information. Stolen API keys can be abused by an attacker to make the victim pay for their own data usage.
  </li>
</ul>

<h4> Data handling: </h4>
<ul>
  <li>
    (Fetch / Sort / Timer thing / Loading screen)
  </li>
</ul>


<h4> Responsive Design: </h4>
<ul>
  <li>
    Padding and icon size are adjusted, and columns are added or removed based on screen width.
  </li>
</ul>


<p>
  Cryptocurrency data  utilizes the use state hook,   
</p>
<p>Sorting is done by. . . display ascending / descending . . . </p>
<p>Responsive (column break) . . .</p>
<p>Backend proxy server for safe API key . . .</p>
<p>Show %change as red or green . . .</p>
<p>Update data. . .</p>





