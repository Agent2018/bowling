(function () {
    var cafe = document.querySelector('.cafe');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('cafe_active');
        }
      });
    });
  
    observer.observe(cafe);
  })();

  (function () {
    var qzar = document.querySelector('.qzar');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('qzar_active');
        }
      });
    });
  
    observer.observe(qzar);
  })();

  (function () {
    var kiy = document.querySelector('.kiy');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('kiy_active');
        }
      });
    });
  
    observer.observe(kiy);
  })();

  (function () {
    var bow = document.querySelector('.bow');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('bow_active');
        }
      });
    });
  
    observer.observe(bow);
  })();

  (function () {
    var one = document.querySelector('.one');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('one_active');
        }
      });
    });
  
    observer.observe(one);
  })();

  (function () {
    var two = document.querySelector('.two');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('two_active');
        }
      });
    });
  
    observer.observe(two);
  })();