
  export const viewComponent = (data, fn, element)=>{
    data.map(item=>{
        element.insertAdjacentHTML('afterbegin',fn(item))
    })
}

 export const checkContentLength = (text, length)=>{
    const data = text.length > length ?
                text.slice(0, length)+'...' :
                text;
    return data
  }

  export const  createElement = (tagName, attributes = {}, textContent = "") => {
    const element = document.createElement(tagName); // Create element
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
   
    if (textContent) {
        element.textContent = textContent;
    }

    return element;
}