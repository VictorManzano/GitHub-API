const url = 'https://api.github.com/users/VictorManzano'

const imagemPerfil = document.querySelector('.imageUser');
const nameUser = document.querySelector('#nameUser');
const repoUser = document.querySelector('#repoUser');
const seguidoresUser = document.querySelector('#seguidoresUser');
const seguindoUser = document.querySelector('#seguindoUser')

function getUser() {
    axios.get(url)

    .then(response => {

        const data = response.data;
        const avatar = data.avatar_url;

        imagemPerfil.style.backgroundImage = `url(${avatar})`;
        nameUser.innerHTML = data.login;
        repoUser.innerHTML = data.public_repos;
        seguidoresUser.innerHTML = data.followers;
        seguindoUser.innerHTML = data.following;
 
    }) 

    .catch(error => console.log(error))
}

getUser()


