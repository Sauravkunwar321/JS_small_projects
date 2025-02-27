const data = [
    {
        id: '1',
        question: "What are accordian components?",
        answer: "Accordian components are user interface elements used for organizing and presenting content in a collapsible manner. This typically consist of a header, content and an expand?collapse action. "
    },
    {
        id: '2',
        question: "What are they used for?",
        answer: "They are commonly used in various context, including FAQ's, product description, navigation menus, setting panels and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options."
    },
    {
        id: '3',
        question: "Accordian as a musical instrument",
        answer: "The accordian is a musical instrument with a keyboard and bellows. It produces sound by air passing over reels when the player expands or compressed the bellows, used in various genre music."
    },
    
];

const accordionWrapper = document.querySelector('.accordion');

function createAccordionData(){
    accordionWrapper.innerHTML = data.map(dataItem => `
        <div class="accordion_item">
        <div class="accordion_title">
        <h3>${dataItem.question}</h3>
        <i class="fa-solid fa-arrow-down"></i>
        </div>
        <div class="accordion_content">
        <p>${dataItem.answer}</p>
        </div>
        
        </div>
        
        ` ).join("")
}



createAccordionData();

const getAccordionTitles = document.querySelectorAll('.accordion_title');
console.log(getAccordionTitles);

getAccordionTitles.forEach(currentItem => currentItem.addEventListener('click', (e)=>{
    if(currentItem.classList.contains('active')){
        currentItem.classList.remove('active')
    } else{
        let getAlreadyAddedActiveClasses = document.querySelectorAll('.active');

        getAlreadyAddedActiveClasses.forEach(currentActiveItem => {
            currentActiveItem.classList.remove('active')
        })

        currentItem.classList.add('active');
    }
}))
