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
    let [coinElements, setCoinElements] = useState([<></>]);
    //let [sortMethod, setSortMethod] = useState([sortRankDescending]);


    async function fetchCoinsData() {
        const res = await fetch("https://crypto-app-heroku.herokuapp.com/api/Coinranking");
        const resJSON = await res.json();
        const data = await resJSON.data;
        return data;
    }

    async function displayCoins(sortFunction) {
        const data = await fetchCoinsData();
        data.coins.sort(sortFunction);
        let output = [];

        output = data.coins.map(coin => {
            return (
                <div className="coin">
                    <img src={coin.iconUrl} alt={coin.name + " logo"} width="64px" />
                    <h1>{coin.name}</h1>
                    <p>{"Current price: $" + coin.price + " USD"}</p>
                    <p>{"%" + coin.change}</p>
                    <button>Buy</button>
                    <button>Sell</button>
                </div>
            )
        })
        setCoinElements(output);
    }

    // Component On Mount
    useEffect(() => {
        displayCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h2>Sort by:</h2>
            <button onClick={() => displayCoins(sortRankDescending)}> Rank Descending </button>
            <button onClick={() => displayCoins(sortRankAscending)}> Rank Ascending </button>

            <button onClick={() => displayCoins(sortChangeDescending)}> Change Descending </button>
            <button onClick={() => displayCoins(sortChangeAscending)}> Change Ascending </button>

            <button onClick={() => displayCoins(sortPriceDescending)}> Price Descending </button>
            <button onClick={() => displayCoins(sortPriceAscending)}> Price Ascending </button>
            
            <br /> <br /> <button>Display Mode: compact, medium, large, etc</button>

            <div className="coins-container">
                {coinElements}
            </div>
        </div>
    );
}

export default Coins;