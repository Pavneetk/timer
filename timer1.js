for (let j = 2; j < process.argv.length; j++) {

  if ((process.argv[j] > 0) && (Number(process.argv[j]) !== NaN)) {

    setTimeout(()=>{
      console.log(process.argv[j] + " seconds");
      process.stdout.write('\x07');
    },process.argv[j] * 1000);

  }
}


