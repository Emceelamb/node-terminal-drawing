// Snake Skin Pattern
// Made in a live coding session
function snakeskin(){
	for(var x=0; x<20;x++){
	    tree();
	    process.stdout.write('\n');
	    sleep(200);
	    v();
	    process.stdout.write('\n');
	    sleep(200);
	    if(x%6==0){
				treer();
				vr();
	        sleep(200);
	    }
	    if(x%8==0){
				treey();
				vy();
	      sleep(200);
	    }

	}
}


function left(){
  process.stdout.write(c.green('\\'));
}

function right(){
  process.stdout.write(c.green('/'));
}


function leftred(){
  process.stdout.write(c.red('\\'));
}

function rightred(){
  process.stdout.write(c.red('/'));
}


function leftyel(){
  process.stdout.write(c.yellow('\\'));
}

function rightyel(){
  process.stdout.write(c.yellow('/'));
}



function tree(){
  for(var i = 0 ; i <20; i++){
    right();
    left();

  }
}

function v (){
  for(var i=0;i<20;i++){
    left();
    right();
  }
}

function treer(){
  for(var i = 0 ; i <20; i++){
    rightred();
    leftred();

  }
	process.stdout.write('\n');
}

function vr (){
  for(var i=0;i<20;i++){
    leftred();
    rightred();

  }
	process.stdout.write('\n');
}

function treey(){
  for(var i = 0 ; i <20; i++){
    rightyel();
    leftyel();
  }
	process.stdout.write('\n');

}

function vy (){
  for(var i=0;i<20;i++){
    leftyel();
    rightyel();

  }
	process.stdout.write('\n');
}
