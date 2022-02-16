const criarTarefa = document.querySelector('#criar-tarefa');
const listaTarefa = document.querySelector('#lista-tarefas');
const textoTarefa = document.querySelector('#texto-tarefa');
const itemDaLista = document.querySelectorAll('.tarefa');

criarTarefa.addEventListener('click', () => {
  const adicionaTarefa = document.createElement('li');

  if (textoTarefa.value === '') {
    alert('Campo vazio, adicione uma tarefa!');
  } else {
    adicionaTarefa.innerText = textoTarefa.value;
    listaTarefa.appendChild(adicionaTarefa);
    adicionaTarefa.classList.add('tarefa');
    textoTarefa.value = '';
  }
});

listaTarefa.addEventListener('click', (event) => {
  event.target.style.background = 'gray';
});
