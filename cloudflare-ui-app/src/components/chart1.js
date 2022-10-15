import React from 'react';
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries } from 'react-vis';


const Chart1 = (props) => {
    console.log(props);
    const dataArr1 = [];
    const dataArr2 = [];
    if ((props !== undefined) && (props !== null) && (props !== "")) {

        for (let i = 0; i < props.data.total.timestamps.length; i++) {
            dataArr1.push({ x: new Date(props.data.total.timestamps[i]).getTime(), y: props.data.total.values[i] })
        }
    }

    if ((props !== undefined) && (props !== null) && (props !== "")) {

        for (let i = 0; i < props.data.http.timestamps.length; i++) {
            dataArr2.push({ x: new Date(props.data.http.timestamps[i]).getTime(), y: props.data.http.values[i] })
        }
    }

    console.log(dataArr1);
    console.log(dataArr2);
  

    return (
        <XYPlot xType="time" width={1200} height={500}>
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis title="Date" />
            <YAxis title=" Total Traffic Change Over HTTP Traffic Change" />
            <LineSeries
                data={dataArr1}
                color="#cd3b54" />
            <LineSeries
                data={dataArr2}
                color="#ba4fb9" />


        </XYPlot>
    );
}
export default Chart1;