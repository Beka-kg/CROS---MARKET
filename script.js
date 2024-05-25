const brendeInput  = document.getElementsByTagName('input')[0]
const sizeInput  = document.getElementsByTagName('input')[1]
const imageInput  = document.getElementsByTagName('input')[2]
const priceInput  = document.getElementsByTagName('input')[3]
const crossButton = document.getElementById('buttonn')
const ul = document.getElementById('continer')
const modal = document.getElementById('modal')
const yesButton = document.getElementById('modal-button')
const noButton = document.getElementById('modal-buttonn2')

const getBooks = localStorage.getItem('data')
const booksParsed = JSON.parse(getBooks)
console.log(booksParsed);

let crosse =  booksParsed || []

const crossMarcet = (event) => {
    event.preventDefault()

        
    if (brendeInput.value.trim() === '') {
        alert('Заполните страницу !')
        return
    }else if (sizeInput.value.trim() === ''){
        alert('Заполните страницу !')
        return
    }else if (imageInput.value.trim() === ''){
        alert('Заполните страницу !')
        return
    }else if (priceInput.value.trim() === ''){
        alert('Заполните страницу !')
        return
    }

    const cross2 = {
        id: Math.random(),
        brend: brendeInput.value,
        size: sizeInput.value,
        image: imageInput.value,
        price: priceInput.value,
    }

    crosse.push(cross2)
    localStorage.setItem('data', JSON.stringify(crosse))

    brendeInput.value = ''
    sizeInput.value = ''
    imageInput.value = ''
    priceInput.value = ''

    renderinCrooss()
}
crossButton.addEventListener('click', crossMarcet)




const renderinCrooss = () => {
    ul.innerHTML = ''
    crosse.map((obuf) =>{

        const brend = document.createElement('h1')
        const size = document.createElement('h2')
        const img = document.createElement('img')
        const price = document.createElement('h3')
        const div = document.createElement('div')
        const deleteButton = document.createElement('button')
    
        brend.innerHTML = obuf.brend
        size.innerHTML = obuf.size
        img.src = obuf.image
        price.innerHTML = `${obuf.price} KGS`
        deleteButton.innerHTML = 'Удалить'
    
        div.append(brend)
        div.append(size)
        div.append(img)
        div.append(price)
        div.append(deleteButton)

    
        ul.append(div)
        deleteButton.addEventListener('click', ()=>showModal(obuf.id))
    })
}
renderinCrooss()

let deleteElementID = null

const showModal = function(id){
    deleteElementID = id
    modal.className = 'show-modal'
}

noButton.addEventListener('click', function(){
    modal.className = 'hide-modal'
})

yesButton.addEventListener('click', function(){
    modal.className = 'hide-modal'
    crosse = crosse.filter((el) => el.id != deleteElementID)
    localStorage.setItem('data' , JSON.stringify(crosse))
    renderinCrooss()
    console.log(crosse);
})