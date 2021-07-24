
// Display number in appropriate unit, ex: 50,000 becomes 50K
export function formatNum(num) {
    if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(1) + 'K'; // convert to K for numbers between 1000 and 1 million 
    }
    else if (num > 1000000 && num < 1000000000) {
        return (num / 1000000).toFixed(1) + 'M'; // convert to M for numbers between 1 million and 1 billion
    }
    else if (num > 1000000000) {
        return (num / 1000000000).toFixed(1) + 'B'; // convert to B for numbers above 1 billion
    }
    else if (num < 999) {
        return num; // if the number is less than 1000 don't convert to anything
    }
}

// Sorts a list of JSON based on the inputted field name ex: price
export function sortJSON(inItems, fieldname, direction, inType) {
    let items = [...inItems]; // make a copy of original items so we don't overwrite them with the "sort" method
    console.log("mySort. In type: " + inType + " fieldname: " + fieldname);
    items.sort((a, b) => {

        a = a[fieldname]; //
        b = b[fieldname];

        // sort numeric items
        if (inType === "number" || (inType === undefined && typeof a == "number" && typeof b == "number")) {
            //console.log("sort number");
            a = parseFloat(a);
            b = parseFloat(b);
            // sort by value
            if (direction === 'descending') {
                return b - a;
            }
            if (direction === 'ascending') {
                return a - b;
            }
        }
        // sort string items
        else if (inType === "string" || (inType === undefined && typeof a == "string" && typeof b == "string")) {
            //console.log("sort string");
            // sort alphabetically
            if (direction === 'descending') {
                if (a < b) { return -1; }
                if (a > b) { return 1; }
            }
            if (direction === 'ascending') {
                if (a < b) { return 1; }
                if (a > b) { return -1; }
            }
        }
        return 0;
    })
    return items;
}