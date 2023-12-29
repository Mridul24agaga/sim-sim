
let i = 0;
let text1 = "Hey Gursimar! do you know why i made this website? I made this website to tell you how much you mean to me. You are the best person i have ever met and i cant imagine my life without you for real no lies. you are the best, cutest, sweetest, kindest and pretty! .";
let text2 = "You know i always find ways to make you happy because your happinesss is the only thing i want to see and yeah, you are myy first priority forever<3 i know this year would be the best year for you and yeah ur a cutiepie<3."
let speed = 100;

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
	}, 100);
//};
