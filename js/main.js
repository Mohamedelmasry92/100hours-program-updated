var itemInputName = document.getElementById('productName');
var itemInputCategory = document.getElementById('productCategory');
var itemInputPrice = document.getElementById('productPrice');
var itemInputDesc = document.getElementById('productDescribtion');


var itemArr = []
if (localStorage.getItem('itemArr') != null) {
    itemArr = JSON.parse(localStorage.getItem('itemArr'));
    showItem()
}

function addItem(){
    var itemObject ={
        name: itemInputName.value,
        category: itemInputCategory.value,
        price: itemInputPrice.value,
        desc: itemInputDesc.value,
    }
    itemArr.push(itemObject)
    localStorage.setItem('itemArr', JSON.stringify(itemArr))
    clearItem()
    showItem()
}

function showItem(){
    var cartoona = ``
    for(var i = 0 ; i < itemArr.length ; i++){
        cartoona += `
        <tr>
        <td>${i}</td>
        <td>${itemArr[i].name}</td>
        <td>${itemArr[i].category}</td>
        <td>${itemArr[i].price}</td>
        <td>${itemArr[i].desc}</td>
        <td><button onclick="deleteItem(${i})" class="btn btn-danger btn-sm">Delete</button></td>
        <td><button onclick="setItemToEdit(${i})" class="btn btn-success btn-sm">Edit</button></td>
    </tr>
        `
    }
    document.getElementById('tableBody').innerHTML = cartoona
}

function clearItem(){
    itemInputName.value =""
    itemInputCategory.value =""
    itemInputPrice.value =""
    itemInputDesc.value =""
}

function deleteItem(index){
    itemArr.splice(index, 1)
    localStorage.setItem('itemArr', JSON.stringify(itemArr))
    showItem()
}

function searchItem(index){
    var box2 = ``
    for (var i =0 ; i < itemArr.length ; i++){
        if(itemArr[i].name.toLowerCase().includes(index.toLowerCase()) == true ){
            box2 += `
            <tr>
            <td>${i}</td>
            <td>${itemArr[i].name}</td>
            <td>${itemArr[i].category}</td>
            <td>${itemArr[i].price}</td>
            <td>${itemArr[i].desc}</td>
            <td><button onclick="deleteItem(${i})" class="btn btn-danger btn-sm">Delete</button></td>
            <td><button class="btn btn-success btn-sm">Edit</button></td>
            </tr>
            `
        }
    }
    document.getElementById('tableBody').innerHTML = box2
}


indexItem = 0
function setItemToEdit(index){
    indexItem = index 
    itemInputName.value = itemArr[index].name
    itemInputCategory.value = itemArr[index].category
    itemInputPrice.value = itemArr[index].price
    itemInputDesc.value = itemArr[index].desc
    addBtn.classList.replace('d-block' , 'd-none')
    updateBtn.classList.replace('d-none' , 'd-block')
}

function editItem(){
    var itemObject ={
        name: itemInputName.value,
        category: itemInputCategory.value,
        price: itemInputPrice.value,
        desc: itemInputDesc.value,
    }
    itemArr[indexItem] = itemObject
    localStorage.setItem('itemArr', JSON.stringify(itemArr))
    clearItem()
    showItem()
    updateBtn.classList.replace('d-block' , 'd-none')
    addBtn.classList.replace('d-none' , 'd-block')
}



