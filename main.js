let user = {
    name:"sarah",
    email:"sarahjumaiah@gmail.com",
    id: 227,
    available: false,
    check:function(){
        if(this.available===true){
            console.log("available to work");
        }
        else{
            console.log("not available to work");
            
        }
    },
    address: {
        city:{
            region: "riyadh",
            governorate: "kharj"
        },
        neighborhood: "yameen",
        postcode: 16572
    },
    skills:["html","css","js"]
}

console.log(user);
console.log(user.name);
user.id = "442";
console.log(user.id);
delete user.email;
console.log(user);
this.available = "true";
console.log(user.check());
console.log(user.address);
console.log(user.address.neighborhood);
console.log(user.skills[2]);
console.log(user.skills.join( "," ));

//lab2

characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];

  // 1-Get first name that has blue eyes.
  console.log(characters.find(e=>e.eye_color === "blue"));

  //2-Get first gender that is his mass is over 50
  console.log(characters.find(e=>e.mass > 50 ).gender);

  //3-Get characters with height less than 200
  console.log(characters.filter(e=>e.height < 200 ));

  //4-Get all male characters
  console.log(characters.filter(e=>e.gender === "male" ));

//5-Get array of all names only
console.log(characters.map(e=>e.name));

//6-Get array of all heights only
console.log(characters.map(e=>e.height));

//7-Sort by mass (low to high)
console.log(characters.sort((a, b) => a.mass - b.mass));

//8-Sort by height (high to low)
console.log(characters.sort((a, b) => b.height - a.mass));

//9-Does every character have mass more than 40?
console.log(characters.every((e=> e.mass>40)));

//10-Is every character shorter than 200?
console.log(characters.every((e=> e.height<200)));

//11-Is there at least one character with blue eyes?
console.log(characters.some((e=> e.eye_color=== "blue")));

//12-Is there at least one character taller than 210?
console.log(characters.some((e=> e.heightr>210)));







