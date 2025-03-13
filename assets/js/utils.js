  export const productsList = [
    {
        id: 1,
        title:'Cappuccino',
        description:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting ',
        img:'item-cup.png',
        value:'0.25l',
        price:'2.05'
    },
    {
        id: 2,
        title:'Americano',
        description:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting ',
        img:'item-cup.png',
        value:'0.25l',
        price:'1.25'
    },
    {
        id: 3,
        title:'Espresso',
        description:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting ',
        img:'item-cup.png',
        value:'0.25l',
        price:'1.40'
    },
    {
        id: 4,
        title:'Latte',
        description:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software likeAldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting ',
        img:'item-cup.png',
        value:'0.25l',
        price:'1.09'
    },
   
  ]


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