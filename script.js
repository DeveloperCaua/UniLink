document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('toggleButton');
    const status = document.getElementById('status');
    let isActive = false;

    button.addEventListener('click', function () {
        isActive = !isActive;
        if (isActive) {
            document.body.style.transition = '5s';
            document.body.style.background = 'linear-gradient(to bottom, #00152e, #015475, #424242)';
            document.body.style.backgroundSize = '100vw 100vh';
        } else {
            
            document.body.style.background = 'linear-gradient(to bottom, #4a90e2, #87ceeb, #ffffff)';
            document.body.style.backgroundSize = '100vw 100vh';
        }
    });
});
