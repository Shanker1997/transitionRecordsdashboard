
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useSelector } from 'react-redux';

const  RecentTransitionDetails=()=> {
    const {expensesData}=useSelector((state:any)=>state.application)
    const [products, setProducts] = useState([{quantity:1000,category:"castiron",name:"iron",code:"Code"}]);

    

    return (
        <div className="card">
            <DataTable
             value={expensesData} 
             emptyMessage="No Recent Transition Records"
             tableStyle={{ minWidth: '50rem' }}>
                <Column field="dateTransition" header="Code"></Column>
                <Column field="amount" header="Name"></Column>
                <Column field="category" header="Category"></Column>
            </DataTable>
        </div>
    );
}
export default RecentTransitionDetails
        