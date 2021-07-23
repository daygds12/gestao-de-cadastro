$(function () {
    var operation = "C";
    var selected_index = -1; 
    var tblPersons = localStorage.getItem("tblPersons"); 
    tblPersons = JSON.parse(tblPersons); 
    if (tblPersons === null) 
        tblPersons = [];
  
    function Create() {
          var person = JSON.stringify({
         Nome: $("#Nome").val(),
          CPF: $("#CPF").val(),
          Telefone: $("#Telefone").val(),
          Email: $("#Email").val(),
          Endereçoitude: $("#Endereço").val(),
          Longitude: $("#CEP").val()
      }); 
      
      tblPersons.push(person);
      localStorage.setItem("tblPersons", JSON.stringify(tblPersons));
      alert("Os dados foram armazenados"); 
      return true;
    }
  
    function Edit() {
      tblPersons[selected_index] = JSON.stringify({
          Nome: $("#Nome").val(),
          CPF: $("#CPF").val(),
          Telefone: $("#Telefone").val(),
          Email: $("#Email").val(),
          Endereçoitude: $("#Endereço").val(),
          Longitude: $("#CEP").val()
      });
      
      localStorage.setItem("tblPersons", JSON.stringify(tblPersons)); 
      alert("Cadastro editado com sucesso"); 
      return true;
    }
  
    function Delete() {      
      tblPersons.splice(selected_index, 1); 
      localStorage.setItem("tblPersons", JSON.stringify(tblPersons)); 
      alert("Cliente deletado"); 
    }
  
    function List() {
      $("#tblList").html("");
      $("#tblList").html(
              "<thead>" +
              "<tr>" +                
              "<th>Nome</th>" +
              "<th>CPF</th>" +
              "<th>Telefone</th>" +
              "<th>Email</th>" +
               "<th>Endereço</th>" +
               "<th>CEP</th>" +
              "<th>Editar</th>" +
              "</tr>" +
              "</thead>" +
              "<tbody>" +
              "</tbody>"
              ); 
      for (var i in tblPersons) {
          var per = JSON.parse(tblPersons[i]);
          $("#tblList tbody").append("<tr>" +                    
                  "<td>" + per.Nome + "</td>" +
                  "<td>" + per.CPF + "</td>" +
                  "<td>" + per.Telefone + "</td>" +
                  "<td>" + per.Email + "</td>" +
                   "<td>" + per.Endereço + "</td>" + 
                    "<td>" + per.CEP + "</td>" +                  
                                     
                   "<td><img src='http://res.cloudinary.com/demeloweb/image/upload/v1497537879/edit_n51oto.png' alt='Edit" + i + "' class='btnEdit'/>&nbsp &nbsp<img src='http://res.cloudinary.com/demeloweb/image/upload/v1497537882/delete_ntuxjl.png' alt='Delete" + i + "' class='btnDelete'/></td>" +                  
                  
                  "</tr>"
                  );
      } 
    }
  
    $("#frmPerson").bind("submit", function () {
      if (operation === "C")
          return Create();
      else
          return Edit();
    }); 
    
    List();
  
    $(".btnEdit").bind("click", function () {
      operation = "E"; 
      
      selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
      var per = JSON.parse(tblPersons[selected_index]); 
      $("#Nome").val(per.Nome);
      $("#CPF").val(per.CPF);
      $("#Telefone").val(per.Telefone);
      $("#Email").val(per.Email);
       $("#Endereço").val(per.Endereço);
       $("#CEP").val(per.CEP);
    
    });
  
    $(".btnDelete").bind("click", function () {
      selected_index = parseInt($(this).attr("alt").replace("Delete", "")); 
      Delete(); 
      List(); 
    });
  });