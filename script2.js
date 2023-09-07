
const aboutMeWrapper = document.querySelector('.wrapper.about-me');
const cvWrapper = document.querySelector('.wrapper.cv');
const portfolioWrapper = document.querySelector('.wrapper.portfolio');
const wwwWrapper = document.querySelector('.wrapper.www');




const iconClose = document.querySelector('.wrapper.about-me .icon-close');
const cvIconClose = document.querySelector('.wrapper.cv .icon-close');
const portfolioClose = document.querySelector('.wrapper.portfolio .icon-close');
const wwwClose = document.querySelector('.wrapper.www .icon-close');


const aboutMe = document.querySelector('.aboutme-link');
const portfolio = document.querySelector('.portfolio-link');
const resume = document.querySelector('.cv-link');
const www = document.querySelector('.www-link');

const btnPopup =document.querySelector('.icon_btn-popup');


aboutMe.addEventListener('click', ()=>{ wrapper.classList.add('active-popup');
})

portfolio.addEventListener('click', ()=>{ portfolioWrapper.classList.add('active-popup');
})

resume.addEventListener('click', ()=>{ cvWrapper.classList.add('active-popup');
})
www.addEventListener('click', ()=>{ wwwWrapper.classList.add('active-popup');
})



iconClose.addEventListener('click', ()=>{ wrapper.classList.remove('active-popup');
})
cvIconClose.addEventListener('click', ()=>{ cvWrapper.classList.remove('active-popup');
})
tfolioClose.addEventListener('click', ()=>{ portfolioWrapper.classList.remove('active-popup');
})
wwwClose.addEventListener('click', ()=>{ wwwWrapper.classList.remove('active-popup');
})





// const wwwWrapper = document.querySelector('.wrapper.www');

// const www = document.querySelector('.www-link');

// www.addEventListener('click', ()=>{ wwwWrapper.classList.add('active-popup');
// })
// wwwClose.addEventListener('click', ()=>{ wwwWrapper.classList.remove('active-popup');
// })

// const wwwClose = document.querySelector('.wrapper.www .icon-close');
