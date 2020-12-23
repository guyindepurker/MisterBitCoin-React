
import moment from 'moment'
import  { Component } from 'react'
import './ApexChart.scss'
import Chart from "react-apexcharts";
class ApexChart extends Component {

    get options (){
        const {xaxis,yaxis,palette} = this.props
        const options ={
            xaxis:{
                categories: xaxis.map(value=>{
                    console.log(value,'lala');
                    const date = new Date(value*1000)
                    console.log('date:', date)
                    let myDate = moment(date).format('MMM DD')
                    console.log('myDate:', myDate)
                    return myDate
                }),
                labels:{rotate:0}
            },
            theme:{
                palette
            }

        }
        const series =[{
            chart:{
                id:'apex',
                toolbar:{
                    show:false,
                }
            },
            data:yaxis
        }]
        return {options,series}
    }
    render() {
        return (<Chart width={800} className="apex-chart flex justify-center" height={320} type="area" {...this.options} />)
    }
}

export default ApexChart
