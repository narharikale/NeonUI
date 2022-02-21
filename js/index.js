document.querySelector('.slider').addEventListener('change' ,rangeSlide);
document.querySelector('.slider').addEventListener('mousemove' ,rangeSlide)


function rangeSlide(event) {
    console.log(event.target)
    document.getElementById('rangeValue').innerText = this.value;
}