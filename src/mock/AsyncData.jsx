const productos =[
    {
        id:'01',
        name:'Random 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates molestiae maxime vero earum reprehenderit impedit temporibus deserunt labore ut! Ipsam dolor consectetur rerum necessitatibus odit! Consectetur maxime quos nobis officiis!',
        stock:20,
        price:25000,
        category:'nuevos',
        img:'https://picsum.photos/200'
    },
     {
        id:'02',
        name:'Random 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates molestiae maxime vero earum reprehenderit impedit temporibus deserunt labore ut! Ipsam dolor consectetur rerum necessitatibus odit! Consectetur maxime quos nobis officiis!',
        stock:10,
        price:45000,
        category:'mas vendidos',
        img:'https://i.postimg.cc/GpM0ZjVB/darth-vader.png'
    },
      {
        id:'03',
        name:'Random 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates molestiae maxime vero earum reprehenderit impedit temporibus deserunt labore ut! Ipsam dolor consectetur rerum necessitatibus odit! Consectetur maxime quos nobis officiis!',
        stock:30,
        price:55000,
        category:'ofertas',
        img:'https://i.postimg.cc/vB1KCwWM/D-NQ-NP-2X-790947-MLU74201862127-012024-F.webp'
    },
    {
        id:'04',
        name:'Random 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates molestiae maxime vero earum reprehenderit impedit temporibus deserunt labore ut! Ipsam dolor consectetur rerum necessitatibus odit! Consectetur maxime quos nobis officiis!',
        stock:5,
        price:25000,
        category:'ofertas',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjEgjGu7SUxB4Ggx9sAYNoW5X4xQnO1E-WOA&'
    }
]


export const getProducts = ()=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        },3000)
    })
}

export const getOneProduct = (id)=>{
    return new Promise ((resolve)=>{
        let prd= productos.find((item)=> item.id === id)
        setTimeout(()=>{
            resolve(prd)
        },3000)
    })
}
