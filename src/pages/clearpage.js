const clearpage = () => {
    const content = document.querySelector('#content');
    content.style = "";
    while(content.children.length > 1){
        content.children[0].remove();
    }
}

export default clearpage;