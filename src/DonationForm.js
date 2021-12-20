"use strict";

const DonationForm = (function () {
   return {
    setupEventListeners() {
      document.addEventListener('DOMContentLoaded', () => {
        this.addNewPipe();
        this.getOrganWorks();
        this.toggleWishOrganPipe();
      })
    },

    addNewPipe() {
      const addNewPipe = document.querySelector('#add-new-pipe');

      if(null !== addNewPipe) {
        addNewPipe.addEventListener('click', (e) => {
          e.preventDefault();
        });
      }
    },

    getOrganWorks() {
      let req = new XMLHttpRequest();

      req.onload = () => {
        if(200 === req.status) {
          let json;

          if(json === req.responseType) {
            json = req.response;
          } else {
            json = JSON.parse(req.responseText);
          }

          let works = json.works;
        }
      };

      req.open('GET', 'http://localhost:8080/api/v1/works', true);
      req.responseType = 'json';
      req.setRequestHeader('Accept', 'application/json');
      req.send();
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
