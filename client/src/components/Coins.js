import { useEffect, useState } from "react";

function sortChangeDescending(a, b) {
    return b.change - a.change;
}
function sortChangeAscending(a, b) {
    return a.change - b.change;
}

function sortPriceDescending(a, b) {
    return b.price - a.price;
}
function sortPriceAscending(a, b) {
    return a.price - b.price;
}

// Reminder: With "rank" lower is better. Ex: 1st place vs 2nd place
function sortRankDescending(a, b) {
    return a.rank - b.rank;
}
function sortRankAscending(a, b) {
    return b.rank - a.rank;
}


const Coins = () => {
    let [coinElements, setCoinElements] = useState([<div> Loading . . . </div>]);
    //let [sortMethod, setSortMethod] = useState([sortRankDescending]);


    async function fetchCoinsData() {
        const res = await fetch("https://crypto-app-heroku.herokuapp.com/api/Coinranking");
        const resJSON = await res.json();
        const data = await resJSON.data;
        return data;
    }

    async function redisplayCoins(sortFunction) {
        const data = await fetchCoinsData();
        data.coins.sort(sortFunction);

        // Iterate through the coins and return a list of table rows
        let tableRows = data.coins.map(coin => {
            return (
                <tr>
                    <td>
                        <div className="profile-container">
                            <img className="icon" src={coin.iconUrl} alt={coin.name + " logo"} width="54px" />
                            <p className="name">{coin.name}</p>
                            <p className="symbol">{coin.symbol}</p>
                        </div>
                    </td>
                    <td>
                        <p>{"$" + coin.price + " USD"}</p>
                    </td>
                    <td>
                        <p>{coin.change + "%" }</p>
                    </td>
                </tr>
            )
        })

        // Assemble a finalized table to display the coins 
        let table = (
            <table>
                <tr>
                    <th>Coin</th>
                    <th>Price (USD)</th>
                    <th>Change %</th>
                </tr>
                {tableRows}
            </table>
        );

        setCoinElements(table);
    }

    // Component On Mount
    useEffect(() => {
        redisplayCoins();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>

            <table>
                <caption>Alien football stars</caption>
                <tr>
                    <th scope="col">Player</th>
                    <th scope="col">Gloobles</th>
                    <th scope="col">Za'taak</th>
                </tr>
                <tr>
                    <th scope="row">TR-7</th>
                    <td>7</td>
                    <td>4,569</td>
                </tr>
                <tr>
                    <th scope="row">Khiresh Odo</th>
                    <td>7</td>
                    <td>7,223</td>
                </tr>
                <tr>
                    <th scope="row">Mia Oolong</th>
                    <td>9</td>
                    <td>6,21900000000000</td>
                </tr>
            </table>

            <h1>Top 50 coins</h1>
            <h2>Sort by:</h2>
            <button onClick={() => redisplayCoins(sortRankDescending)}> Rank Descending </button>
            <button onClick={() => redisplayCoins(sortRankAscending)}> Rank Ascending </button>

            <button onClick={() => redisplayCoins(sortChangeDescending)}> Change Descending </button>
            <button onClick={() => redisplayCoins(sortChangeAscending)}> Change Ascending </button>

            <button onClick={() => redisplayCoins(sortPriceDescending)}> Price Descending </button>
            <button onClick={() => redisplayCoins(sortPriceAscending)}> Price Ascending </button>

            <div className="coins-container">
                {coinElements}
            </div>
        </div>
    );
}

export default Coins;