const container = document.querySelector('.container');
const noOfGrids = prompt("Select no of grids");

for(let i=0; i<noOfGrids; i++) {
    for(let j=0; j<noOfGrids; j++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('child-div');
        let size = 100 / noOfGrids;
        div.style.width = size + "%";

    }
}

const divs = document.querySelectorAll('.child-div');
divs.forEach(div => {
    div.addEventListener("mouseenter", () => {
    div.classList.add("active");
})
})