
const activeModal = document.querySelector('.basket')
const addToBasket = () => {
   
   const structure =  createModal({title:'some title'})
   
   const modalContainer = document.createElement('div')
   console.log(modalContainer);
   modalContainer.classList.add('modal-container')
   modalContainer.innerHTML = structure
   document.body.appendChild(modalContainer)
  feather.replace()
}


activeModal.addEventListener('click',addToBasket)
const createModal = ({title}) => {
    return `
  
        <div class="modal">
            <p class="modal-title">
                <i class="circle-icon" data-feather="info"></i>
                ${title}
            </p>
            <p class="modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ad explicabo eos nisi nulla quas
                totam, quod voluptatum vel fugiat!
            </p>
            <div class="modal-buttons">
                <button class="modal-accept">Accept</button>
                <button class="modal-decline">Anuluj</button>
            </div>
            <button class="modal-close-btn">
                <i data-feather="x"></i>
            </button>
        </div>
  
    `
}