import React, { useState } from 'react'
import CardComponent from './CardComponent'
import AddTransitionRecord from './CustomDialog'
const HeaderActions=(props:any)=>{
    const [currentUserIncome,setCurrentUserIcome]=useState<number>(5000)
    const [val,setVal]=useState<number>(0)
    const handleAddIncom=()=>{
        setCurrentUserIcome(currentUserIncome+val)
        setVal(0)
    }
    return(
        <>
        <CardComponent className={"headerActions"}>
            <div className='mainContainer'>
                <div className='user-income'>
                    <span className='text-bold'>
                        Current Available Limit :
                        </span>
                    <span>{currentUserIncome}</span>
                </div>
                <div className='d-flex alighn-items-center add-income-section'>
                    <input className='form-control' name='addIncome' type='number' placeholder='Enter Limit Amount' onChange={(e:any)=>{setVal(parseInt(e.target.value))}} value={val}/>
                    <button className='btn btn-primary' onClick={handleAddIncom}> Add Limit</button>
                </div>
                <AddTransitionRecord currentIncom={currentUserIncome} setCurrIncome={setCurrentUserIcome}/>


            </div>
        </CardComponent>
        </>
    )
}
export default HeaderActions