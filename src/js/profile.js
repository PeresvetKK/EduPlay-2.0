import header from '../components/header/header.html'
import '../components/header/header.js'
import '../../node_modules/slick-carousel/slick/slick.min.js';
import '../../node_modules/slick-carousel/slick/slick.scss';
import '../../node_modules/slick-carousel/slick/slick-theme.scss';
import '../scss/profile.scss';
$(() => {    
    $('#root').prepend(header);   
    $('.profile-slider__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.profile-slider__thumb',
        vertical: true,
    });
    $('.profile-slider__thumb').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 1,
        asNavFor: '.profile-slider__slider',
        focusOnSelect: true,
        arrows: true,
        prevArrow: `
        <svg class="prev-arrow" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.92074 0.00718523C9.31765 0.0478697 9.68298 0.28329 9.86055 0.612816C10.0469 0.958579 10.0465 1.28845 9.85943 1.63658C9.7589 1.82366 10.1125 1.49464 5.99599 5.23104C4.3378 6.73613 2.98109 7.97306 2.98109 7.97983C2.98109 7.98659 4.4772 9.37107 6.30575 11.0565C8.13432 12.7419 9.65944 14.155 9.69492 14.1967C10.0318 14.5931 10.02 15.2001 9.66806 15.5843C9.4369 15.8366 9.14677 15.9735 8.79323 15.9971C8.57939 16.0114 8.38062 15.9728 8.15951 15.8742C7.99207 15.7994 7.97463 15.7848 7.11647 14.9987C6.05218 14.0238 0.887775 9.2621 0.494816 8.89336C0.270833 8.68319 0.197273 8.60111 0.140641 8.49821C-0.0668757 8.12122 -0.0434573 7.68791 0.202342 7.35585C0.271334 7.26262 1.16444 6.44089 3.52197 4.30154C8.389 -0.11507 8.0326 0.20412 8.16952 0.13919C8.40715 0.0264646 8.66565 -0.0189482 8.92074 0.00718523Z" fill="white"/>
        </svg>
        `,
        nextArrow: `
        <svg class="next-arrow" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.07926 0.00718523C0.682354 0.0478697 0.31702 0.28329 0.139452 0.612816C-0.0468505 0.958579 -0.04649 1.28845 0.140574 1.63658C0.241097 1.82366 -0.112517 1.49464 4.00401 5.23104C5.6622 6.73613 7.01891 7.97306 7.01891 7.97983C7.01891 7.98659 5.5228 9.37107 3.69425 11.0565C1.86568 12.7419 0.340559 14.155 0.305081 14.1967C-0.031786 14.5931 -0.0200468 15.2001 0.331945 15.5843C0.5631 15.8366 0.853231 15.9735 1.20677 15.9971C1.42061 16.0114 1.61938 15.9728 1.84049 15.8742C2.00793 15.7994 2.02537 15.7848 2.88353 14.9987C3.94782 14.0238 9.11223 9.2621 9.50518 8.89336C9.72917 8.68319 9.80273 8.60111 9.85936 8.49821C10.0669 8.12121 10.0435 7.68791 9.79766 7.35585C9.72867 7.26262 8.83556 6.44089 6.47803 4.30154C1.611 -0.11507 1.9674 0.20412 1.83048 0.13919C1.59285 0.0264646 1.33435 -0.0189482 1.07926 0.00718523Z" fill="white"/>
        </svg>
        `,
        // variableWidth: true
    });    
});

