function customRender(reactElement, container){
    /*this code is not too modular, making a modular code below with loops
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
        if(prop == 'children')continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'www.youtube.com',
        target: '_blank'
    },
    children: 'Click on me to visit Youtube'
}

const mainContainer = document.getElementById('root') 

customRender(reactElement, mainContainer)