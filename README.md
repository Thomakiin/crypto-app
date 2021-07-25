<h1>Crypto App </h1>
<p>
  A React app for users to view the latest data for the top 50 crytocurrencies
</p>

<h2>Demo:</h2>
<p>
  View the app <a href="https://crypto-app-netlify.netlify.app"> here! </a> 
</p>


<h2>Features</h2>
<ul>
  <li>
    <h3> Intuitive Sorting </h3> 
    To sort, simply select one of the categories! An indicator will be displayed to show the sort direction (either ascending or descending), click the item again to toggle the direction.
  </li>
  <li>
    <h3> The Latest Data </h3> 
    The data is updated every minute using the latest data from <a href="https://rapidapi.com/Coinranking/api/coinranking1/"> Coinranking's API</a>
  </li>
  <li>
    <h3> Scalable Design </h3> 
    UI designed for any device
  </li>
</ul>


<h2>Tech Stack</h2>
<ul>
  <li>React</li>
  <li>Node / Express</li>
  <li>npm</li>
</ul>

<h2>Technical Breakdown</h2>

<h4> Security: </h4>
<ul>
  <li>
    <p>
      All interactions involving a secret are handled through the server (in this case an API key) Stolen API keys can be abused by an attacker to make the victim pay for their own data usage.
    </p>
  </li>
</ul>

<h4> Responsive Design: </h4>
<ul>
  <li>
    Padding and icon size are adjusted 
  </li>
  <li>
    Additional columns are added or removed 
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




