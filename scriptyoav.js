// start Yoav

// Step 2: change selector to look for wrapper AND about-me
// const wrapper = document.querySelector('.wrapper');
const wrapper = document.querySelector('.wrapper.about-me');

// Step 3: add variables for the other wrapper sections
const cvWrapper = document.querySelector('.wrapper.cv');
const portfolioWrapper = document.querySelector('.wrapper.portfolio');

// Step 4: use .wrapper.about-me .icon-close to target icon-clone in about-me section
// const iconClose = document.querySelector('.icon-close');
const iconClose = document.querySelector('.wrapper.about-me .icon-close');

// Step 5: add variables for other close boxes
const cvIconClose = document.querySelector('.wrapper.cv .icon-close');
const portfolioClose = document.querySelector('.wrapper.portfolio .icon-close');


const aboutMe = document.querySelector('.aboutme-link');
const portfolio = document.querySelector('.portfolio-link');
const resume = document.querySelector('.cv-link');
const btnPopup =document.querySelector('.icon_btn-popup');

// Step 6: modify to use correct wrappers and active-popup class

// aboutMe.addEventListener('click', ()=>{ wrapper.classList.add('active');
// })
aboutMe.addEventListener('click', ()=>{ wrapper.classList.add('active-popup');
})


// portfolio.addEventListener('click', ()=>{ wrapper.classList.add('active');
// })
portfolio.addEventListener('click', ()=>{ portfolioWrapper.classList.add('active-popup');
})

// resume.addEventListener('click', ()=>{ wrapper.classList.add('active');
// })
resume.addEventListener('click', ()=>{ cvWrapper.classList.add('active-popup');
})


// Step 8: removed this since not needed
// btnPopup.addEventListener('click', ()=>{ wrapper.classList.add('active-popup');
// })


iconClose.addEventListener('click', ()=>{ wrapper.classList.remove('active-popup');
})

// Step 7: add code for other close icons
cvIconClose.addEventListener('click', ()=>{ cvWrapper.classList.remove('active-popup');
})
portfolioClose.addEventListener('click', ()=>{ portfolioWrapper.classList.remove('active-popup');
})

// end Yoav




// const wrapper = document.querySelector('.wrapper');

// const iconClose = document.querySelector('.icon-close');
// const aboutMe = document.querySelector('.aboutme-link');
// const portfolio = document.querySelector('.portfolio-link');
// const resume = document.querySelector('.cv-link');
// const btnPopup =document.querySelector('.icon_btn-popup');


// aboutMe.addEventListener('click', ()=>{ wrapper.classList.add('active');
// })

// portfolio.addEventListener('click', ()=>{ wrapper.classList.add('active');
// })
// resume.addEventListener('click', ()=>{ wrapper.classList.add('active');
// })
// btnPopup.addEventListener('click', ()=>{ wrapper.classList.add('active-popup');
// })

// iconClose.addEventListener('click', ()=>{ wrapper.classList.remove('active-popup');
// })


// ==================
// const wrapper = document.querySelector('.wrapper');
// const portfoliowrapper = document.querySelector('.portfolio');

// const iconClose = document.querySelector('.icon-close');
// const aboutMe = document.querySelector('.aboutme-link');
// const portfolio = document.querySelector('.portfolio-link');
// const resume = document.querySelector('.cv-link');

// const btnPopup =document.querySelector('.icon_btn-popup');


// aboutMe.addEventListener('click', ()=>{
//      wrapper.classList.add('active-popup');
// })

// portfolio.addEventListener('click', ()=>{
//      portfoliowrapper.classList.add('active-popup');

// })

// // resume.addEventListener('click', ()=>{ 
// //     wrapper.classList.add('active');
// // })

// // btnPopup.addEventListener('click', ()=>{ 
// //     wrapper.classList.add('active-popup');
// // })

// // portfolio.addEventListener('click', ()=>{ 
// //     portfoliowrapper.classList.add('active-popup');
// // })

// iconClose.addEventListener('click', ()=>{ 
//     wrapper.classList.remove('active-popup');
// })

