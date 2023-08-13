function addUser() {

    let nomeUsuario = document.getElementById("nomeUsuario").value;
  
    nomeUsuario = document.getElementById("nomeUsuario").value;
  
    localStorage.setItem("nomeUsuario", nomeUsuario);
    
      window.location = "Kwitter_room.html";
  }
  
  