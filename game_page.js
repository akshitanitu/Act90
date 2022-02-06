player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn-"+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn-"+player2_name;


function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    chart1=word.charAt(1);
    LD=Math.floor(word.length/2);
    chart2=word.charAt(LD);
    LM=word.length-1;
    chart3=word.charAt(lm);
    rc1=word.replace(chart1,"_");
    rc2=word.replace(chart2,"_");
    rc3=word.replace(chart3,"_");
    qw="<h4 id='wd'>Q."+rc3+"</h4>";
    ib="<br>ANSWER:<input type='text' id='icb'>";
    cb="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=qw+ib+cb;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}


