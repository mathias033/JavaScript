function generateResult() {

    const minValue = Math.ceil(document.querySelector('.min').value)
    const maxValue = Math.floor(document.querySelector('.max').value)

    if (minValue >= maxValue) {

        alert('O valor mínimo deve ser MENOR que o valor máximo')
    }
    else {

        const result = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);

        alert(result)
    }

}
