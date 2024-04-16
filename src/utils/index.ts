const toggleDarkMode: () => void = () => { 
    const body = document.body;
    body.classList.toggle("dark");
    }


export { toggleDarkMode };
