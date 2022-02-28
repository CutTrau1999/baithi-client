document.addEventListener('DOMContentLoaded', function () {
    var btnSubmit = document.getElementById("btn-submit");
    var txtLoanamount = document.forms['product-form']['loanamount'];
    var txtTenure = document.forms['product-form']['tenure'];
    var txtRateofinterest = document.forms['product-form']['rateofinterest'];


    btnSubmit.onclick = function (){
        var loanamount = txtLoanamount.value;
        var tenure = txtTenure.value;
        var rateofinterest = txtRateofinterest.value;


        var dataToSend = {
            "loanamount": loanamount,
            "tenure": tenure,
            "rateofinterest": rateofinterest,

        }
        // xử lý request lên server.
        var xmlHttpRequest = new XMLHttpRequest();

        xmlHttpRequest.onreadystatechange = function () {

            if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 201) {
                alert('Create loan success!');
                window.location.href = "/client/index.html";
            }
        }
        xmlHttpRequest.open('post', 'http://localhost:8080/api/v1/banks', false);

        xmlHttpRequest.setRequestHeader('Content-Type', 'application/json');
        xmlHttpRequest.send(JSON.stringify(dataToSend));
    }
})
