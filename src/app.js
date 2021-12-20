import 'bootstrap';
import 'jquery';
import SimpleLightBox from 'simplelightbox';
import DonationForm from './DonationForm';


import './scss/custom.scss';
import '../node_modules/simplelightbox/src/simple-lightbox.scss';

let gallery = new SimpleLightBox('.gallery a');
gallery.on('show.simplelightbox', function() {
    
});

DonationForm.init();