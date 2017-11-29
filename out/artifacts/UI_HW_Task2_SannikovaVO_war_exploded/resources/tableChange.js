function addRow()
{
    // Считываем значения с формы
    var A = document.getElementById('Atag').value;
    var B = document.getElementById('Btag').value;
    var C = document.getElementById('Ctag').value;

    var jsonstr = JSON.stringify({"Atag": A, "Btag": B, "Ctag": C});

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/calculate",
        data: jsonstr,
        dataType: "json",
        success:function (servData) {
            var x_1 = servData["x1"];
            var x_2 = servData["x2"];


            var tbody = document.getElementById('results').getElementsByTagName('tbody')[0];
            var row = document.createElement("TR");
            tbody.appendChild(row);
            var td1 = document.createElement("TD");
            var td2 = document.createElement("TD");
            row.appendChild(td1);
            row.appendChild(td2);
            row.className += ((tbody.getElementsByTagName("tr").length % 2) == 1 ? " oddrows" : " evenrows");
            row.addEventListener('click', function() {
                row.parentNode.removeChild(row);
                makeStripy();
            }, false);
            td1.innerHTML = strToEquation(A, B, C).toString();
            if(x_1 != null)
                td2.innerHTML = x_1.toFixed(2) + ', ' + x_2.toFixed(2);
            else
                td2.innerHTML = '<i>Корней нет</i>';
        },
        error: function (error) {
            alert("Ошибка!");
        }
    });
}


function makeStripy()
{
    var tab = document.getElementById("results").getElementsByTagName("tbody")[0];
    var rows = tab.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) // строки нумеруются с 0
        rows[i].className = ((i % 2) == 0 ? " oddrows" : " evenrows");
}

function strToEquation(A, B, C) {
    var str = A + ' x^2';
    if(B > 0) str += ' + ' + B + ' x';
    else if(B < 0) str += ' - ' + -B + ' x';
    if(C > 0) str += ' + ' + C;
    else if(C < 0) str += ' - ' + -C;
    str += ' = 0;';
    return str;
}