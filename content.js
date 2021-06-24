chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener((request, sender, sendRsponse) => {
    if(request.todo == "changeColor") {
        let addColor = request.clickedColor;
        let title = document.getElementsByTagName('P');
        title.style.fontStyle = 'italic';
        title.style.color = addColor;
    }  
});