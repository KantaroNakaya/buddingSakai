document.addEventListener('DOMContentLoaded', () => {
    const projectName = document.querySelector('.project-name');
    const text = projectName.textContent;
    projectName.textContent = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        span.style.transition = 'opacity 0.1s, transform 0.5s';
        span.style.transform = 'translateY(20px)';
        projectName.appendChild(span);

        setTimeout(() => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
        }, 1500 + 100 * index);
    });

    setTimeout(() => {
        const svElement = document.querySelector('.sv');
        window.scrollTo({
            top: svElement.offsetTop,
            behavior: 'auto'
        });
    }, 4500);
    setTimeout(() => {
        const mvElement = document.querySelector('.mv');
        mvElement.style.display = 'none';
    }, 5000);
});