function person(name, age, height, favColor){
    this.name =  name;
    this.age = age ;
    this.height = height;
    this.favColor = favColor;
}

var Daffa = new person("Daffa","18 years old","169 cm", "orange");

console.log(Daffa)