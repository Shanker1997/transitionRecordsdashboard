import React from 'react'
import CateogroiresChart from './CategoriesChart'
import { useSelector } from 'react-redux'
import RecentTransitionDetails from './RecentTransitionTable'
import HeaderActions from './HeaderActions'
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router'
const DashboardIndex=(props:any)=>{
    const {expensesData}=useSelector((state:any)=>state.application)
    const navigate=useNavigate()
    return(
        <>
        <div className='dashboard-container'>
         <div className='d-flex justify-content-end align-items-end my-2 logout' > <span title='logout' onClick={(e:any)=>{navigate('/')}}><LogoutIcon /></span></div>
         <div className='top-card'>
            <HeaderActions/>
         </div>
            <RecentTransitionDetails/>
         <div className='chart-container'>
            <CateogroiresChart/>
         </div>
        </div>
        </>
    )

}
export default DashboardIndex