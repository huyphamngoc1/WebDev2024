let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () => {
   menu.classList.toggle('active');
};

window.onscroll = () => {
   menu.classList.remove('active');
};

document.querySelectorAll('.view-property .details .thumb .small-images img').forEach(images => {
   images.onclick = () => {
      src = images.getAttribute('src');
      document.querySelector('.view-property .details .thumb .big-image img').src = src;
   };
});

document.querySelectorAll('.faq .box-container .box h3').forEach(headings => {
   headings.onclick = () => {
      headings.parentElement.classList.toggle('active');
   };
});

function getHousesType() {
   // Get all the listing boxes
   const listings = document.querySelectorAll('.listings .box');

   // Loop through each listing
   listings.forEach(listing => {
      // Find the type <p> element inside each listing
      const typeElement = listing.querySelector('.type span:first-child');

      // Check if the type is 'House'
      if (typeElement && typeElement.textContent.trim() === 'House') {
         // Show the listing if it's a house
         listing.style.display = 'block';
      } else {
         // Hide the listing if it's not a house
         listing.style.display = 'none';
      }
   });
}

function getFlatsType() {
   // Get all the listing boxes
   const listings = document.querySelectorAll('.listings .box');

   // Loop through each listing
   listings.forEach(listing => {
      // Find the type <p> element inside each listing
      const typeElement = listing.querySelector('.type span:first-child');

      // Check if the type is 'Flat'
      if (typeElement && typeElement.textContent.trim() === 'Flat') {
         // Show the listing if it's a flat
         listing.style.display = 'block';
      } else {
         // Hide the listing if it's not a flat
         listing.style.display = 'none';
      }
   });
}