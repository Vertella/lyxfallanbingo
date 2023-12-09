// target the bingo card with js
// make for loop to target every single child node
// retrieve nr of child in bingo card for nr of loops
// target specific coins 
// if i == 12 ignore
async function bingoPrompts() {
    const response = await fetch('./lyx.json');
    const prompts = await response.json();
    const prompt = prompts[Math.floor(Math.random() * prompts.length)]
    return prompt;
}

document.addEventListener("DOMContentLoaded", function() {
    bingoPrompts().then(prompt => {
        var elements = document.querySelectorAll('.bingo-text');
        for(var i = 0; i < elements.length; i++){
            var str = elements[i].innerHTML;
            elements[i].innerHTML = str.replace("",prompt)
        }
    })
})

