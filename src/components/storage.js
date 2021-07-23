function edit_row(no) {
	document.getElementById("edit_button" + no).style.display = "none";
	document.getElementById("save_button" + no).style.display = "block";

	var nome = document.getElementById("nome_row" + no);
	var email = document.getElementById("email_row" + no);
	var cidade = document.getElementById("cidade_row" + no);

	var nome_data = nome.innerHTML;
	var email_data = email.innerHTML;
	var cidade_data = cidade.innerHTML;

	nome.innerHTML = "<input type='text' id='nome_text" + no + "' value='" + nome_data + "'>";
	email.innerHTML = "<input type='text' id='email_text" + no + "' value='" + email_data + "'>";
	cidade.innerHTML = "<input type='text' id='cidade_text" + no + "' value='" + cidade_data + "'>";
}

function save_row(no) {
	var nome_val = document.getElementById("nome_text" + no).value;
	var email_val = document.getElementById("email_text" + no).value;
	var cidade_val = document.getElementById("cidade_text" + no).value;

	document.getElementById("nome" + no).innerHTML = nome_val;
	document.getElementById("email_row" + no).innerHTML = email_val;
	document.getElementById("cidade_row" + no).innerHTML = cidade_val;

	document.getElementById("editar_button" + no).style.display = "";
	document.getElementById("salvar_button" + no).style.display = "";
}

function delete_row(no) {
	document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
	var new_nome = document.getElementById("new_nome").value;
	var new_email = document.getElementById("new_email").value;
	var new_cidade = document.getElementById("new_cidade").value;

	var table = document.getElementById("data_table");
	var table_len = (table.rows.length) - 1;
	var row = table.insertRow(table_len).outerHTML =
		"<tr id='row" + table_len + "'><td id='nome" + table_len + "'>" + new_nome + "</td><td id='email_row" + table_len + "'>" + new_email + "</td><td id='cidade_row" + table_len + "'>" + new_cidade + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";

	document.getElementById("new_nome").value = "";
	document.getElementById("new_email").value = "";
	document.getElementById("new_cidade").value = "";
}