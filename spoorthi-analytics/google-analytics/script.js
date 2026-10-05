// Button interaction

function showMessage() {

    alert("Your action was completed successfully!");

}


// Search acquisition table

function searchTable() {

    let input = document.getElementById("search");

    let filter = input.value.toLowerCase();

    let table = document.getElementById("channelTable");

    if (!table) {
        return;
    }

    let rows = table.getElementsByTagName("tr");


    for (let i = 0; i < rows.length; i++) {

        let text = rows[i].textContent.toLowerCase();

        if (text.includes(filter)) {

            rows[i].style.display = "";

        } else {

            rows[i].style.display = "none";

        }

    }

}