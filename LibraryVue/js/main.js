
var app = new Vue({
	//el = propriedade do elemento
	//#app conectou com o id do html
	el: '#app',


	//aqui é o valor que a gente vai passar
	data: {
		termoBusca: '',
		livros: [],
		titulo: '',
		autor: '',
		numPaginas: 0,
		status: ''
	},

	computed:{
		livrosPesquisa: function(){
			var self = this

			//aparentemente usar o filter é o mesmo que usar um for each
			return self.livros.filter(
				function(val){
					//se o valor que está sendo visto no momento (isso é, se é != -1 [se ele não é falso]) então retorna
					return val.toLowerCase().indexOf(self.termoBusca.toLowerCase())!== -1
			})
		}
	},

	methods:{
		adicionarLivro: function(){
			this.livros.push({ titulo: this.titulo, autor: this.autor, numPaginas: this.numPaginas, status: this.status }),
			this.titulo = null,
			this.autor = null,
			this.numPaginas = null,
			this.status = null
		},

		excluirLivro: function(index){
			this.livros.splice(index, 1)
		}


	}
})




//@submit
//:disable:'!lido'
/*Vue.component('todo-item', {
  template: '<li>Isso é um item</li>'
})

Vue.component('lista', {
	template: 
	`
	<div>	

		<div class="card" id="card">
			<h3> Listagem de livros </h3> <br>

			<input class="form-control" type="text" id="pesquisa" onkeyup="pesquisarLivro()" placeholder="Pesquisar por título">

				<table class="table table-bordless" id="tabela"><br>	
					<thead>
						<th scope="col"> Título </th>
						<th scope="col"> Autor </th>
						<th scope="col"> Número de páginas </th>
						<th scope="col"> Status </th>
						<th scope="col"> Remover </th>
					</thead>	
						
					<tbody id="body_tabela">
					</tbody>
				</table>
		</div>

	</div>`,

	data(){
		return{
			livros: []
		}
	},

	methods: {
		adicionarLivro(livro){
			this.livros.push(livro)
		}
	}
})


Vue.component('livro', {
	template: 
	`<form>
		<div class="form-group" @submit.prevent="onSubmit">
			<label for="titulo">Título: </label>
			<input v-model="titulo" class="form-control" type="text" id="titulo">

			<label for="autor">Autor: </label>
			<input v-model="autor" class="form-control" type="text" id="autor">

			<label for="numPaginas">Número de páginas: </label>
			<input v-model="numPaginas" class="form-control" type="number" id="numPaginas">

			<label for="status">Status de leitura: </label>
			<select v-model.number="status" class="form-control" type="text" id="status">
				<option>Leitura Desejada</option>
				<option>Leitura Atual</option>
				<option>Leitura Concluída</option>
			</select>	
		
		</div>
		
		<input type="submit" value="Submit" class="btn"></input> 				
	</form>`,

	data(){
		return{
			titulo: null,
			autor: null,
			numPaginas: null,
			status: null
		}
	},

	methods: {
		onSubmit: function(){
			let livro = {
				titulo: this.titulo,
				autor: this.autor,
				numPaginas: this.numPaginas,
				status: this.status
			}

			this.$emit('registro-livro', livro)
			this.titulo = null,
			this.autor = null,
			this.numPaginas = null,
			this.status = null
		}
	}
})

*/
