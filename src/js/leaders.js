import header from '../components/header/header.html'
import '../components/header/header.js'
import '../scss/leaders.scss';
import { dropDown } from '../components/dropDown/dropDown.js';
$(() => {
    const accrodeon = () =>{ // делаем замыкание
        // выбираем все li
        const chItems = document.querySelectorAll('.characteristics__item');
        
        // forEach для перебора всех li
        chItems.forEach( item =>{
            const chButton = item.querySelector('.characteristics__title');
            const chContent = item.querySelector('.characteristics__description');
    
            // при клике на кнопку контент появляется и закрывается. Плавность получается засчёт высоты блока(scrollHeight)
            chButton.addEventListener('click', ()=>{
                if (chContent.classList.contains('openn')){
                    chContent.style.height = '';
                }else{
                    chContent.style.height = chContent.scrollHeight + 'px';
                }
                chButton.classList.toggle('active');
                chContent.classList.toggle('openn');
            });
        });
    };
    
    $('#root').prepend(header);
    dropDown();
    accrodeon();
});

