const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true});

//const Cat = mongoose.model('Cat', { name: String });
//const kitty = new Cat({ name: 'Zildjian' });
//kitty.save().then(() => console.log('meow'));


const fruitSchema = new mongoose.Schema ({
   name: { type: String, required: [true, "Fruit name required."] },
   rating: {type: Number, min: 1, max: 10},
   review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
   name: "Apple",
   rating: 7,
   review: "Pretty solid as a fruit."
});

//fruit.save();

const kiwi = new Fruit ({
   name: "kiwi",
   rating: 5,
   review: "Kiwi is ok."
});

const orange = new Fruit ({
   name: "orange",
   rating: 8,
   review: "I love orange juice."
});

const banana = new Fruit ({
   name: "banana",
   rating: 7,
   review: "Increase your energy."
});


// Fruit.insertMany([kiwi, orange, banana], (err) => {
//	if(err) {
//		console.log(err);
//	} else {
//                   console.log("save fruitsDB ok");
//                }
// });

Fruit.find( (err, fruits) => {
	if(err) {
                     console.log(err);
	} else {
	             mongoose.connection.close();
                     //console.log(fruits);
                     fruits.forEach( (fruit) => {
   		     console.log(fruit.name)
               		});
        } //end if   
});

Fruit.updateOne({_id: "5cf2bd8874428b6a6af0fe16"}, {name: "Peach"}, (err) => {
  if (err) {
       console.log(err);
   }else {
       console.log("Fruit update ok");
     }
  });//end Fruit Update

Fruit.deleteMany({name: "kiwi"}, (err) => {  //deleteOne only delete one item
  if (err) {
       console.log(err);
   }else {
       console.log("Fruit delete ok");
     }
  });//end Fruit Update


const personSchema = new mongoose.Schema ({
   name: String,
   age: Number,
   favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit ({
   name: "Pineapple",
   rating: 10,
   review: "Wonderful fruit."
});

pineapple.save();

const person = new Person ({
   name: "MingLam",
   age: 32,
   favouriteFruit: pineapple   //not "Pineapple", pineapple is a schema
});

person.save();

Person.deleteMany({name: "MingGor"}, (err) => {  //deleteOne only delete one item
  if (err) {
       console.log(err);
   }else {
       console.log("Mingo delete ok");
     }
  });//end Mingo delete
