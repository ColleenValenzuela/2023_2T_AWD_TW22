document.addEventListener('DOMContentLoaded', function () {
    const themeButton = document.getElementById('themeButton');
    const resetButton = document.getElementById('resetButton');
    const header = document.querySelector('header'); // Selecting the header element
    const buttons = document.querySelectorAll('button'); // Selecting all buttons

    themeButton.addEventListener('click', function () {
        changeTheme();
    });

    resetButton.addEventListener('click', function () {
        resetTheme();
    });

    function changeTheme() {
        const newColor = getRandomColor();
        const fontColor = getContrastColor(newColor);

        document.body.style.backgroundColor = newColor;
        document.body.style.color = newColor; // Font color matches the background color
        header.style.backgroundColor = newColor; // Change header background color
        header.style.border = `2px solid ${fontColor}`; // Set border to 2px solid with font color
        header.style.color = fontColor; // Font color matches the contrasting color of the background

        // Change the color of all buttons
        buttons.forEach(button => {
            button.style.backgroundColor = newColor;
            button.style.color = fontColor;
            button.style.border = `2px solid ${fontColor}`;
        });
    }

    function resetTheme() {
        document.body.style.backgroundColor = '#fde5e5';
        document.body.style.color = '#7f5b5b';
        header.style.backgroundColor = '#ff9d9d'; // Reset header background color
        header.style.border = '2px solid #ff9d9d'; // Reset border color to header background color
        header.style.color = '#fff'; // Reset header text color

        // Reset the color of all buttons
        buttons.forEach(button => {
            button.style.backgroundColor = '#ffb6b6'; // Light pastel pink button background color
            button.style.color = '#fff';
            button.style.border = '2px solid #ffb6b6'; // Reset border color to button background color
        });
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getContrastColor(hexColor) {
        // Determine whether to use black or white text based on the luminance of the background color
        const threshold = 130; // Adjust as needed
        const r = parseInt(hexColor.slice(1, 3), 16);
        const g = parseInt(hexColor.slice(3, 5), 16);
        const b = parseInt(hexColor.slice(5, 7), 16);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance > 0.5 ? '#000' : '#fff';
    }
});
