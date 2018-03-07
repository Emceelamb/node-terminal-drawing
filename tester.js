x=0;
y=0;
while(x<14){
  sleep(1000);
  x++;
  if(x<9){
  if(x%2!=0){
    while(y<60){
      y++;
      if(y<22){
        if(y%2!=0){
          process.stdout.write(c.blue.bold('='));
        } else {
          process.stdout.write(c.white.bold('*'));
        }
      }
      if(y>22) {
          process.stdout.write(c.bold.red('='));
        }
    }
    process.stdout.write('\n');
    y=0;
  } else {
    while(y<60){
      y++;
      if(y<22){
        if(y%2!=0){
          process.stdout.write(c.bold.white('*'));
        } else {
          process.stdout.write(c.bold.blue('='));
        }
      }
      if(y>22) {
          process.stdout.write(c.bold.white('='));
        }
    }
    process.stdout.write('\n')
  }
  y=0;
  }
  if(x>9){
    if(x%2==0){
      while(y<59){
        y++;
        process.stdout.write(c.bold.red('='))
      }
      process.stdout.write('\n');
      y=0;
    } else {
          while(y<59){
            y++;
            process.stdout.write(c.bold.white('='))
          }
          process.stdout.write('\n');
          y=0;
    }
  }
}
