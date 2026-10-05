function showMessage() {
    alert("Tableau action selected successfully!");
}


function searchData() {

    let input = document.getElementById("searchInput");

    if (!input) {
        return;
    }

    let filter = input.value.toLowerCase();

    let table = document.getElementById("dataTable");

    let rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {

        let rowText = rows[i].textContent.toLowerCase();

        if (rowText.includes(filter)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}