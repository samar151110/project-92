var player_1name = localStorage.getItem("Player1");
var player_2name = localStorage.getItem("Player2");

 score1 = 0;
 score2 = 0;



function Send(){
    
    document.getElementById("player1_name").innerHTML = player_1name + ":";
    document.getElementById("player2_name").innerHTML = player_2name + ":";
    
    document.getElementById("player1_score").innerHTML = score1;
    document.getElementById("player2_score").innerHTML = score2;
    
    document.getElementById("Player_question").innerHTML = "question turn : " + player_1name;
    document.getElementById("Player_answer").innerHTML = "answer turn : " + player_2name;
    

    number1 = document.getElementById("Word1").value;
    number2 = document.getElementById("Word2").value;

    Answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input = "<br>Answer : <input type = 'text' id = 'input_check'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'> Check </button>";
    row = question_number + input + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Word1").value = " ";
    document.getElementById("Word2").value = " ";
}

question = "Player1";
answer = "Player2";

function check() {
    get_answer = document.getElementById("input_check").value;
    if (get_answer == Answer) {
        
        if (answer == "Player1") {
            
            update_player1_score = update_player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else {
           
            score2 = score2 + 1;
            console.log(score2);
            document.getElementById("player2_score").innerHTML = score2;
        }
    }
    if (question == "Player1") {
        question = "Player2";
        document.getElementById("Player_question").innerHTML = "Question turn - " + player_2name;
    }

    else {
        question = "Player1";
        document.getElementById("Player_question").innerHTML = "Question turn - " + player_1name;
    }

    if (answer == "Player1") {
        answer = "Player2";
        document.getElementById("Player_answer").innerHTML = "Answer turn - " + player_2name;
    }

    else {
        answer = "Player1";
        document.getElementById("Player_answer").innerHTML = "Answer turn - " + player_1name;
    }
    document.getElementById("output").innerHTML = " ";

}
