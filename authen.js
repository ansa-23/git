import supa from './config.js';

let reg = document.getElementById('register')

let name = document.getElementById('username')
let  contact = document.getElementById('usercontact')
let  mail = document.getElementById('exampleInputEmail1')
let  password = document.getElementById('exampleInputPassword1')


async function signup(e){
    e.preventDefault()
    try{
        if(!name.value){
            alert("Enter your name")

            return
        }
        if(!password.value){
            alert("Plz enter your password")

            return
        }
        const {data,error} = await supa.auth.signup({
             email: mail.value,
             password: password.value,
              options: {
               data: {
                phone: contact.value,
                Name:name.value ,
      }
    }
        }) 
        if(error){
            console.log(error);
            return
        }else{
            location.href="home.html"
        }
    }catch(err){
        console.log(err);
    }

}


reg && reg.addEventListener('submit',signup)

//  login

let log = document.getElementById('login')

let  email = document.getElementById('exampleInputEmail1')

let  logPass= document.getElementById('exampleInputPassword1')

async function loginn(e){
    e.preventDefault()
    try{
        if(!email.value){
            alert("Enter your email")

            return
        }
        if(!logPass.value){
            alert("Plz enter your password")

            return
        }
        const {data,error} = await supa.auth.signInWithPassword({
             email: email.value,
             password: logPass.value,   
        })



        if(error){
            console.log(error);
            return
        }else{
            location.href="home.html"
        }
        }catch(err){
            console.log(err);
      } 
    }

    log && log.addEventListener("submit",loginn)

    //logout

    let out = document.getElementById('logout')

    async function  outBtn(){
        const{error} = await supa.auth.signout()

        if(!error){
            alert('Logout successfully')
            location.href='index.html'
        }
    }

    out && out.addEventListener('submit',outBtn)


