<input id ="num1" value="55">
<input id ="num2" value="60">
<button onclick="resultfun()">add</button>
<p id="result"> result</p>

<script>
var box1 = document.getElementById("num1")
var box2 = document.getElementById("num2")
var result = document.getElementById("result")
 
 function resultfun()
 {
 var box1value = Number(box1.value)
 var box2value = Number(box2.value)
 var total = (box1value+box2value)
 result.textContent=total
 }
</script>
