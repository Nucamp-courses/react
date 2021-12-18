
// created an async function to load the dog pictures
const loadDogPictures = async (dogsToLoad = 8) => {
    const apiBaseUrl = 'https://dog.ceo/api/breeds/image/random/';
    // Await pauses execution until the promise is resolved
    // Response variable holds a response stream object (not usable yet)
    // https://developer.mozilla.org/en-US/docs/Web/API/Response
    const response = await fetch(`${apiBaseUrl}${dogsToLoad}`);
    // Pauses execution again to read the response as json (convert to JSON object)
    // .json() returns a promise as well
    // https://developer.mozilla.org/en-US/docs/Web/API/Response/json
    const data = await response.json();
    // loop through message array of dog data and return an array of dog objects
    const dogData = data.message.map(item => {
      // item is an image url in the format:
      // "https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_1727.jpg",
      let breed = item.replace('https://', '').split('/')[2];
      // bread clean up (i.e. starts in the format 'subtype-maintype')
      if (breed && breed !== '') {
        breed = breed.split('-').reverse().join(' ');
      }
  
      return {
        id: `dog_pic_${data.message.indexOf(item)}`,
        imgUrl: item,
        breed: breed
      };
    });
  
    // returns an array of dog objects
    return dogData;
  }; 

export default loadDogPictures;