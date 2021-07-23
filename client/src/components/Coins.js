import { useEffect, useState } from "react";
import { mySort } from "../MyLibrary";

let ascending = "ascending";
let descending = "descending";
let sortDirection = descending;
let sortField = "";

function toggleSortDirection() {
    if (sortDirection === ascending) {
        sortDirection = descending;
    }
    else if (sortDirection === descending) {
        sortDirection = ascending;
    }
}


const Coins = () => {
    let [coinsData, setCoinsData] = useState([]);


    function sortCoins(e, inFieldName) {
        sortField = inFieldName;
        toggleSortDirection();
        console.log("sort direction: " + sortDirection);

        // Remove visual direction indicator from other elements. This is so we don't show multiple indicators at once
        let tableHeads = document.getElementsByTagName("th");
        for (var i in tableHeads) {
            if (tableHeads[i].classList) {
                tableHeads[i].classList.remove(descending);
                tableHeads[i].classList.remove(ascending);
            }
        }

        // Add visual direction indicator for selected element
        e.target.classList.add(sortDirection); // add coresponding direction indicator class
        setCoinsData(mySort(coinsData, inFieldName, sortDirection)); // display sorted data

    }

    async function fetchCoinsData() {
        const res = await fetch("https://crypto-app-heroku.herokuapp.com/api/Coinranking");
        const resJSON = await res.json();
        const data = await resJSON.data;
        return data;
    }

    async function updateCoinsData(sortFunction) {
        const data = await fetchCoinsData();
        let newCoinsData = await data.coins;
        setCoinsData(newCoinsData);
    }

    // Component On Mount
    useEffect(() => {
        updateCoinsData();
        setInterval(updateCoinsData, 60000); // update coins data every minute
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    

    return (
        <div>
            <h1>Top 50 coins</h1>
            <div
                className="drop-down"
                onClick={(e) => {
                    console.log(e.target.children);
                    for (var i in e.target.children) {
                        let child = e.target.children[i];
                        if (child.style) { // check if child can be styled since not all elements have styling, like raw text, numbers, functions, etc 
                            console.log("i: " + i + " " + child);
                            child.style.visibility = "visible";
                        }
                    }
                }}>
                Dropdown
                <p>Cryptocurrency</p>
                <p>Price (USD)</p>
                <p>Change %</p>
            </div>


            <div className="sort-widget">
                <p>Sorting by: {sortField} </p> <span className={sortDirection} />
            </div>

            <div className="coins-container">

                {coinsData.length <= 0 &&
                    <div>
                        <div className="loader" />
                        <p>Loading coin data . . . Heroku may be sleeping . . .</p>
                    </div>
                }

                {coinsData.length > 0 &&
                    <table>
                        <thead>
                            <tr>
                                <th onClick={(e) => { sortCoins(e) }}>Cryptocurrency</th>
                                <th onClick={(e) => { sortCoins(e, "price") }}>Price (USD)</th>
                                <th onClick={(e) => { sortCoins(e, "change") }}>24H Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coinsData.map((coin) => (
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
                                        <p className={Math.sign(coin.change) >= 0 ? "change-positive" : "change-negative"}>
                                            {coin.change + "%"}
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </div>
        </div >
    );
}

export default Coins;