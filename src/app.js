import 'bootstrap';
import SimpleLightBox from 'simplelightbox';

import './scss/custom.scss';

let gallery = new SimpleLightBox('.gallery a');
gallery.on('show.simplelightbox', function() {
    
});

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});