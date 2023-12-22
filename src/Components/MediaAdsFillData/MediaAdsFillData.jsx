import React from 'react'
import '../TextAdsFillData/TextAdsFillData.css'
import InputContainer from '../InputContainer/InputContainer';
import TextAreaContainer from '../TextAreaContainer/TextAreaContainer';
import './MediaAdsFillData.css'
import SelectContainer from '../SelectContainer/SelectContainer';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function MediaAdsFillData() {

    const navigate = useNavigate();

    const handleAdSubmit = () => {
        navigate('/adsubmitted');

        setTimeout(() => {
            navigate('/create-ads');
        }, 600);
    }

  return (
    <div className='textAdsFillDataCont'>
        <p className='createText-MediaP'>Create Text & Media</p>
        
        <div className='headingDescCont'>
            <div>
                <div className='headingInpCont'>
                    <InputContainer label='Heading 01' placeholder='Add a heading that would make users interested'/>
                </div>
                <div className='headingInpCont'>
                    <InputContainer label='Heading 02' placeholder='Add a heading that would make users interested'/>
                </div>
            </div>
            <div>
                <TextAreaContainer />
            </div>
        </div>

        <div className='mediaAdsImgCont'>
            <InputContainer label='Landscape Marketing Image (1.9:1)' placeholder='Add the URL of the image you want to use for the ad'/>
            <InputContainer label='Portait Marketing Image (4:5)' placeholder='Add the URL of the image you want to use for the ad'/>
            <InputContainer label='Square Marketing Image (1:1)' placeholder='Add the URL of the image you want to use for the ad'/>
        </div>

        <InputContainer label='Video URL' placeholder='Add the URL of the video you want to use for the ad'/>

        <div className='businessNameBtnLabelCont'>
            <div className='businessInpCont'>
                <InputContainer label='Business Name' placeholder='Add your business name'/>
            </div>
            <SelectContainer />
        </div>

        <InputContainer label='Website URL' placeholder='Add the URL of the landing page you want to redirect users to'/>

        <div className='textAdsFillBtnCont mediaAdsFillBtnCont'>
            <button onClick={() => {navigate('/create-ads')}}>Back</button>
            <Button variant='contained' style={{padding: '7px 40px'}} 
                onClick={handleAdSubmit}
            >Submit</Button>
        </div>
    </div>
  )
}

export default MediaAdsFillData;