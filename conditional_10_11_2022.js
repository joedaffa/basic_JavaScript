var jam =   15; //ini input

if (jam >= 13){ //jika jam lebih besar atau sama dengan 13
    console.log('PM')  //buat output 'pm'
}
else{  //selain itu(lebih besar)
    console.log('AM')  //buat output 'am'
}

var cekjam = (jam >= 13) ? "PM" : "AM";
console.log(cekjam);