import supa from './config.js'

let user = document.getElementById('username')

async function  fetch(){
    try{
        const{data,error} = await supa.auth.getUser()
        console.log(data);

         if(data){
        user.innerHTML = data.user.user_metadata.Name
    }
    }catch(err){
    console.log(err);
}
   
    
}

fetch()