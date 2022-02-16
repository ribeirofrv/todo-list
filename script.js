const criarTarefa = document.querySelector('#criar-tarefa');
const listaTarefa = document.querySelector('#lista-tarefas');
const textoTarefa = document.querySelector('#texto-tarefa');

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
  const itemDaLista = document.querySelectorAll('.tarefa');

  for (let item = 0; item < itemDaLista.length; item += 1) {
    itemDaLista[item].style.background = 'white';
  }

  event.target.style.background = 'gray';
});
