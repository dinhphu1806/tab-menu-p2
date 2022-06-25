const items = document.getElementsByClassName('item')
const tabContents = document.querySelectorAll('.tab-content')   /* 1*/

const removeActiveItem = () =>{                                    /*3*/
    let tabItems = document.getElementsByClassName("item")
    let array = Array.from(tabItems)
    array.forEach((e) => {
        if(e.classList.contains('active')) {
            e.classList.remove('active')
        }
    })
}

const removeActiveTabContent = () => {             /*4*/
    Array.from(tabContents).map((e) => {
        if(e.classList.contains('active-tab-content')){
            e.classList.remove('active-tab-content')
        }
    })
}

const handleClick = (event) =>{                                 /*3 */
    removeActiveItem()
    event.target.classList.add('active')
    let detaId = event.target.dataset.id
    removeActiveTabContent()
    Array.from(tabContents).map((e) =>{
        if(e.dataset.id == detaId){
            e.classList.add('active-tab-content')
        }
    })
}

Array.from(items).forEach((item) =>{                                /*2*/
    item.addEventListener('click',handleClick)  
})