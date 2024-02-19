document.addEventListener('DOMContentLoaded', function() {
    const titulo = document.getElementById('titulo');
    const descripcion = document.getElementById('descripcion');

    const clickButton = document.getElementById('clickButton');
    clickButton.addEventListener('click', function() {
        document.body.style.backgroundColor = getRandomColor();
    });

    const focusButton = document.getElementById('focusButton');
    focusButton.addEventListener('click', function() {
        titulo.style.color = getRandomColor();
    });

    focusButton.addEventListener('focus', function() {
        titulo.style.color = 'green';
    });
    focusButton.addEventListener('blur', function() {
        titulo.style.color = 'white';
    });

    const mouseButton = document.getElementById('mouseButton');
    mouseButton.addEventListener('mouseover', function() {
        descripcion.style.color = 'blue';
    });
    mouseButton.addEventListener('mouseout', function() {
        descripcion.style.color = 'black';
    });

    titulo.style.color = 'white'; // Establecer el color del título como blanco por defecto

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
