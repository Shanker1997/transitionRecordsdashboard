
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useDispatch, useSelector } from 'react-redux';
import CardComponent from './CardComponent';
import { selectCategoryOpt } from '../../constants/selectOptions';

const  RecentTransitionDetails=()=> {
    const {expensesData}=useSelector((state:any)=>state.application)
    const [chartData,setChartData]=useState<any>([])
    const dispatch=useDispatch()
    const applyFilterChange=(value:any)=>{
        if(value){
            let data=expensesData?.filter((expenseItem:any)=>expenseItem?.category === value )
            setChartData(data)

        }
        else{
            setChartData(expensesData)
        }
        
    }
    useEffect(()=>{
        setChartData(expensesData)

    },[expensesData])

    

    return (
        <CardComponent title="Recent Transition Record" className="TransitionRecord">
        <div className="card">
            <div className='filterContainer py-3'>
                <select className='select py-2 rounded form-select w-20' onChange={(e:any)=>{applyFilterChange(e.target.value)}}>
                    <option value={""}> Select Filter</option>
                    {selectCategoryOpt?.map((opt:any)=>(
                        <option value={opt.value}>{opt?.label}</option>
                    ))}
                </select>
            </div>
            <div>

            
            <DataTable
             value={chartData} 
             emptyMessage="No Recent Transition Records"
             tableStyle={{ minWidth: '50rem' }}>
                <Column field="dateTransition" header="Date"></Column>
                <Column field="amount" header="Amount Spent"></Column>
                <Column field="category" header="Category"></Column>
            </DataTable>
            </div>
        </div>
                 </CardComponent>
    );
}
export default RecentTransitionDetails
        