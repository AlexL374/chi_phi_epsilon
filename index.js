const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function formatDate(date) {
    return String(date.getMonth() + 1) + '/' + String(date.getDate()) + '/' + String(date.getFullYear());
}

function checkDateInput(date) {
    return date.length == 10 && date[2] == '/' && date[5] == '/';
}

var m1Submit = document.getElementById('m2submit');

m1Submit.onclick = function() {
    var div = document.getElementById('m2');
    var date = document.getElementById('date').value;
    if (date && !checkDateInput(date)) {
        return;
    }
    if (date) {
        today = new Date(date);
    }
    var m2brother = document.getElementById('m2brother').value.split(' ');
    var today = new Date();
    var shift = 0;
    var brotherNumber = 0;
    var table = document.getElementById('m2table');
    while (shift <= 28) {
        if (weekday[today.getDay()] == 'Wednesday' || weekday[today.getDay()] == 'Sunday') {
            //console.log(formatDate(today));
            //console.log(m2brother[brotherNumber])
            var row = table.insertRow(table.rows.length);
            var cell1 = row.insertCell(0);
            cell1.classList.add('datetext')
            var cell2 = row.insertCell(1);
            cell2.classList.add('bold')
            cell1.innerHTML = formatDate(today);
            cell2.innerHTML = m2brother[brotherNumber];
            brotherNumber += 1;
            if (brotherNumber >= m2brother.length) {
                brotherNumber = 0;
            }
            cell2.innerHTML += ', ' + m2brother[brotherNumber]
            brotherNumber += 1;
            if (brotherNumber >= m2brother.length) {
                brotherNumber = 0;
            }
            shift += 1;
            if (shift > 28) {
                continue;
            }
            row = table.insertRow(table.rows.length);
            cell1 = row.insertCell(0);
            cell1.innerHTML = '';
        }
        today.setDate(today.getDate() + 1);
        
    }
}