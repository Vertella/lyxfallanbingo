
let prompts;

fetch('./lyx.json')
    .then(response => response.json())
    .then(data => {
    prompts = data;

    const randomIndex = Math.floor(Math.random() * prompts.length);
    const randomPrompt = prompts[randomIndex];

    document.addEventListener("DOMContentLoaded", function() {
        bingoPrompts().then(prompt => {
            var elements = document.querySelectorAll('.bingo-text');
            for(var i = 0; i < elements.length; i++){
                var str = elements[i].innerHTML;
                console.log(elements);
                elements[i].innerHTML = str.replace("",randomPrompt);
            }
        });
    });
})
