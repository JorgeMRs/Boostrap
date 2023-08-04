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
const T_card = document.getElementById("T_card")
const T_cvc = document.getElementById("T_cvc")
const T_amount = document.getElementById("T_amount")
const T_F_name = document.getElementById("T_F_name")
const T_L_name = document.getElementById("T_L_name")
const T_state = document.getElementById("T_state")
const T_P_code = document.getElementById("T_P_code")
const T_message = document.getElementById("T_message")
const T_city = document.getElementById("T_city")



function Cambiar_Estilos(valor, valor2) {


    let camp = document.querySelector(valor) //1. obtener el elemento HTML 
   

    camp.style.opacity = "50%"
    camp.style.border = "3px solid red"
    valor2.style.color = "red"



}

function Default(valor, valor2) {

    let def = document.querySelector(valor) //1. obtener el elemento HTML 

    def.style.border = "none"
    def.style.border = "3px solid black"
    valor2.style.color = "black"
    
    


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
        Cambiar_Estilos(ca, T_card)
        alerta.style.display = "block"
        
    } else if (card.value !== "") {
        
        Default(ca, T_card)
        alerta.style.display = "none"
         
    }


    if (cvc.value == "") {
        alerta.style.display = "block"
        cv = ".cvc"
        Cambiar_Estilos(cv, T_cvc)
        
    } else if (cvc.value !== "") {

        Default(cv, T_cvc)
         

    }

    if (amount.value == "") {
        alerta.style.display = "block"
        am = ".amount"
        Cambiar_Estilos(am, T_amount)
        
    } else if (amount.value !== "") {

        Default(am, T_amount)
         
    }

    if (f_name.value == "") {
        alerta.style.display = "block"
        fn = ".f_name"
        Cambiar_Estilos(fn, T_F_name)
         
    } else if (f_name.value !== "") {

        Default(fn, T_F_name)
        
    }

    if (p_code.value == "") {
        alerta.style.display = "block"
        pc = ".p_code"
        Cambiar_Estilos(pc, T_P_code)
        
    } else if (p_code.value !== "") {

        Default(pc, T_P_code)
         
    }

    if (city.value == "") {
        alerta.style.display = "block"
        cy = ".city"
        Cambiar_Estilos(cy, T_city)
        
    } else if (city.value !== "") {

        Default(cy, T_city)
         
    }

    if (state.value == "Pick a state") {
        alerta.style.display = "block"   
        st = ".state"
        Cambiar_Estilos(st, T_state)
        
    } else if (state.value !== "") {
       
        Default(st, T_state)
         
    }


    if (l_name.value == "") {
        alerta.style.display = "block"
        ln = ".l_name"
        Cambiar_Estilos(ln, T_L_name)
       
    } else if (l_name.value !== "") {

        Default(ln, T_L_name)
        
    }

   
    if (p_mesa.value == "") {
        alerta.style.display = "block"
        me = ".p_mesa"
        Cambiar_Estilos(me, T_message)
        
    } else if (p_mesa.value !== "") {

        Default(me , T_message)
        

    }

  if (card.value !== "" && cvc.value !== "" && amount.value !== "" && f_name.value !== "" && p_code.value !== "" && city.value !== "" && state.value !== "Pick a state" && l_name.value !== "" && p_mesa.value !== ""  ) {
    
    alertGreen.style.display = "block"
    
  }else{

    alertGreen.style.display = "none"

  }

  if (card.value == "") {
    
  }

 
}


