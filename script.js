const criarTarefa = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const textoTarefa = document.querySelector('#texto-tarefa');
const apagarLista = document.querySelector('#apaga-tudo');
const removeFinalizados = document.querySelector('#remover-finalizados');

// Adiciona Texto do input na Lista de Tarefas
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

// Destaca item da lista de tarefas clicado
const marcaItensDaLista = () => {
  listaTarefas.addEventListener('click', (event) => {
    const itemDaLista = document.querySelectorAll('.tarefa');
    const evento = event.target;
    for (let item = 0; item < itemDaLista.length; item += 1) {
      itemDaLista[item].style.background = 'white';
    }

    evento.style.background = 'gray';
  });

  listaTarefas.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
};

// Limpa lista de tarefas removendo todos os itens
const apagaListaDeTarefas = () => {
  apagarLista.addEventListener('click', () => {
    listaTarefas.innerHTML = '';
  });
};

// Remove apenas itens riscados da lista de tarefas
const apagaFinalizados = () => {
  removeFinalizados.addEventListener('click', () => {
    const completed = document.querySelectorAll('.completed');
    for (let key = 0; key < completed.length; key += 1) {
      completed[key].remove();
    }
  });
};

window.onload = () => {
  adicionaListaDeTarefa();
  marcaItensDaLista();
  apagaListaDeTarefas();
  apagaFinalizados();
};
