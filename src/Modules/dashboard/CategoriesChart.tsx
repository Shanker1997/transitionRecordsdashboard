import React, { useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react';
import CardComponent from './CardComponent';
import { useSelector } from 'react-redux';
import { selectCategoryOpt } from '../../constants/selectOptions';

const CateogroiresChart=(props:any)=>{
  const {expensesData} =useSelector((state:any)=>state.application)
  const [chartData,setChartData]=useState<any>(null)
 
  useEffect(()=>{
    if(expensesData?.length > 0){
      let data:any=[]

      // This Code Is Used To Prepare the Chart Json From The expenses Record 
    selectCategoryOpt?.map((item:any)=>{
        let addedList=expensesData?.filter((expense:any)=>expense.category === item.value )
        if (addedList?.length>0){
          let category={name:item.label,value:0}
          addedList?.map((expense:any)=> category.value+=expense.amount)
          console.log(addedList,category,"10......")
          data.push(category)
        }
      })
      setChartData(data)
    }

  },[expensesData])



  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Ependiture Split',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: chartData?.map((item:any)=>{
          return item
        })
      }
    ]
  };
  
    return(
        <>
          <CardComponent title="Catergories Chart" className={"categoryChart"}>
        {
          expensesData?.length>0 ?
          <ReactECharts option={option}/>:<p className='py-3 d-flex align-items-center mx-5'>Add Transition Records For Chart Preview </p>
        }
        </CardComponent>
       
        </>
    )
}

export default CateogroiresChart