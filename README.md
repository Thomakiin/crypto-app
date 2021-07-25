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

<h2>Technical Overview</h2>

<p>
  A list holds all of the cryptocurrency data in JSON format, and employs the use state hook. This list is mapped and displayed in the render function, therefore to sort or update the displayed data this list is updated.  
</p>
<p>
  The directional indicator is displayed on the desired element by adding a class called "ascending" or "descending". These classes use the :after selector to display a unicode arrow. The table heads (cryptocurrency, price, market cap) implement an on click function that sorts the data and adds the corresponding direction class to themself.
</p>
<p>
  A function is used when updating the data to make sure it stays sorted using current sort configuration (EX: Sort by price descending)
</p>
<p>
  The % change is shown as red or green for each element depending on whether it was positive or negative change. 
</p>
<p>
  A reusable utility function called sortJSON was created which can sort a list of JSON based on the inputted field name and direction. Greatly reducing the amount of code required as compared to defining a function for each combination of field and direction.   
</p>

<h4>Tech Stack</h4>
<ul>
  <li>React</li>
  <li>Node / Express</li>
  <li>npm</li>
</ul>

<h4> Security: </h4>
<p>
  All interactions involving the API key are handled through the server, which acts a proxy to the client to allow retrieval of data without exposing confidential information. Stolen API keys can be abused by an attacker to make the victim pay for their own data usage.
</p>


<h4> Responsive Design: </h4>
<p>Padding and icon size are adjusted, and columns are added or removed based on screen width. </p>






