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








