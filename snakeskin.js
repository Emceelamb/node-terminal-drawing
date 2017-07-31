// Snake Skin Pattern
// Made in a live coding session

for(var x=0; x<20;x++){
    tree();
    process.stdout.write('\n');
    sleep(400);
    v();
    process.stdout.write('\n');
    sleep(400);
}

function left(){
  process.stdout.write(c.green('\\'));
}

function right(){
  process.stdout.write(c.green('/ '));
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
