function changeFontSize(delta) {
    const content = document.getElementById('chapter-content');
    const paragraphs = content.querySelectorAll('p');
    
    paragraphs.forEach(p => {
        const currentSize = parseFloat(window.getComputedStyle(p).fontSize);
        p.style.fontSize = (currentSize + delta) + 'px';
    });
}