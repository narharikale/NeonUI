document.querySelector('.slider').addEventListener('change' ,rangeSlide);
document.querySelector('.slider').addEventListener('mousemove' ,rangeSlide)


function rangeSlide(event) {
    document.getElementById('rangeValue').innerText = this.value;
}


document.querySelector('.view-demo').addEventListener('click' ,()=> {
    console.log('workin')
    document.querySelector('.view-demo').style.display = "none"
});