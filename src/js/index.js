import header from '../components/header/header.html'
import '../components/header/header.js'
import '../scss/index.scss';
import { dropDown } from '../components/dropDown/dropDown.js';
$(() => {
    $('#root').prepend(header)
    dropDown()
});

