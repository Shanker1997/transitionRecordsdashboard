import React from 'react'
import CateogroiresChart from './CategoriesChart'
import { useSelector } from 'react-redux'
import RecentTransitionDetails from './RecentTransitionTable'
import HeaderActions from './HeaderActions'
const DashboardIndex=(props:any)=>{
    const {expensesData}=useSelector((state:any)=>state.application)
    return(
        <>
        <div className='dashboard-container'>
         <div className='top-card'>
            <HeaderActions/>
         </div>
         <div className='mt-3 mb-3'>
            <RecentTransitionDetails/>
         </div>
         <div className='chart-container'>
            <CateogroiresChart/>
         </div>
        </div>
        </>
    )

}
export default DashboardIndex