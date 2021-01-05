"use strict";
function getDogImages(query, displayCallback) {
  if (query < 3) {
    fetch(`https://dog.ceo/api/breeds/image/random/${query}`)
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));
  } else if (query > 50) {
    return alert(`Please choose a number equal or less than 50`);
  } else {
    fetch(`https://dog.ceo/api/breeds/image/random/${query}`)
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));
  }
}

function listenToInput() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    queryTarget.val("3")
    getDogImages(query);
  });
}
$(function () {
  console.log('App loaded! Waiting for submit!');
  listenToInput();
}); 
