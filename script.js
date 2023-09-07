
const aboutMeWrapper = document.querySelector('.wrapper.about-me');
const cvWrapper = document.querySelector('.wrapper.cv');
const portfolioWrapper = document.querySelector('.wrapper.portfolio');
const wwwWrapper = document.querySelector('.wrapper.www');
const contactMeWrapper = document.querySelector('.wrapper.contact-me');

const aboutMeClose = document.querySelector('.wrapper.about-me .icon-close');
const cvIconClose = document.querySelector('.wrapper.cv .icon-close');
const portfolioClose = document.querySelector('.wrapper.portfolio .icon-close');
const wwwClose = document.querySelector('.wrapper.www .icon-close');
const contactClose = document.querySelector('.wrapper.contact-me .icon-close');


const aboutMe = document.querySelector('.aboutme-link');
const portfolio = document.querySelector('.portfolio-link');
const resume = document.querySelector('.cv-link');
const www = document.querySelector('.www-link');
const contact = document.querySelector('.contactme-link');
const btnPopup =document.querySelector('.icon_btn-popup');




aboutMe.addEventListener('click', ()=>{ aboutMeWrapper.classList.add('active-popup');
})

portfolio.addEventListener('click', ()=>{ portfolioWrapper.classList.add('active-popup');
})
resume.addEventListener('click', ()=>{ cvWrapper.classList.add('active-popup');
})
www.addEventListener('click', ()=>{ wwwWrapper.classList.add('active-popup');
})
contact.addEventListener('click', ()=>{ contactMeWrapper.classList.add('active-popup');
})


aboutMeClose.addEventListener('click', ()=>{ aboutMeWrapper.classList.remove('active-popup');
})
cvIconClose.addEventListener('click', ()=>{ cvWrapper.classList.remove('active-popup');
})
portfolioClose.addEventListener('click', ()=>{ portfolioWrapper.classList.remove('active-popup');
})
wwwClose.addEventListener('click', ()=>{ wwwWrapper.classList.remove('active-popup');
})
contactClose.addEventListener('click', ()=>{ contactMeWrapper.classList.remove('active-popup');


})
function search(query){
    if(query.slice(0, 7) == "http://"){
        window.open (query, "_blank")
    }
    else{
        window.open("https://www.google.com/search?q=" + query, "_blank");
    }
}


// Step 2: change selector to look for wrapper AND about-me
// const wrapper = document.querySelector('.wrapper');



// Step 3: add variables for the other wrapper sections


// Step 4: use .wrapper.about-me .icon-close to target icon-clone in about-me section
// const iconClose = document.querySelector('.icon-close');


// Step 5: add variables for other close boxes


// Step 6: modify to use correct wrappers and active-popup class

// aboutMe.addEventListener('click', ()=>{ wrapper.classList.add('active');
// })



// Step 7: add code for other close icons


