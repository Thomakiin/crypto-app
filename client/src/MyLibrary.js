

export function mySort(inItems, fieldname, direction) {
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