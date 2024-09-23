const leadText = document.querySelector('.lead');
    const button = document.querySelector('.restartBtn');

    button.addEventListener('click', () => {
      leadText.classList.remove('lead');

      void leadText.offsetWidth; 
      leadText.classList.add('lead');
    });


