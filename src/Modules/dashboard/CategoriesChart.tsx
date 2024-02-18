import React from 'react'
import ReactECharts from 'echarts-for-react';
import CardComponent from './CardComponent';
import { useSelector } from 'react-redux';

const CateogroiresChart=(props:any)=>{
  const {expensesData} =useSelector((state:any)=>state.application)
    const option = {
        xAxis: {
          type: 'category',
          data: expensesData?.map((item:any,index:number)=>{
            return item?.category
          })
        },
        tooltip: {
          alwaysShowContent: true,
          position: function(pt:any) {
            return [pt[0], 130];
          },
          triggerOn:"mousemove",
          formatter: '{b}: {c}'
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: expensesData?.map((item:any,index:number)=>{
              return item?.amount
            }),
            type: 'bar',
            barWidth:"5%"
          }
        ]
      };
    return(
        <>
          <CardComponent title="Catergories Chart" className={"categoryChart"}>
        {
          expensesData?.length>0 ?
          <ReactECharts option={option}/>:<p>No Transition Records Available </p>
        }
        </CardComponent>
       
        </>
    )
}

export default CateogroiresChart