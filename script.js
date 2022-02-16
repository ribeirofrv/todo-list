const criarTarefa = document.querySelector('#criar-tarefa');
const listaTarefa = document.querySelector('#lista-tarefas');
const textoTarefa = document.querySelector('#texto-tarefa');
// const tarefa = textoTarefa.innerText().value();

criarTarefa.addEventListener('click', () => {
  const itemDaLista = document.createElement('li');

  if (textoTarefa.value === '') {
    alert('Campo vazio, adicione uma tarefa!');
  } else {
    itemDaLista.innerText = textoTarefa.value;
    listaTarefa.appendChild(itemDaLista);
    textoTarefa.value = '';
  }
});
