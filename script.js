const body_div = document.getElementsByTagName('body');
const container_div = document.querySelector('#container');
const containerNo_div = document.querySelector('.containerNoHead');
const header_div = document.getElementsByTagName('header');
const leftside_div = document.querySelector('#leftside');
containerNo_div.setAttribute('style', 'display: flex; gap: 300px')
container_div.setAttribute('style', 'display: inline-grid; color: black; background: white; border: solid; grid-template-columns: repeat(16, 1fr);  grid-template-rows: repeat(16, 1fr); width: 500px; height: 500px;');

let isMouseDown = false;
window.onmousedown = () => (isMouseDown = true);
window.onmouseup = () => (isMouseDown = false);

function generateGrid() {
    for (let i = 0; i < 256; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        container_div.appendChild(gridItem);
        gridItem.setAttribute('style','border: 1px solid; border-color: black;')
        //color changed when mouse onclick the squares
        gridItem.addEventListener('mousedown', () => {
            gridItem.setAttribute('style','border: 1px solid; border-color: black; background-color: black;');
        }) ;

        gridItem.addEventListener('mouseover', (e) => {
            if (isMouseDown) {
                gridItem.setAttribute('style','border: 1px solid; border-color: black; background-color: black;');
            }
        });
    }
}      

generateGrid();





// leftside
leftside_div.setAttribute('style','width: 300px; border: solid; border-color: black; margin-left: 200px;')





