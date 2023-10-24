// import { generateBooks } from "./book.js";

// console.log("starting")
// generateBooks().then((books) => {
//     console.log(books);
// })
// console.log("ending");

// fetch('https://fakestoreapi.com/products/1')
//     .then(res => res.json())
//     .then(json => {
//         console.log(json)
//         console.log(json.image)
//         const imageElement=document.createElement("img")
//         imageElement.src=json.image
//         document.getElementById("putStuffHere").appendChild(imageElement)

//     })


fetch('https://fakestoreapi.com/products/')
    .then((response) => {
        return response.json();
    })
    .then((products) => {
        products.forEach(product => {
            const element = document.createElement("option");
            element.textContent = product.title;
            document.getElementById("productName").appendChild(element)
            element.value = product.id
        });
    });

const selectElement = document.getElementById("productName")
selectElement.addEventListener("change", (event) => {
    console.log(event)
    console.log(event.target.value)
    fetch(`https://fakestoreapi.com/products/${event.target.value}`)
    .then(res => res.json())
    .then(json => {
        console.log(json.image)

        const imageElement=document.createElement("img")
        imageElement.src=json.image
        // document.getElementById("putStuffHere").appendChild(imageElement).innerHTML="";
        document.getElementById("putStuffHere").replaceChildren(imageElement)


        // document.getElementById("putStuffHere").appendChild(imageElement)

    })

})