

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


    let card = document.querySelector(".card1")
    let cvc = document.querySelector(".cvc")
    let amount = document.querySelector(".amount")
    let f_name = document.querySelector(".f_name")
    let l_name = document.querySelector(".l_name")
    let city = document.querySelector(".city")
    let state = document.querySelector(".state")
    let p_code = document.querySelector(".p_code")
    let p_mesa = document.querySelector(".p_mesa")

    if (card.value == "") {
        ca = ".card1"
        Cambiar_Estilos(ca)

    } else if (card.value !== "") {

        Default(ca)

    }


    if (cvc.value == "") {

        cv = ".cvc"
        Cambiar_Estilos(cv)

    } else if (cvc.value !== "") {

        Default(cv)

    }

    if (amount.value == "") {

        am = ".amount"
        Cambiar_Estilos(am)

    } else if (amount.value !== "") {

        Default(am)

    }

    if (f_name.value == "") {

        fn = ".f_name"
        Cambiar_Estilos(fn)
        

    } else if (f_name.value !== "") {

        Default(fn)

    }

    if (p_code.value == "") {

        pc = ".p_code"
        Cambiar_Estilos(pc)
        console.log(pc)

    } else if (p_code.value !== "") {

        Default(pc)

    }

    if (city.value == "") {

        cy = ".city"
        Cambiar_Estilos(cy)


    } else if (city.value !== "") {

        Default(cy)

    }

    if (state.value == "Pick a state") {

        st = ".state"
        Cambiar_Estilos(st)

    } else if (state.value !== "") {

        Default(st)

    }


    if (l_name.value == "") {

        ln = ".l_name"
        Cambiar_Estilos(ln)

    } else if (l_name.value !== "") {

        Default(ln)

    }

   
    if (p_mesa.value == "") {

        me = ".p_mesa"
        Cambiar_Estilos(me)

    } else if (p_mesa.value !== "") {

        Default(me)

    }


}



