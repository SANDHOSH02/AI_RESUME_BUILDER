          // Get social media icons by their IDs
          const twitterIcon = document.getElementById('twitter-icon');
          const whatsappIcon = document.getElementById('whatsapp-icon');
          const instagramIcon = document.getElementById('instagram-icon');

          // Add click event listeners to each icon
          twitterIcon.addEventListener('click', openTwitter);
          whatsappIcon.addEventListener('click', openWhatsapp);
          instagramIcon.addEventListener('click', openInstagram);

          // Functions to open corresponding social media accounts
          function openTwitter() {
              window.open('https://twitter.com/', '_blank');
          }

          function openWhatsapp() {
              window.open('  '); // Replace with the actual WhatsApp link
          }

          function openInstagram() {
              window.open('');
          }