const texto = document.querySelector("p")?.innerText || "Nenhum texto encontrado";
chrome.runtime.sendMessage({ texto });