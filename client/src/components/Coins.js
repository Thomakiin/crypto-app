import { useEffect, useState } from "react";

function newSort(inItems, fieldname, direction) {
    let items = [...inItems]; // make a copy of original items so we don't overwrite them with the "sort" method
    items.sort((a, b) => {
        if (direction === 'descending') {
            return b[fieldname] - a[fieldname];
        }
        if (direction === 'ascending') {
            return a[fieldname] - b[fieldname];
        }
        return 0;
    })
    return items;
}


const Coins = () => {
    let [coinsData, setCoinsData] = useState([]);

    //let [sortMethod, setSortMethod] = useState([sortRankDescending]);


    async function fetchCoinsData() {
        const res = await fetch("https://crypto-app-heroku.herokuapp.com/api/Coinranking");
        const resJSON = await res.json();
        const data = await resJSON.data;
        return data;
    }

    async function updateCoinsData(sortFunction) {
        const data = await fetchCoinsData();
        let newCoinsData = await data.coins;
        newCoinsData = newSort(newCoinsData, 'change', 'descending');
        setCoinsData(newCoinsData);
    }

    // Component On Mount
    useEffect(() => {

        updateCoinsData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1>Top 50 coins</h1>
            {/*             
            <h2>Sort by:</h2>
            <button onClick={() => updateCoinsData(sortRankDescending)}> Rank Descending </button>
            <button onClick={() => updateCoinsData(sortRankAscending)}> Rank Ascending </button>

            <button onClick={() => updateCoinsData(sortChangeDescending)}> Change Descending </button>
            <button onClick={() => updateCoinsData(sortChangeAscending)}> Change Ascending </button>

            <button onClick={() => updateCoinsData(sortPriceDescending)}> Price Descending </button>
            <button onClick={() => updateCoinsData(sortPriceAscending)}> Price Ascending </button> 
            */}

            <div className="coins-container">
                <table>
                    <thead>
                        <tr>
                            <th>Coin</th>
                            <th>Price (USD)</th>
                            <th>Change %</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coinsData.map((coin) => (
                            <tr>
                                <td>
                                    <div className="profile-container">
                                        <img className="icon" src={coin.iconUrl} alt={coin.name + " logo"} width="54px" />
                                        <p className="name">{coin.name}</p>
                                        <p className="symbol">{coin.symbol}</p>
                                    </div>
                                </td>
                                <td>
                                    <p>{"$" + coin.price}</p>
                                </td>
                                <td>
                                    <p className={Math.sign(coin.change) >= 0 ? "change-positive" : "change-negative"}>
                                        {coin.change + "%"}
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    );
}

export default Coins;