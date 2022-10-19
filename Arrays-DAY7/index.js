let movies =["ninnu kori","bahubali","nenu naa rakshashi","aagadu"];

for(let i =0; i<=movies.length;i++){
  if(movies[i]=="bahubali" || movies[i]== "aagadu"){
    continue;
  }
  console.log(movies[i]);
}
let i=0;
while(i<=movies.length){
  if(movies[i]=="bahubali" || movies[i]== "aagadu"){
    continue;
  }
  console.log(movies[i]);
  i++;
}
