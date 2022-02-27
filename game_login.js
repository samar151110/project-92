function adduser(){
    player_1 = document.getElementById("Player_1").value;
    player_2 = document.getElementById("Player_2").value;
    localStorage.setItem("Player1", player_1);
    localStorage.setItem("Player2", player_2);
    window.location.replace("Gamepage.html");
}