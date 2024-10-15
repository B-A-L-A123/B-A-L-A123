<h1> Guess the number</h1>
<input id="guessnumber">
<button onclick="check()">Check</button>
<p id="result"> your answer is wrong/correct</p>
<p id="score">Score:10</p>

<script>
    var guessnumber = document.getElementById("guessnumber")
    var result = document.getElementById("result")
    var randomnumber = Math.floor(Math.random()*10)+1
    var score = document.getElementById("score")
    var tscore=10
    function check()
    {
        var enterednumber = guessnumber.value
        if( randomnumber==enterednumber)
        {
            console.log("correct")
            result.textContent="correct"
            alert("you won ....")
        }
        else{
            tscore = tscore-1
score.textContent="score:"+tscore
            result.textContent="wrong"
        }
    }

</script>
