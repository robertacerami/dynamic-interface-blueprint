import { ViewController } from './view.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Modular Architect Initialized...");
    
    // Initialize Theme Toggle
    const themeBtn = document.getElementById('themeToggle');
    themeBtn.addEventListener('change', () => {
        document.body.classList.toggle('light-theme');
    });

    // Initialize Reset
    document.getElementById('resetBtn').addEventListener('click', () => {
        if(confirm("Purge current configuration?")) {
            location.reload();
        }
    });

    ViewController.showNotification("System Ready - Select Platform", "success");
});
