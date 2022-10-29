import Home from '../lib/Home.class.js';

let tables = {}
let username = document.getElementById('username');
let mainSections = document.getElementsByClassName('func-section');
let navBarList = document.getElementsByClassName('list-item');
let projects = document.getElementsByClassName('box-project');

tables['Cronograma Semanal'] = {
    'id':'cs-table',
    'objectCamp':{
        'Segunda': 0,
        'Terça': 0,
        'Quarta': 0,
        'Quinta': 0,
        'Sexta': 0        
    },
    'data':'tarefa',
    'referenceCamp':'dia',
    'referenceDatabase':'tarefa'
};

tables['Atvidades-Projetos'] = {
    'id':'tp-table',
    'objectCamp': {
        'Fazer': 0,
        'Fazendo': 0,
        'Feito': 0 
    },
    'data':'nomeAtividade',
    'referenceCamp':'estadoAtividade',
    'referenceDatabase':'atividade'
}


let url = '../index.php';

let home = new Home(username,tables,url);

home.chooseSection(mainSections,navBarList);

projects[0].addEventListener('click',event => {
    let projectTable = document.getElementById('Atividades-Projetos');
    projectTable.style.display = 'block';
    projects[0].style.display = 'none';
})

