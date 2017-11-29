
<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <script type="text/javascript" src="resources/tableChange.js"></script>
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <link rel="stylesheet" type="text/css" href="resources/styles.css" >
  <title>Подсчет корней квадратного уравнения</title>
</head>
<body onload="makeStripy()">
<h2>Введите уравнение:</h2><br/>
<form action="" id="calcform" method="post" onsubmit="javascript: addRow();return false;" class="input_form">
  <input type="number" id="Atag" required>
  <label for="Atag">x^2 + </label>

  <input type="number" id="Btag" required>
  <label for="Btag">x + </label>

  <input type="number" id="Ctag" required>
  <label for="Ctag">= 0</label><br/>

  <button type="submit" name="calc">Вычислить</button><br/><br/>
</form>
<table id="results" class="lux">
  <thead><tr><th>Уравнение</th><th width="33%">Корни</th></tr></thead>
  <tbody class="stripy"></tbody>
</table>
</body>
</html>