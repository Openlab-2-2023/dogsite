/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }

  const text = "Parallax based website";
  let index = 0;
  const typingContainer = document.getElementById('typing');
  
  // Set up the Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Start typing when the element is in view
        typingContainer.classList.remove('hidden');
        startTyping();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
    
  // Observe the typing container
  observer.observe(typingContainer);
  
  function startTyping() {
    const typingInterval = setInterval(type, 100);
  
    function type() {
      typingContainer.textContent = text.slice(0, index);
      index++;
  
      if (index > text.length) {
        clearInterval(typingInterval);
      }
    }
  }
  