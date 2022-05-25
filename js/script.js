function validar() {
    var result_val_email = validar_email();
    var val_passwd = validar_password();
    var val_dir = validar_direccion ();
    var val_localidad = validar_loc ();
    var val_codigo = val_cod ();
    var val_tel_fijo = val_fijo();
    var val_tel_cel=val_cel();
    var val_check= checkbox();
    return (result_val_email && val_passwd  && val_dir && val_localidad && val_codigo && val_tel_fijo && val_tel_cel && val_check);
}

function validar_fto_email(email) {
    var idx_arroba = email.indexOf("@");
    if (idx_arroba < 1) {
        return false;
    } else {
        var idx_punto = email.indexOf(".");
        if(idx_punto <= idx_arroba + 2 || idx_punto == email.length - 1) {
            return false;
        }        
        return true;
    }
}


function validar_email() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("msj-email");
    if (email != "") {
        if (validar_fto_email(email)) {
            div.innerHTML = "";
            return true;
        } else {
            div.innerHTML = "El formato del email no es valido";
            div.style =  "color:red";
            return false;
        }
    } else {
        div.innerHTML = "El email no puede estar en blanco";
        div.style =  "color:red";
        return false;
    }
}

function validar_password(){
    var p1 = document.getElementById("passwd").value;
    var p2 = document.getElementById("repasswd").value;
    var div =  document.getElementById("msj-passwd");
    if (p1 && p2 != ""){
        if(p1 != p2) {
            div.innerHTML ="las contraseñas no coinciden";
            return false;
          } else {
            div.innerHTML=("")
            div.style =  "color:red";
            return false; 
          }
    }else{
        div.innerHTML ="las contraseñas no pueden estar en  blanco"
        div.style =  "color:red";
        return false;
    }
}

function validar_direccion(){
    var dir =  document.getElementById("direccion").value;
    var div = document.getElementById("msj-direccion");
    if (dir != ""){
        div.innerHTML = "";
        return true;
    }else{
        div.innerHTML = "La direccion es obligatoria"
        div.style =  "color:red";
        return false;
    }
}

function validar_loc(){
    var loc = document.getElementById("loc").value;
    var div = document.getElementById("msj-loc");
    if (loc != ""){
        div.innerHTML = "";
        return true
    }else{
        div.innerHTML ="la localidad es obligatoria"
        div.style = "color:red"
        return false;
    }
}

function val_fto_codpostal(cod){
    if (cod.length ==5 && parseInt(cod) >= 1000 && parseInt(cod) <= 99999){
        return  true
    }else{
        return false
    }
}

function val_cod(){
    var cod = document.getElementById("codpostal").value;
    var div = document.getElementById("msj-codpostal");
    if (cod != ""){
        if (val_fto_codpostal(cod)){
            div.innerHTML = "";
            return  true
        }else{
            div.innerHTML="el formato del codigo postal no es valido"
            div.style ="color:red"
            return false
        }

    }else{
        div.innerHTML ="El  codigo postal debe ser obligatorio";
        div.style="color:red";
        return false
    }
}

function val_fto_fijo (fijo){
    if( fijo.length ==9 && parseInt(fijo) >= 000000000 && parseInt(fijo) <= 999999999){
        return true
    }else{
        return false
    }
}

function val_fijo (){
    var fijo = document.getElementById("fijo").value;
    var div =  document.getElementById("msj-fijo");
    if  (fijo !=""){
        if (val_fto_fijo (fijo)){
            div.innerHTML ="";
            return true
        }else{
            div.innerHTML= "El formato del numero no es valido"
            div.style="color:red";
            return false
        }
    }else{
        div.innerHTML =" el Numero de telefono tiene que ser obligatorio";
        div.style  =" color:red";
        return false
    }
}

function val_fto_cel (cel){
    if (cel.length ==9 && parseInt(cel) >= 000000000 && parseInt(cel) <= 999999999){
        return  true
    }else{
        return  false
    }

}

function val_cel () {
    var cel = document.getElementById("cel").value;
    var div = document.getElementById("msj_cel");
    if (cel !=""){
        if (val_fto_cel(cel)){
            div.innerHTML ="";
            return true
        }else{
            div.innerHTML="el formato del celular no es valido"
            div.style="color:red";
            return  false
        }
    }else{
        div.innerHTML="el numero celular tiene que ser obligatorio";
        div.style="color:red"
        return false
    }
}

function checkbox(){
    var ch1= document.getElementById("cbox1").checked;
    var ch2= document.getElementById("cbox2").checked;
    var ch3= document.getElementById("cbox3").checked;
    var ch4= document.getElementById("cbox4").checked;
    var div= document.getElementById("msj-check")
    
    if((ch1 =="") && (ch2=="")){
        div.innerHTML="debe seleccionar al menos dos aficiones"
        div.style="color:red"
        return  true
    }else if((ch2=="")&&(ch3=="")&&(ch4=="")){
        div.innerHTML="debe  seleccionar al menos dos aficiones";
        div.style="color:red";
        return true;
    }else{
        div.innerHTML="";
        return false;
    }
}