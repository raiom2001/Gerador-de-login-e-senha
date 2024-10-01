function gerarNickname() {
    // Listas de palavras para combinar
    const adjetivos = ['forte', 'rápido', 'esperto', 'misterioso', 'valente', 'sagaz', 'feliz', 'triste', 'calmo', 'bravo', 'gentil', 'cruel', 'paciente', 'impaciente', 'criativo', 'inteligente', 'engraçado', 'sério', 'bondoso', 'generoso', 'strong', 'fast', 'smart', 'mysterious', 'brave', 'wise', 'fuerte', 'rápido', 'inteligente', 'misterioso', 'valente', 'sagaz', 'fort', 'rapide', 'intelligent', 'mystérieux', 'brave', 'sage'];
const substantivos = ['fogo', 'água', 'terra', 'ar', 'sombra', 'luz', 'espada', 'escudo', 'livro', 'caneta', 'chave', 'barco', 'carro', 'avião', 'casa', 'leão', 'tigre', 'gato', 'cachorro', 'pássaro', 'peixe', 'cobra', 'floresta', 'deserto', 'montanha', 'mar', 'rio', 'cidade', 'vila', 'castelo', 'sonho', 'realidade', 'verdade', 'mentira', 'poder', 'justiça', 'liberdade', 'fire', 'water', 'earth', 'air', 'shadow', 'light'];
  
    // Função para pegar um elemento aleatório de um array
    function getRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  
    // Gerando as partes do nickname
    const adjetivo = getRandomElement(adjetivos);
    const substantivo = getRandomElement(substantivos);
    const numero = Math.floor(Math.random() * 100);
  
    // Combinando as partes e adicionando um símbolo aleatório
    const simbolos = ['_', '-', '!', '@', '#'];
    const simbolo = getRandomElement(simbolos);
  
    // Formatando o nickname
    const nickname = `${adjetivo}${simbolo}${substantivo}${numero}`;
  
    return nickname;
  }
  
  

////////////////////////////////////////////////////
///GERADOR DE SENHA:




function gerarSenha(tamanho = 12, usarLetrasMaiusculas = true, usarLetrasMinusculas = true, usarNumeros = true, usarEspeciais = true) {
    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const especiais = '!@#$%^&*()_-+=';
  
    let caracteres = '';
    if (usarLetrasMaiusculas) caracteres += letrasMaiusculas;
    if (usarLetrasMinusculas) caracteres += letrasMinusculas;
    if (usarNumeros) caracteres += numeros;
    if (usarEspeciais) caracteres += especiais;
  
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      senha += caracteres.charAt(indice);
    }
  
    return senha;
  }
  
 


  /////////////// AQUI CHAMA UMA FUNÇÃO QUE GERA AMBOS:

  function gerarCredenciais() {
    const novoNickname = gerarNickname();
    const senhaAleatoria = gerarSenha();

    document.getElementById('login').value = novoNickname;
    document.getElementById('senha').value = senhaAleatoria;
}


function copiar(elemento) {
    elemento.select();
    document.execCommand('copy');
}