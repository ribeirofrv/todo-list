const criarTarefa = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const textoTarefa = document.querySelector('#texto-tarefa');
const apagarLista = document.querySelector('#apaga-tudo');

const adicionaListaDeTarefa = () => {
  criarTarefa.addEventListener('click', () => {
    const adicionaTarefa = document.createElement('li');

    if (textoTarefa.value === '') {
      alert('Campo vazio, adicione uma tarefa!');
    } else {
      adicionaTarefa.innerText = textoTarefa.value;
      listaTarefas.appendChild(adicionaTarefa);
      adicionaTarefa.classList.add('tarefa');
      textoTarefa.value = '';
    }
  });
};

const marcaItensDaLista = () => {
  listaTarefas.addEventListener('click', (event) => {
    const itemDaLista = document.querySelectorAll('.tarefa');

    for (let item = 0; item < itemDaLista.length; item += 1) {
      itemDaLista[item].style.background = 'white';
    }

    event.target.style.background = 'gray';
  });

  listaTarefas.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
};

const apagaListaDeTarefas = () => {
  apagarLista.addEventListener('click', () => {
    listaTarefas.innerHTML = '';
  });
};

window.onload = () => {
  adicionaListaDeTarefa();
  marcaItensDaLista();
  apagaListaDeTarefas();
};
