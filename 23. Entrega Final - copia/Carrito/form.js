$("#form").submit(guardarLocal)

 function guardarLocal(){
   let usuariosStorage = localStorage.getItem("Usuarios")
   let nombre = $("#nombre").value
   let apellido = $("#apellido").value
   let direccion = $("#direccion").value
   let email = $("#email").value
   if(usuariosStorage){
     usuariosStorage.push({nombre: nombre, apellido: apellido, direccion: direccion, email: email})
     localStorage.setItem("Usuarios", usuariosStorage)
   } else {
     let arrayUsuarios = []
     arrayUsuarios.push({nombre: nombre, apellido: apellido, direccion: direccion, email: email})
     localStorage.setItem("Usuarios", arrayUsuarios)
   }
}