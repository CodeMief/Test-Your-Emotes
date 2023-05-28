document.addEventListener('DOMContentLoaded', () => {
    // Handle Twitch image upload
    const twitchLargeInput = document.getElementById('twitchLargeInput');
    const twitchMediumInput = document.getElementById('twitchMediumInput');
    const twitchSmallInput = document.getElementById('twitchSmallInput');
  
    twitchLargeInput.addEventListener('change', handleTwitchLargeUpload);
    twitchMediumInput.addEventListener('change', handleTwitchMediumUpload);
    twitchSmallInput.addEventListener('change', handleTwitchSmallUpload);
  
    function handleTwitchLargeUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = function (e) {
        document.getElementById('twitchLarge').src = e.target.result;
      };
  
      reader.readAsDataURL(file);
    }
  
    function handleTwitchMediumUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = function (e) {
        document.getElementById('twitchMedium').src = e.target.result;
      };
  
      reader.readAsDataURL(file);
    }
  
    function handleTwitchSmallUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = function (e) {
        document.getElementById('twitchSmall').src = e.target.result;
      };
  
      reader.readAsDataURL(file);
    }
  
    // Handle Twitch badge upload
    const twitchBadgeInputs = document.querySelectorAll('.twitchBadgeInput');
  
    twitchBadgeInputs.forEach((input, index) => {
      input.addEventListener('change', () => {
        const file = input.files[0];
        const reader = new FileReader();
  
        reader.onload = function (e) {
          const badgeId = 'twitchBadge' + (index + 1);
          document.getElementById(badgeId).src = e.target.result;
        };
  
        reader.readAsDataURL(file);
      });
    });
  
    // Handle Discord medium image upload
    const discordMediumInputs = document.querySelectorAll('.discordMediumInput');
  
    discordMediumInputs.forEach((input, index) => {
      input.addEventListener('change', () => {
        const file = input.files[0];
        const reader = new FileReader();
  
        reader.onload = function (e) {
          const mediumId = 'discordMedium' + (index + 1);
          document.getElementById(mediumId).src = e.target.result;
        };
  
        reader.readAsDataURL(file);
      });
    });
  
    // Handle Discord small image upload
    const discordSmallInputs = document.querySelectorAll('.discordSmallInput');
  
    discordSmallInputs.forEach((input, index) => {
      input.addEventListener('change', () => {
        const file = input.files[0];
        const reader = new FileReader();
  
        reader.onload = function (e) {
          const smallId = 'discordSmall' + (index + 1);
          document.getElementById(smallId).src = e.target.result;
        };
  
        reader.readAsDataURL(file);
      });
    });
  
    // Handle Discord reaction upload
    const discordReactionInputs = document.querySelectorAll('.discordReactionInput');
  
    discordReactionInputs.forEach((input, index) => {
      input.addEventListener('change', () => {
        const file = input.files[0];
        const reader = new FileReader();
  
        reader.onload = function (e) {
          const reactionId = 'discordReaction' + (index + 1);
          document.getElementById(reactionId).src = e.target.result;
        };
  
        reader.readAsDataURL(file);
      });
    });
  });
  