var pageCounter = 1;
var btn = document.getElementById('btn');
var animalContainer = document.getElementById('animal-info');

btn.addEventListener('click', function(){
    var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
ourRequest.onload = function(){
   var ourData =JSON.parse(ourRequest.responseText);
   console.log(ourData[0]);
   renderHTML(ourData);
}
ourRequest.send();
pageCounter++;
if(pageCounter > 3){
    btn.classList.add("hide-me");
}
});

function renderHTML(data){
    var htmlString = '';

    for(i = 0; i < data.length; i++){
        htmlString += '<p>' + data[i].name + " is a " + data[i].species + ' that like to eat';

        for(j =0; j < data[i].foods.likes.length; j ++){
            htmlString += ' , '+data[i].foods.likes[j];
        }
        htmlString += ' and dislikes ';

        for(j =0; j < data[i].foods.dislikes.length; j ++){
            htmlString += ' , '+data[i].foods.dislikes[j];
        }
        htmlString += '.</p>';
    
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

