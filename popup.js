const fontColor = document.getElementById("fontColor");


fontColor.addEventListener('input', (e) => {
    color = e.target.value;

    const btnChange = document.getElementById('btnChange');

    btnChange.addEventListener('click', () => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {todo: "changeColor", clickedColor: color});
        });
    });
    
});