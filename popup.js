chrome.runtime.onMessage.addListener((request) => {
    document.getElementById("resultado").innerText = request.texto;
});