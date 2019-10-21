function Livro(titulo, autor, numPaginas, status) {
	this.titulo = titulo;
	this.autor = autor;
	this.numPaginas = numPaginas;
	this.status = status;
}

function cadastrar() {
	var d_titulo = document.getElementById("titulo").value;
	var d_autor = document.getElementById("autor").value;
	var d_numPaginas = document.getElementById("numPaginas").value;
	var d_status = document.getElementById("status").value;

	var livro = new Livro(d_titulo, d_autor, d_numPaginas, d_status);

	adicionarLivroNaLista("tabela", livro);
}

function adicionarLivroNaLista(idTabela, livro) {
	var tabela = document.getElementById(idTabela);
	var linha = tabela.insertRow();
	var coluna1 = linha.insertCell(0);
	var coluna2 = linha.insertCell(1);
	var coluna3 = linha.insertCell(2);
	var coluna4 = linha.insertCell(3);
	var coluna5 = linha.insertCell(4);
	coluna1.innerHTML = livro.titulo;
	coluna2.innerHTML = livro.autor;
	coluna3.innerHTML = livro.numPaginas;
	coluna4.innerHTML = livro.status;
	coluna5.innerHTML = "<button onclick='removerLinha(this)'>Remover</button>";
}

function removerLinha(linha) {
	var i = linha.parentNode.parentNode.rowIndex;
	document.getElementById('tabela').deleteRow(i);
}