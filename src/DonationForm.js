const DonationForm = (function () {
  function createRecipientNode() {
    const recipientInput = document.querySelector('#recipients')
    if (null === recipientInput) {
      console.error('Id recipient__input not found')
    }

    let divRow = document.createElement('div')
    divRow.className = 'row mb-2'

    let divSub = document.createElement('div');
    divSub.className = 'col-sm-6 col-lg-2'

    let input = document.createElement('input')
    input.type = 'text'
    input.name = 'name-recipients[]'
    input.className = 'form-control mb-2'

    let div = document.createElement('div')
    div.className = 'col-sm-6 col-lg-10'

    div.append(input)

    divRow.append(div)

    recipientInput.append(divRow)
  }
  
  return {
    recipients: [],

    setupEventListeners() {
      document.addEventListener('DOMContentLoaded', () => {
        this.addNewPipe()
        this.addNewRecipientNameInput()
        //this.getOrganWorks();
        this.toggleWishOrganPipe()
        this.toggleNamesOfTheRecipients()
      })
    },

    addNewPipe() {
      const addNewPipe = document.querySelector('#add-new-pipe')

      if(null !== addNewPipe) {
        addNewPipe.addEventListener('click', (e) => {
          e.preventDefault()
        });
      }
    },

    getOrganWorks() {
      let req = new XMLHttpRequest();

      req.onload = () => {
        if(200 === req.status) {
          let json

          if(json === req.responseType) {
            json = req.response
          } else {
            json = JSON.parse(req.responseText)
          }

          let works = json.works
        }
      };

      req.open('GET', 'http://localhost:8080/api/v1/works', true)
      req.responseType = 'json'
      req.setRequestHeader('Accept', 'application/json')
      req.send()
    },

    toggleNamesOfTheRecipients() {
      const btnNewRecipientInput = document.querySelector('#new__recipient__input')
      if (null === btnNewRecipientInput) {
        console.error('Id new__recipient__input not found.')
      }

      const pipeAsGift = document.querySelector('#pipe__as__gift')
      if (null !== pipeAsGift) {
        pipeAsGift.addEventListener('click', () => {
          const nameRecipient = document.querySelector('#name__recipient')
          if (null !== nameRecipient) {
            nameRecipient.toggleAttribute('disabled')
            btnNewRecipientInput.toggleAttribute('disabled')
          } else {
            console.error('Id name__recipient not found.')
          }
        });
      } else {
        console.error('Id pipe__as__gift not found.')
      }
    },

    addNewRecipientNameInput() {
      const btnNewRecipientInput = document.querySelector('#new__recipient__input')
      if (null !== btnNewRecipientInput) {
        
        btnNewRecipientInput.addEventListener('click', () => {
          let nameOfRecipient = document.querySelector('#name__recipient')
          this.recipients.push(nameOfRecipient.value)

          let inputs = document.querySelector('#recipients')
          
          
          
          for(let i = 0; i <= this.recipients.length - 1; i++) {
            createRecipientNode();
            console.log(this.recipients.length);
          }
          
        });
        
      } else {
        console.error('Id new__recipient__input not found.');
      }
    },

    toggleWishOrganPipe() {
      const wishOrganPipe = document.querySelector('#wishorganpipe');
      const work = document.getElementById('work');
    
      if(null!=wishOrganPipe && null!=work) {
        wishOrganPipe.addEventListener('click', () => {
          work.toggleAttribute('disabled');
        })
      }
    },

    init() {
      this.setupEventListeners();

      console.log("hello world!");
    },
  };
})();

export default DonationForm;
