const card = document.querySelector(".card1")
const cvc = document.querySelector(".cvc")
const amount = document.querySelector(".amount")
const f_name = document.querySelector(".f_name")
const l_name = document.querySelector(".l_name")
const city = document.querySelector(".city")
const state = document.querySelector(".state")
const p_code = document.querySelector(".p_code")
const p_mesa = document.querySelector(".p_mesa")
const alerta = document.getElementById("alerta_top")
const alertGreen = document.getElementById("alerta_bot")


function Cambiar_Estilos(valor) {


    let camp = document.querySelector(valor) //1. obtener el elemento HTML 
    
    camp.style.background = "red"
    camp.style.opacity = "50%"



}

function Default(valor) {

    let def = document.querySelector(valor) //1. obtener el elemento HTML 

    def.style.background = "white"
    


}

const id =

ca = "";
cv = "";
am = "";
fn = "";
ln = "";
cy = "";
st = "";
pc = "";
me = "";





function Validar_Formulario(event) {
var conf = 0


    if (card.value == "") {
        ca = ".card1"
        Cambiar_Estilos(ca)
        alerta.style.display = "block"
        
    } else if (card.value !== "") {
        
        Default(ca)
        alerta.style.display = "none"
         
    }


    if (cvc.value == "") {
        alerta.style.display = "block"
        cv = ".cvc"
        Cambiar_Estilos(cv)
        
    } else if (cvc.value !== "") {

        Default(cv)
         

    }

    if (amount.value == "") {
        alerta.style.display = "block"
        am = ".amount"
        Cambiar_Estilos(am)
        
    } else if (amount.value !== "") {

        Default(am)
         
    }

    if (f_name.value == "") {
        alerta.style.display = "block"
        fn = ".f_name"
        Cambiar_Estilos(fn)
         
    } else if (f_name.value !== "") {

        Default(fn)
        
    }

    if (p_code.value == "") {
        alerta.style.display = "block"
        pc = ".p_code"
        Cambiar_Estilos(pc)
        
    } else if (p_code.value !== "") {

        Default(pc)
         
    }

    if (city.value == "") {
        alerta.style.display = "block"
        cy = ".city"
        Cambiar_Estilos(cy)
        
    } else if (city.value !== "") {

        Default(cy)
         
    }

    if (state.value == "Pick a state") {
        alerta.style.display = "block"   
        st = ".state"
        Cambiar_Estilos(st)
        
    } else if (state.value !== "") {
       
        Default(st)
         
    }


    if (l_name.value == "") {
        alerta.style.display = "block"
        ln = ".l_name"
        Cambiar_Estilos(ln)
       
    } else if (l_name.value !== "") {

        Default(ln)
        
    }

   
    if (p_mesa.value == "") {
        alerta.style.display = "block"
        me = ".p_mesa"
        Cambiar_Estilos(me)
        
    } else if (p_mesa.value !== "") {

        Default(me)
        

    }

  if (card.value !== "" && cvc.value !== "" && amount.value !== "" && f_name.value !== "" && p_code.value !== "" && city.value !== "" && state.value !== "Pick a state" && l_name.value !== "" && p_mesa.value !== ""  ) {
    
    alertGreen.style.display = "block"
    
  }else{

    alertGreen.style.display = "none"

  }

  

 
}


