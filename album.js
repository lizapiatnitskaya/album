let catalog = {
    "first" : {
        "album":"Snow",
        "title":"Let's it snow!",
        "year": 1970
    },
    "second" : {
        "album":"Fire",
        "title":[],
        "year": 1990
    },
    "third" : {
        "album":"Happy",
    }
   
}
let check = (object, prop, albumprop, value) => {
    if(object[prop].hasOwnProperty("title")){
         if(object[prop].title.length != 0){   
            if (object[prop].hasOwnProperty(albumprop)){
                return "All ok!";
            } else {object[prop][albumprop] = value;} 
         } else { delete object[prop].title;}
     } else if (object[prop].hasOwnProperty(albumprop)){
        return "All ok!";
    } else {object[prop][albumprop] = value;} 

     }
     console.log(check(catalog,"third","year",2001));
     console.log(catalog.first);
     console.log(catalog.second);
     console.log(catalog.third);