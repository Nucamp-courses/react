import React, { useState, useEffect } from 'react';
import DogCardInfo from './components/DogCardInfo';
import loadDogPictures from './api/loadDogPictures';
import 'bulma/css/bulma.min.css';
import './styles.css';

function App() {

  // state variables for the app
  const [dogPictures, setDogPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfDogs, setNumberOfDogs] = useState('');
  const [totalDogsSearched, setTotalDogsSearched] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // set the loading state to true
    setIsLoading(true);
    // pause execution until the promise is resolved
    setDogPictures(await loadDogPictures(numberOfDogs));
    // set the loading state to false
    setIsLoading(false);
  };

  /*
      The Effect Hook lets you perform side effects in function components.
      A "side effect"  is any state change outside the called function scope. 
       
        
 */

  useEffect(() => {
    (async () => {
        setIsLoading(loading => !loading);
        setDogPictures(await loadDogPictures());

       // setDogPictures(dogPictureData);
        setIsLoading(loading => !loading);
     })();
  }, []);
 
  useEffect(() => {
    setTotalDogsSearched(totalDogs => totalDogs + dogPictures.length);
 }, [dogPictures]);

  return (
    <div className='container'>
      <header className='columns section has-text-centered'>
        <div className='column is-6 is-offset-3'>
          <h1 className='title is-size-3'>
            Search for pictures of good doggos
          </h1>
          <form className='form' onSubmit={handleSubmit}>
            <div className='field has-addons has-addons-centered'>
              <div className='control is-expanded'>
                <input
                  type='text'
                  className='input is-medium'
                  placeholder='how many dogs should we look for (max 50)?'
                  value={numberOfDogs}
                  onChange={e => setNumberOfDogs(e.target.value)}
                />
              </div>
              <div className='control'>
                <button className='button is-primary is-medium'>
                  <span className='icon is-small'>
                    <i className='fas fa-search'></i>
                  </span>
                  <span>search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </header>
      <hr />
      <div className='has-text-centered'>
        <h3 className='subtitle is-size-4'>
          All time puppers found = {totalDogsSearched}
        </h3>
      </div>
      <div className='columns section is-multiline'>
        {isLoading && (
          <progress className='progress is-medium is-link' max='100'>
            60%
          </progress>
        )}
        {!isLoading &&
          dogPictures.map(dogPicture => (
            <div className='column is-one-quarter' key={dogPicture.id}>
              <DogCardInfo imgURL = {dogPicture.imgUrl} breed = {dogPicture.breed} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;