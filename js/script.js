
function Livro(titulo, autor, numPaginas, status){
	this.titulo = titulo;
	this.autor = autor;
	this.numPaginas = numPaginas;
	this.status = status;
}

function cadastrar(){
	var d_titulo = document.getElementById("titulo");
	var d_autor = document.getElementById("autor");
	var d_numPaginas = document.getElementById("numPaginas");
	var d_status = document.getElementById("status");

	var livro = new Livro(d_titulo, d_autor, d_numPaginas, d_status);

	livros.push(livro);
	alert("teste", livro.titulo);

	var tabela = document.getElementById("tabela");
	var linha = tabela.insertRow(1);

	var c_titulo = linha.insertCell(0);
	var c_autor = linha.insertCell(1);
	var c_numPaginas = linha.insertCell(2);
	var c_status = linha.insertCell(3);

	c_titulo.innerHTML = livro.nome;
	c_autor.innerHTML = livro.autor;
	c_numPaginas.innerHTML = livro.numPaginas;
	c_status.innerHTML = livro.status;

}

function criarArray(){
	var livros = new Array();
	alert("TUDO CERTO UHU");

}

function mensagemOk(){
	alert("Cadastro efetuado com sucesso!");
}