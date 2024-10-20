<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<input id="inputbox" onkeyup="update()">
<h1 id="result"></h1>
</body>
</html>
<script>
    var inputbox = document.getElementById("inputbox")
    var result = document.getElementById("result")

    function update()
    {
        result.textContent= inputbox.value 
    }
</script>
