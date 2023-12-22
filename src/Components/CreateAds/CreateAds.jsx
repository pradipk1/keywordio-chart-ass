import React, { useState } from 'react'
import './CreateAds.css'
import textadsimg from '../../Images/textadsimg.png'
import mediaadsimg from '../../Images/mediaadsimg.png'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function CreateAds() {

  const [textAdsChecked, setTextAdsChecked] = useState(false);
  const [mediaAdsChecked, setMediaAdsChecked] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if(mediaAdsChecked) {
      navigate('/mediaads-filldata');
    } else {
      navigate('/textads-filldata');
    }
    
  }

  return (
    <div className='createAdsCont'>
      <p>Create Ads</p>
      <div className='createAdsSelectCont'>

        <div onClick={() => {setTextAdsChecked(!textAdsChecked)}}>
          <Checkbox checked={textAdsChecked}/>
          <div className='createAdsImgCont'>
            <img src={textadsimg} alt="text ads image" />
          </div>
          
          <div className='createTextAdCont'>
            <p>Create</p>
            <h3>Text Ad</h3>
          </div>
        </div>

        <div onClick={() => {setMediaAdsChecked(!mediaAdsChecked)}}>
          <Checkbox checked={mediaAdsChecked} />
          <div className='createAdsImgCont'>
            <img src={mediaadsimg} alt="media ads image" />
          </div>

          <div className='createTextAdCont'>  
            <p>Create</p>
            <h3>Media Ad</h3>
          </div>
        </div>
      </div>

      <div className='createAdsBtnCont'>
        <Button variant='contained' style={{padding: '8px 40px'}}
          disabled={!(textAdsChecked || mediaAdsChecked)}
          onClick={handleNext}
        >Next</Button>
      </div>
    </div>
  )
}

export default CreateAds;