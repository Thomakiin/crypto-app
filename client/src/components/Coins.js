import { useEffect, useState } from "react";
import { sortJSON, formatNum } from "../myUtils";

// sort directions
let ascending = "ascending";
let descending = "descending";

// current sort configuration
let currentSortDirection = descending;
let currentSortField = "marketCap";

function toggleSortDirection() {
    if (currentSortDirection === ascending) {
        currentSortDirection = descending;
    }
    else if (currentSortDirection === descending) {
        currentSortDirection = ascending;
    }
}

const Coins = () => {
    let [coinsData, setCoinsData] = useState([]);

    // Sorts the coins, also displays the direcional indicator on the inputted element "el"
    function sortCoins(el, fieldname, type) {
        currentSortField = fieldname;
        toggleSortDirection();

        // Remove visual direction indicator from other table heads. This is so we don't show multiple indicators at once.
        let tableHeads = document.getElementsByTagName("th");
        for (var i in tableHeads) {
            if (tableHeads[i].classList) {
                tableHeads[i].classList.remove(descending);
                tableHeads[i].classList.remove(ascending);
            }
        }

        // Add visual direction indicator for selected element
        if (el) {
            el.classList.add(currentSortDirection); // add coresponding direction indicator class
        }
        setCoinsData(sortJSON(coinsData, fieldname, currentSortDirection, type)); // display sorted data

    }

    // fetch latest crypto data from Coinranking using our backend proxy server (so the API key isn't exposed on the front end)
    async function fetchCoinsData() {
        const res = await fetch("https://crypto-app-heroku.herokuapp.com/api/Coinranking");
        const resJSON = await res.json();
        const data = await resJSON.data;
        return data;
    }

    // Fetches newest data, sorts it using our current sort variables, then updates the data we display 
    async function updateCoinsData() {
        // fetch newest data
        const data = await fetchCoinsData();
        let newCoinsData = await data.coins;
        //sort data using our current sort variables
        newCoinsData = sortJSON(newCoinsData, currentSortField, currentSortDirection);
        // display the new and sorted data
        setCoinsData(newCoinsData);
    }

    // Component On Mount
    useEffect(() => {
        updateCoinsData(); // initial fetch and display of crypto data
        setInterval(updateCoinsData, 60000); // update crypto data every minute
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <div>
            <div className="coins-container">
                {coinsData.length <= 0 && /* Loading, waiting for data to be populated */
                    <div>
                        {/*<img className="loader" src="https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg" alt="bitcoin icon" />*/}
                        <div className="loader">
                        </div>
                        <p style={{ "text-align": "center" }}>Fetching coin data from server . . . Heroku may be sleeping . . .</p>
                    </div>
                }
                {coinsData.length > 0 && /* Display table of crypto currencies */
                    <table>
                        <thead>
                            <tr>
                                <th id="name" onClick={(e) => { sortCoins(e.target, "name") }}>
                                    Cryptocurrency
                                </th>
                                <th id="price" onClick={(e) => { sortCoins(e.target, "price", "number") }}>
                                    Price (USD)
                                </th>
                                <th id="marketCap" onClick={(e) => { sortCoins(e.target, "marketCap", "number") }}>
                                    Market Cap
                                </th>
                                <th id="change" onClick={(e) => { sortCoins(e.target, "change") }}>
                                    24H Change
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                coinsData.map((coin) => (
                                    <tr className="coin" key={coin.id}>
                                        <td>
                                            <div className="profile-container">
                                                <img className="icon" src={coin.iconUrl} alt={coin.name + " logo"} width="40px" />
                                                <div className="name-symbol-container">
                                                    <p className="name">{coin.name}</p>
                                                    <p className="symbol">{coin.symbol}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{"$" + coin.price}</p>
                                        </td>
                                        <td>
                                            <p>{"$" + formatNum(coin.marketCap)}</p>
                                        </td>
                                        <td>
                                            <p className={Math.sign(coin.change) >= 0 ? "change-positive" : "change-negative"}>
                                                {coin.change + "%"}
                                            </p>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }
            </div>
        </div >
    );
}

export default Coins;