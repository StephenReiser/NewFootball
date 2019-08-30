import React, { Component } from 'react'
import { HorizontalBar } from 'react-chartjs-2';


// const data = {
//     labels: [ 'Minimum', 'Average', 'Maximum'],
//     datasets: [
//       {
//         label: 'Player Projections',
//         fill: false,
//         lineTension: 0.1,
//         backgroundColor: 'rgba(75,192,192,0.4)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderCapStyle: 'butt',
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJoinStyle: 'miter',
//         pointBorderColor: 'rgba(75,192,192,1)',
//         pointBackgroundColor: '#fff',
//         pointBorderWidth: 1,
//         pointHoverRadius: 5,
//         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//         pointHoverBorderColor: 'rgba(220,220,220,1)',
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 10,
//         data: []
//       }
//     ]
//   };

// class PlayerChart extends Component {
//     componentDidMount () {
        
//         const { datasets } = this.refs.chart.chartInstance.data
//     console.log(datasets[0].data);
//     console.log({ datasets })
    
//     }

//     render() {
//         data.datasets[0].data = [this.props.minScore, this.props.projPts, this.props.maxScore]
//         return(
//             <div>
//         <h2>Line Example</h2>
//         <Bar ref="chart" data={data} />
//       </div>
//         )
//     }

// }

// export default PlayerChart

const barChartData = {
    labels: [ 'Range'],
    datasets: [
    {
    label: 'Minimum',
    backgroundColor: '#ffffff',
    borderSkipped: 'right',
    borderColor: '#000000',
    borderWidth: 2,
    stack: '2',
    data: [],
    },
    {
    label: 'Average',
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderWidth: 2,
    stack: '2',
    data: [],
    },
    {
        label: 'Maximum',
        backgroundColor: '#ffffff',
        stack: '2',
        borderColor: '#000000',
        borderSkipped: 'left',
        borderWidth: 2,
        data: [],
        },
    ],
    };
    
    const barChartOptions = {
    legend: {
    display: false,
    },
    scales: {
    xAxes: [
    {
    stacked: true,
    },
    ],
    yAxes: [
    {
    stacked: true,
    // display: false
    },
    ],
    },
    };

    class PlayerChart extends Component {
        constructor(props) {
            super(props)
            this.state = {
                min: 0,
                max: 0,
                proj: 0
            }
        }
        componentDidMount () {
            this.setDataPoints()
        }

        componentWillRecieveProps(newProps){
            // if(newProps.labels && newProps.data) {
            //      if(barChart){barChart.destroy()};
            //      this.createBarChart(newProps.labels, newProps.data)
            // }
            console.log(newProps)
       }
        setDataPoints () {
            this.setState({
                min: this.props.minScore,
                max: this.props.maxScore,
                proj: this.props.projPts
            }) 
        }

        render() {
            barChartData.datasets[0].data[0] = this.props.minScore
            barChartData.datasets[1].data[0] = this.props.projPts
            barChartData.datasets[2].data[0] = this.props.maxScore
            return(
                <div>
                <h2>Line Example</h2>
                <HorizontalBar ref="chart" data={barChartData} options={barChartOptions} redraw/>
                </div>
            )
        }
    }
    export default PlayerChart