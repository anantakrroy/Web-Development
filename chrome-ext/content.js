console.log("The chrome extension is ready!");

let paragraphs = document.getElementsByTagName('p');

for(ele of paragraphs) {
    ele.style['background-color'] = '#a3b1dd';
}