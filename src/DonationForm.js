"use strict";

const DonationForm = (function () {
  return {
    setupEventListeners() {
      document.addEventListener('DOMContentLoaded', () => {
        this.getOrganWorks();
      })
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

    init() {
      this.setupEventListeners();

      console.log("hello world!");
    },
  };
})();

export default DonationForm;
