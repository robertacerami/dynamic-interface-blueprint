/**
 * View Controller - Handles all DOM updates and visual state changes.
 */

export const ViewController = {
    updateMetricDisplay(power, weight) {
        document.getElementById('power-val').textContent = `${power}W`;
        document.getElementById('weight-val').textContent = `${weight}kg`;
    },

    renderPlatform(platform, geometry) {
        const canvas = document.getElementById('system-canvas');
        canvas.style.aspectRatio = geometry.aspectRatio;
        
        // Logic to position slots based on geometry data
        console.log(`Rendering ${platform.name} with ${geometry.type} layout`);
    },

    showNotification(message, type = 'info') {
        const panel = document.getElementById('validation-msg');
        panel.textContent = message.toUpperCase();
        panel.className = `status-${type}`;
    }
};
