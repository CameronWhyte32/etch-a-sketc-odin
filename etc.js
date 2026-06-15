
const gridContainer = document.querySelector(".container");
const box = document.createElement("div");
const resetBtn = document.querySelector(".reset")
function createGrid() {

    for (let i = 0; i < 256; i++) {
        const box = document.createElement("div");
        box.classList.add("box");

        
        gridContainer.addEventListener("mouseover",  (e) => {
            if(e.target.classList.contains("box")) {
                e.target.style.backgroundColor = "black";
            }
        })


    gridContainer.appendChild(box);
    }
    
}


resetBtn.addEventListener("click", resetPage)

function resetPage() {
    const boxes = document.querySelectorAll(".box");
    
    boxes.forEach(box => {
        box.style.backgroundColor = "white";
    })
}




createGrid();