import { ReactElement } from 'react'
import * as Chart from 'highcharts'
import drilldown from 'highcharts/modules/drilldown'
import { HighPieChart } from './subcomponents'
drilldown(Chart)

const BarChart = (): ReactElement => {
  const determineFees = () => {
    return {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Fees Received'
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        type: '12',
        title: {
          text: ' '
        }
      },
      credits: {
        enabled: false
      },
      tooltip: {
        shared: true,
        valuePreffix: 's'
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y}₹'
          }
        }
      },
      legend: {
        enabled: false
      },
      series: [
        {
          colorByPoint: true,
          name: ' ',
          data: [
            {
              name: 'January',
              y: 3451,
              drilldown: 'January'
            },
            {
              name: 'Feb',
              y: 1984,
              drilldown: 'Feb'
            },
            {
              name: 'Mar',
              y: 418,
              drilldown: 'Mar'
            },
            {
              name: 'Apr',
              y: 412,
              drilldown: 'Apr'
            },
            {
              name: 'May',
              y: 233,
              drilldown: 'May'
            },
            {
              name: 'Jun',
              y: 945,
              drilldown: 'Jun'
            }
          ]
        }
      ]
    }
  }

  return (
    <HighPieChart
      containerProps={{
        style: {
          width: '45%',
          padding: '0',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '7px'
        }
      }}
      highcharts={Chart}
      options={determineFees()}
    />
  )
}

export default BarChart
