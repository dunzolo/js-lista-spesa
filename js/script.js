const arrayList = [
    'Pasta',
    'Pane',
    'Zucchero',
    'Olio',
    'Acqua',
    'Sale',
    'Carne',
    'Insalata',
    'Pomodori'
];

let item = document.querySelector('.unstyled-list');

let i = 0;

while(i < arrayList.length){
    item.innerHTML += `<li>${arrayList[i]}</li>`;
    i++;
}