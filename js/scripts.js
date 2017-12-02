
var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period."

//uppercase
var dinosaur = "triceratops"
var nameUpperCased = dinosaur.toUpperCase();
  console.log(nameUpperCased);

//replace
var text2 = text.replace('Velociraptor', nameUpperCased);
  console.log(text2);

//length/2
var text3 = text2.substr(0,text2.length/2);
  console.log(text3);