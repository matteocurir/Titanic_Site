//  https://matteocurir.github.io/titanic/titanic.json

async function populate(){
    
    const requestURL = "https://matteocurir.github.io/titanic/titanic.json"; 
    const request = new Request(requestURL) 
    const response = await fetch(request); 
    const passeggeri = await response.json(); 

    populatePeople(passeggeri);

}

function populatePeople(obj){
    
    const para = document.querySelector('section');
    para.textContent = obj.Name; 

    const passeggeri = obj.passeggeri;
    
    for (const passeggero of passeggeri) {
    
        const tutti = document.getElementById('tutti'); 

        const name = document.createElement('div');  
        name.textContent = passeggero.Name;

        const age = document.createElement('p');
        age.textContent = `Età: ${passeggero.Age}`;  

        const sex = document.createElement('p');
        sex.textContent = `Sesso: ${passeggero.Sex}`;  

        const classe = document.createElement('p');
        classe.textContent = `Classe: ${passeggero.Pclass}`;  

        const survivor = document.createElement('p');
        survivor.textContent = `Sopravissuto: ${passeggero.Survived}`;  

        const imbarco = document.createElement('p');
        imbarco.textContent = `Imbarco: ${passeggero.Embarked}`;  

        tutti.appendChild(name);
        name.appendChild(age);
        name.appendChild(sex);
        name.appendChild(classe);
        name.appendChild(survivor);
        name.appendChild(imbarco);
    
    }

}  

populate();