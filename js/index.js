document.addEventListener('DOMContentLoaded', function () {

    var tableBody = document.getElementById('my-table-data');

    var xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.onreadystatechange = function () {

        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            var data = JSON.parse(xmlHttpRequest.responseText);
            var newContent = '';
            for (let i = 0; i < data.length; i++) {

                newContent += `<tr>
            <td>${data[i].loanamount}</td>
            <td>${data[i].tenure}</td>
            <td>${data[i].rateofinterest}</td>
            <td>${data[i].eim}</td>
        </tr>`;
            }
            tableBody.innerHTML = newContent;
        }
    }
    xmlHttpRequest.open('get', 'http://localhost:8080/api/v1/banks', false);
    xmlHttpRequest.send();
})


