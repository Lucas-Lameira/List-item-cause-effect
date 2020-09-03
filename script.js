const olElement = document.querySelector('ol');
const asideElement = document.getElementById('info-container');

let li;
let pElement;

const peopleList = [
    {
        id: 1,
        name: 'Draven',
        street: 'Rua do melhor ad c',
        city: 'Belém',
        state: 'Pará',
        country: 'Brasil',
        telephone: '3227-10010',
        birthday: '21/03/1050',
    },
    {
        id: 2,
        name: 'Lucian',
        street: 'Avenida da luz perfurante',
        city: 'São Paulo',
        state: 'São Paulo',
        country: 'Brasil',
        telephone: '456789154',
        birthday: '',
    },
    {
        id: 3,
        name: 'Ezreal',
        street: 'Passagem quezinho de longe',
        city: 'Manhattan',
        state: 'New York',
        country: 'USA',
        telephone: '9878787885',
        birthday: '12/25/2120',
    },
    {
        id: 4,
        name: 'Katarina',
        street: 'Rua mid feeda',
        city: 'cidade do rio',
        state: 'Rio de Janeiro',
        country: 'Brasil',
        telephone: '5794315467',
        birthday: '12/78/9553',
    },
    {
        id: 5,
        name: 'Zed',
        street: 'Avenida ninja mid',
        city: 'Ninjas City',
        state: 'Ninja State',
        country: 'Konoha',
        telephone: 'Ninja nao usa telefone',
        birthday: '??/??/???9',
    },
    {
        id: 6,
        name: 'Irelia',
        street: 'Rua best mid ever',
        city: 'Ionia',
        state: 'Precisa',
        country: 'DeNós',
        telephone: '6548254791',
        birthday: '01/12/1992',
    },
    {
        id: 7,
        name: 'Yasuo',
        street: 'Rua do sorieigueidon XD',
        city: 'Wind',
        state: 'Barrier',
        country: 'A dead one',
        telephone: '9876548521',
        birthday: '15/07/1982',
    },
    {
        id: 8,
        name: 'Kassadin',
        street: 'Rua do vazio',
        city: 'Vazio',
        state: 'Killing spree',
        country: 'Samuels drift',
        telephone: '4567891254',
        birthday: '01/21/1800',
    },
    {
        id: 9,
        name: 'kha zix',
        street: 'Rua da barata na jungle',
        city: 'jungle',
        state: 'Invisible state',
        country: 'Nomade',
        telephone: '4713246951',
        birthday: '24/02/2015',
    },
    {
        id: 10,
        name: 'Syndra',
        street: 'Rua maga robada',
        city: 'Mid west',
        state: 'Mid east',
        country: 'Mid',
        telephone: '3791645821',
        birthday: '05/05/1905',
    },
]

let stop = peopleList.length

for(let i=0; i<stop; i++){
    li = document.createElement('li');
    li.setAttribute("name", peopleList[i].name)
    li.setAttribute("class", "listNames")
    li.appendChild(document.createTextNode(peopleList[i].name))
    olElement.appendChild(li)   
    li.addEventListener('click', () => showUserData(peopleList[i]))   
}


for(i =0; i<7; i++){
    pElement = document.createElement('p');
    pElement.setAttribute('class', 'user-info');
    asideElement.appendChild(pElement);
}
pElement = document.querySelectorAll('p.user-info');

function showUserData ({name, street, birthday, city, country, state, telephone}){
    pElement[0].innerHTML = name
    pElement[1].innerHTML = street
    pElement[2].innerHTML = birthday
    pElement[3].innerHTML = city
    pElement[4].innerHTML = country
    pElement[5].innerHTML = state
    pElement[6].innerHTML = telephone
}



//CRAZY TEST, IT WORKS !!!!!!!!!!!!!!!!
//But you have to create the html and get them with js
/* 
    <p class="user-info" id="name"></p>
    <p class="user-info" id="birthday"></p>
    <p class="user-info" id="street"></p>        
    <div id="Location">
        <p class="user-info" id="city"></p>
        <p class="user-info" id="state"></p>
    </div>
    <p class="user-info" id="country"></p>
    <p class="user-info" id="telephone"></p>

    const nameElement = document.getElementById('name')
    const birthdayElement = document.getElementById('birthday')
    const streetElement = document.getElementById('street')
    const cityElement = document.getElementById('city')
    const stateElement = document.getElementById('state')
    const countryElement = document.getElementById('country')
    const telephoneElement = document.getElementById('telephone')

function showUserData(data){
    nameElement.innerHTML = data.name;
    birthdayElement.innerHTML = data.birthday;
    streetElement.innerHTML = data.street;
    cityElement.innerHTML = data.city;
    stateElement.innerHTML = data.state
    countryElement.innerHTML = data.country;
    telephoneElement.innerHTML = data.telephone;
}   
 */