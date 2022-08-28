
const removeText = "Deleted";

const tbody = document.getElementsByClassName("listing listing-client-side listing-project-with-packager-request project-with-packager-request-listing b-table b-table-a")[0].tBodies[0];

const items = tbody.rows;

for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (removeText === item.getElementsByTagName("span")[0].textContent) {
        tbody.deleteRow(i);
        console.log(item);
    }
}