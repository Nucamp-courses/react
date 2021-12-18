import React from 'react'

/* 
  This component is presentational component (stateless, aka dummy component)

  .card, and .content are classes in the Bulma CSS framework:

  https://bulma.io/documentation/components/card/
  https://bulma.io/documentation/elements/content/

  Note: 
       Since images from API are in different sizes and aspect rations, 
       we apply the image as the background-image of the <figure> 
       as well for more flexibility. 

       We are only using the <img> tag for accessibility purposes and not using it to
       actually display the image. 
       
       The .is-sr-only is part of the Bulma CSS framework to hide the image visually 
       in the <img>.

       A litte CSS trick. :)
*/

const DogCardInfo = ({ imgUrl, breed }) => {

    return (

        <div className='card dog-card'>
            <div className='card-image'>
                <figure className='image' style={{ backgroundImage: `url(${imgUrl})` }}>
                    <img src={imgUrl} alt={`A ${breed} dog`} className='is-sr-only' />
                </figure>
            </div>
            <div className='card-content'>
                <div className='content'>
                    <strong>breed:</strong> {breed}
                </div>
            </div>
        </div>
    );
};

export default DogCardInfo;