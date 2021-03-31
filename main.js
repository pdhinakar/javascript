function calculate()
{
	var year=prompt("Enter a Year of Birth");
	var days=(2021-year)*365;
	var h2=document.createElement('h2');
	h2.setAttribute('id','result1');
	var text=document.createTextNode("you are"+days+"days as of now");
	h2.appendChild(text);
	document.getElementById("result").appendChild(h2);
}
function remove(){
	document.getElementById('result1').remove();
}


// second 

function generate(){
	var image=document.createElement('img');
	image.src="rock.jpg";
	document.getElementById('generatecat').appendChild(image);
}

// Third

function game(yourchoice) {
	var humanchoice,botchoice;
	humanchoice=yourchoice.id;
	botchoice=choose(rand());
	console.log(humanchoice);
	console.log(botchoice);
	function rand(){
		return Math.floor(Math.random()*3);
	}
	function choose(number){
		return ['rock','paper','scissor'][number];
	}
	var result=decidewinner(humanchoice,botchoice);
	console.log(result);
	var message=finalmessage(result);
	console.log(message);
	display(humanchoice,botchoice,message);

	function decidewinner(humanchoice,botchoice){
		var database={
			'rock':{'scissor':1, 'rock':0.5, 'paper':0},
			'scissor':{'paper':1, 'scissor':0.5, 'rock':0},
			'paper':{'rock':1, 'paper':0.5, 'scissor':0}
		};
		var yourscore=database[humanchoice][botchoice];
		var botscore=database[botchoice][humanchoice];

		return [yourscore,botscore];
	}
	
	function finalmessage([yourscore,botscore]){
		if(yourscore==0){
			return {'message': 'You Lost', 'color':'red'};
		}
		else if(yourscore==0.5){
			return {'message': 'You Tied', 'color':'yellow'};
		}
		else{
			return {'message': 'You Win', 'color':'green'};
		}
	}
	function display(humanimagechoice,botimagechoice,finalmessage){
		var imagedatabase={
			'rock' : document.getElementById('rock').src,
			'paper' : document.getElementById('paper').src,
			'scissor' : document.getElementById('scissor').src
		};
		document.getElementById('rock').remove();
		document.getElementById('scissor').remove();
		document.getElementById('paper').remove();

		var humandiv=document.createElement('div');
		var botdiv=document.createElement('div');
		var messagediv=document.createElement('div');

		humandiv.innerHTML="<img src='"+imagedatabase[humanimagechoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);' >";
		botdiv.innerHTML="<img src='"+imagedatabase[botimagechoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";
		messagediv.innerHTML="<h1 style='padding-top:50px;'>"+finalmessage['message']+"</h1>";

		document.getElementById('results').appendChild(humandiv);
		document.getElementById('results').appendChild(messagediv);
		document.getElementById('results').appendChild(botdiv);
		
	}
}

//Fourth

var allButton=document.getElementsByTagName('button');
var copyallButton=[];
for(let i=0;i<allButton.length;i++)
{
	copyallButton.push(allButton[i].classList[1]);
}
function buttoncolorchange(input){
	if(input==='red'){
		buttonred();
	}
	else if(input==='green'){
		buttongreen();
	}
	else if(input==='reset'){
		buttonreset();
	}
	else{
		buttonrand();
	}

	function buttonred(){
		for(let i=0;i<allButton.length;i++){
			allButton[i].classList.remove(allButton[i].classList[1]);
			allButton[i].classList.add('btn-danger');
		}
	}
	function buttongreen(){
		for(let i=0;i<allButton.length;i++){
			allButton[i].classList.remove(allButton[i].classList[1]);
			allButton[i].classList.add('btn-success');
		}
	}
	function buttonreset(){
		for(let i=0;i<allButton.length;i++){
			allButton[i].classList.remove(allButton[i].classList[1]);
			allButton[i].classList.add(copyallButton[i]);
		}
	}
	
	function buttonrand(){
		var choose = ['btn-danger','btn-success','btn-warning','btn-primary'];
		for(let i=0;i<allButton.length;i++){
			let num=Math.floor(Math.random()*4);
			allButton[i].classList.remove(allButton[i].classList[1]);
			allButton[i].classList.add(choose[num]);
		}
	}
}

//Fifth
let blackjackgame={
	'you': {'scorespan':'#yourscore', 'div':'#yourbox', 'score':0},
	'dealer': {'scorespan':'#dealerscore', 'div':'#dealerbox', 'score':0},
	'cards': ['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
	'cardsmap': {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'Q':10,'K':10,'A':11},
	'win':0,
	'lost':0,
	'draw':0,
	'isstand': false,
	'turnsover': false,
};

const you = blackjackgame['you'];
const dealer = blackjackgame['dealer'];
const hitsound=new Audio('sounds/swish.m4a');
const winsound= new Audio('sounds/cash.mp3');
const losssound = new Audio('sounds/aww.mp3');

document.querySelector('#hit').addEventListener('click',blackjackhit);
document.querySelector('#deal').addEventListener('click',blackjackdeal);
document.querySelector('#stand').addEventListener('click',dealerlogic);

function blackjackhit(){
	if(blackjackgame['isstand'] === false){
	let cards = randomcard();
	showcard(cards,you);
	updatescore(cards,you);
	showscore(you);

	console.log(you['score']);
	}
}
function showcard(card,activeplayer){
	console.log(card);
	if(activeplayer['score'] <= 21){
		let cardimage=document.createElement('img');
		if(card == '2')
			cardimage.src='images/2.png';
		else if(card == '3')
			cardimage.src='images/3.png';
		else if(card == '4')
			cardimage.src='images/4.png';
		else if(card == '5')
			cardimage.src='images/5.png';
		else if(card == '6')
			cardimage.src='images/6.png';
		else if(card == '7')
			cardimage.src='images/7.png';
		else if(card == '8')
			cardimage.src='images/8.png';
		else if(card == '9')
			cardimage.src='images/9.png';
		else if(card == '10')
			cardimage.src='images/10.png';
		else if(card == 'J')
			cardimage.src='images/J.png';
		else if(card == 'Q')
			cardimage.src='images/Q.png';
		else if(card == 'K')
			cardimage.src='images/K.png';
		else if(card == 'A')
			cardimage.src='images/A.png';
		//cardimage.src='images/${card.id}.png';
		document.querySelector(activeplayer['div']).appendChild(cardimage);
		hitsound.play();
	}
}
function blackjackdeal(){
	if(blackjackgame['turnsover'] === true){
	let yourimage=document.querySelector('#yourbox').querySelectorAll('img');
	for(let i=0;i<yourimage.length;i++)
		yourimage[i].remove();
	let dealerimage=document.querySelector('#dealerbox').querySelectorAll('img');
	for(let i=0;i<dealerimage.length;i++)
		dealerimage[i].remove();
	you['score'] = 0;
	dealer['score'] = 0;
	document.querySelector('#yourscore').textContent = 0;
	document.querySelector('#dealerscore').textContent = 0;
	document.querySelector('#dealerscore').style.color = 'black';
	document.querySelector('#yourscore').style.color = 'black';
	document.querySelector('#status').textContent = "Let's Play";
	document.querySelector('#status').style.color = 'black';
	blackjackgame['isstand'] = false;
	blackjackgame['turnsover'] = false;
	}
}
function randomcard(){
	let num=Math.floor(Math.random()*13);
	return blackjackgame['cards'][num];
}
function updatescore(card,activeplayer){
	activeplayer['score'] += blackjackgame['cardsmap'][card];
}
function showscore(activeplayer){
	if(activeplayer['score'] > 21){
		document.querySelector(activeplayer['scorespan']).textContent = 'BUST!';
		document.querySelector(activeplayer['scorespan']).style.color = 'red';
	}
	else{
		document.querySelector(activeplayer['scorespan']).textContent = activeplayer['score'];
	}
}

function sleep(ms){
	return new Promise(resolve => setTimeout(resolve,ms));
}

async function dealerlogic(){
	blackjackgame['isstand'] = true;
	while(dealer['score'] < 16){
	let card = randomcard();
	showcard(card,dealer);
	updatescore(card,dealer);
	showscore(dealer);
	await sleep(1000);
}
	blackjackgame['turnsover'] = true;
	let dwin = winner();
	showresult(dwin);
}
function winner(){
	let winner;
	if(you['score'] <=21){
		if(you['score'] > dealer['score'] || (dealer['score'] > 21)){
			console.log("win");
			blackjackgame['win']++;
			winner=you;
		}
		else if(you['score'] < dealer['score']){
			console.log("lost");
			blackjackgame['lost']++;
			winner=dealer;
		}
		else if(you['score'] === dealer['score']){
			blackjackgame['draw']++;
			console.log("draw");
		}
		
	}
	else if(you['score'] > 21 && dealer['score'] <= 21){
		blackjackgame['lost']++;
		console.log('lost');
		winner=dealer;
	}
	else if(you['score'] > 21 && dealer['score'] > 21){
		blackjackgame['draw']++;
		console.log("draw");
	}
	console.log("winner is ",winner);
	return winner;
}
function showresult(winner){
	let message,messagecolor;
	if(blackjackgame['turnsover'] === true){
	if(winner === you)
	{ 
		document.querySelector('#wins').textContent = blackjackgame['win'];
		message = "you win";
		messagecolor = "green";
		winsound.play();
	}
	else if(winner === dealer)
	{
		document.querySelector('#losses').textContent = blackjackgame['lost'];
		message = "you lost";
		messagecolor = "red";
		losssound.play();
	}
	else{
		document.querySelector('#draws').textContent = blackjackgame['draw'];
		message = "you drew";
		messagecolor = "black";
	}
	document.querySelector('#status').textContent = message;
	document.querySelector('#status').style.color = messagecolor;
	}
}


