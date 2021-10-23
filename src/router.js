const mainContent = document.getElementById('main-content');

window.addEventListener("hashchange", () => {
    if (window.location.hash.includes('graphs')) {
        mainContent.src = 'https://microfrontends-demo-2.netlify.app/';
    } else if (window.location.hash.includes('users')) {
        mainContent.src = 'https://microfrontends-demo-3.netlify.app/';
    } else {
        mainContent.src = 'https://microfrontends-demo-1.netlify.app/';
    }
});
