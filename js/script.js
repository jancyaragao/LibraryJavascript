
function Livro(titulo, autor, numPaginas, status){
	this.titulo = titulo;
	this.autor = autor;
	this.numPaginas = numPaginas;
	this.status = status;
}

function cadastrar(){
	var d_titulo = document.getElementById("titulo").val();
	var d_autor = document.getElementById("autor").val();
	var d_numPaginas = document.getElementById("numPaginas").val();
	var d_status = document.getElementById("status").val();

	console.log(d_titulo);
	
	var livro = new Livro(d_titulo, d_autor, d_numPaginas, d_status);

	livros = criarArray();

	livros.push(livro);
	alert("teste" + livro.titulo);

	
	/*var linha = tabela.insertRow(1);

	var c_titulo = linha.insertCell(0);
	var c_autor = linha.insertCell(1);
	var c_numPaginas = linha.insertCell(2);
	var c_status = linha.insertCell(3);*/
}

function listar(){
	alert('hmm ok');
	/*for(i = 0; i < livros.length; i++){
		c_titulo.innerHTML = livros[i].titulo;
		c_autor.innerHTML = livros[i].autor;
		c_numPaginas.innerHTML = livros[i].numPaginas;
		c_status.innerHTML = livros[i].status;

	}*/

    var tabela = '<tbody>'
    for(i = 0;i < mainObj.length; i++){
        tabela+= '<tr>';
        tabela+= '<td>' + livros[i].titulo + '</td>';
        tabela+= '<td>' + livros[i].autor + '</td>';
        tabela+= '<td>' + livros[i].numPaginas + '</td>';
        tabela+= '<td>' + livros[i].status + '</td>';
        tabela+= '</tr>';
    }
    tabela+='</tbody>';
    document.getElementById("tabela").innerHTML = tabela;

}

function criarArray(){
	var livros = new Array();
	return livros;
}
