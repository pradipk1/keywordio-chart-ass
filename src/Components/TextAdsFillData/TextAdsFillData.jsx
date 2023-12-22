import React from 'react'
import InputContainer from '../InputContainer/InputContainer';
import './TextAdsFillData.css'
import TextAreaContainer from '../TextAreaContainer/TextAreaContainer';
import SelectContainer from '../SelectContainer/SelectContainer';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'

function TextAdsFillData() {

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

        <div className='businessNameBtnLabelCont'>
            <div className='businessInpCont'>
                <InputContainer label='Business Name' placeholder='Add your business name'/>
            </div>
            <SelectContainer />
        </div>

        <InputContainer label='Website URL' placeholder='Add the URL of the landing page you want to redirect users to'/>

        <div className='textAdsFillBtnCont'>
            <button onClick={() => {navigate('/create-ads')}}>Back</button>
            <Button variant='contained' style={{padding: '7px 40px'}} 
                onClick={handleAdSubmit}
            >Submit</Button>
        </div>
    </div>
  )
}

export default TextAdsFillData;