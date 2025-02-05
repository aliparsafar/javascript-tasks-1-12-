function changeBackgroundColor() {
    const colors = ['#f0f0f0', '#ffcccb', '#add8e6', '#98fb98', '#ffeb3b', '#ffc107'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
