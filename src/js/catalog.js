import header from '../components/header/header.html'
import footer from '../components/footer/footer.html'

import '../components/header/header.js'
import '../scss/catalog.scss';
import { dropDown } from '../components/dropDown/dropDown.js';
$(() => {
    $('#root').prepend(header)
    $('#root').append(footer)
    dropDown()
});

