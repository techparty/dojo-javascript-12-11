console.log('Coding Dojo FACCAT');

var sink = require('sink-test');
var campominado = require('./campo_minado').campominado;

sink.sink('Campo minado', function(test, ok) {
	test('Retorna * para bombas', 3, function() {
		campo = campominado(1, 1, ['*']);
		ok(campo[0] == '*', 'bombas == *');
		campo = campominado(1, 2, ['*', '*']);
		ok(campo[0] == '*', 'item 1 tem bomba');
		ok(campo[1] == '*', 'item 2 tem bomba');
	});
	
	test('Retorno 0 quando não tiver bombas perto', 3, function() {
		campo = campominado(1, 1, ['.']);
		ok(campo[0] == "0", 'não tem bomba por perto');
		campo = campominado(1, 2, ['.', '.']);
		ok(campo[0] == "0", 'não tem bomba no 1');
		ok(campo[1] == "0", 'não tem bomba no 2');
		campo = campominado(1, 1, ['*', '.', '.', '.']);
	});
	
	test('Retorna 1 quando tem bomba por perto', 8, function(){
		campo = campominado(1, 2, ['*', '.']);
		ok(campo[1] == '1', 'Retorna 1 quando bomba antes');
		
		campo = campominado(1, 2, ['.', '*']);
		ok(campo[0] == '1', 'Retorna 1 quando houver uma bomba depois');
		
		campo = campominado(2, 1, ['.', '*']);
		ok(campo[0] == '1', 'Retorna 1 quando houver uma bomba abaixo');
		
		campo = campominado(2, 1, ['*', '.']);
		ok(campo[1] == '1', 'Retorna 1 quando houver uma bomba em cima');
		
		campo = campominado(2, 2, ['*','.','.','.']);
		ok(campo[3] == '1', 'Retorna 1 quando houver uma bomba na superior esquerda');
		
		campo = campominado(2, 2, ['.','*','.','.']);
		ok(campo[2] == '1', 'Retorna 1 quando houver uma bomba na superior direita');
		
		campo = campominado(2, 2, ['.', '.', '.', '*']);
		ok(campo[0] == '1', 'Retorna 1 quando houver uma bomba na inferior direita');
		
		campo = campominado(2, 2, ['.', '.', '*', '.']);
		ok(campo[1] == '1', 'Retorna 1 quando houver uma bomba na inferior esquerda');
	});
	
	test('Retorna 2 quanto tem duas bombas por perto', 7, function(){
		campo = campominado(3, 1, ['*', '.', '*']);
		ok(campo[1] == '2', 'Retorna 2 quando houver duas bombas por perto');
		campo = campominado(2, 2, ['*', '.', 
								   '.','*']);
		ok(campo[1] == '2', 'Retorna o primeiro 2');
		ok(campo[2] == '2', 'Retorna o segundo 2');
		
		campo = campominado(2, 2, ['*', '*', '.', '.']);
		ok(campo[2] == '2', 'Retorna 2 quando hover duas bombas por perto');
		ok(campo[3] == '2', 'Retorna 2 quando hover duas bombas por perto');
		
		campo = campominado(2, 2, ['.', '.', '*', '*']);
		ok(campo[0] == '2', 'Retorna 2 quando houver duas bombas em baixo');
		ok(campo[1] == '2', 'Retorna 2 quando houver duas bombas em baixo');
	});
});
sink.start()