const list = document.querySelector('.list'),
    items = document.querySelectorAll('.list__item')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        console.log(targetId)

        switch(targetId) {
            case 'all' :
                break
            case 'blue' :
                items.forEach(item => {
                    if(item.classList.contains('blue')){
                        item.style.display = 'block'
                    } else{
                        item.style.display = 'none'
                    }
                })
                break
            

        }
    })
}
filter()