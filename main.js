
document.querySelector('.accordion').addEventListener('click', event => {
  const target = event.target;

  if (target.classList.contains('accordion-button')) {    
    const isActive = target.classList.contains('active')

    // close all expanded accordion, 
    // this will also serve as a close accordion if the accordion is already active
    event.currentTarget.querySelectorAll('.accordion-item').forEach(item => {
      item.querySelector('button.accordion-button').classList.remove('active');
      item.querySelector('.accordion-content').removeAttribute('style');
    });

    if (!isActive) {
      // add active class on target
      target.classList.add('active');
      // add dynamic height to accordion content
      const accordionContent = target.closest('.accordion-item').querySelector('.accordion-content');
      accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`
    }
  }
});