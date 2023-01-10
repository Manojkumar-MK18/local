import { ReactElement } from 'react'
import * as Chart from 'highcharts'
import drilldown from 'highcharts/modules/drilldown'
import { HighPieChart } from './subcomponents'
drilldown(Chart)

const PieChart = (): ReactElement => {
  const determineFees = () => {
    return {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Fees Status'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        shared: true,
        valuePreffix: 's'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          },
          showInLegend: true
        }
      },
      series: [
        {
          name: 'ins',
          colorByPoint: true,
          data: [
            {
              name: 'Fees Collected',
              y: 20944,
              sliced: true
            },
            {
              name: 'Pending Fees',
              y: 48955,
              sliced: true
            },
            {
              name: 'Concession',
              y: 3434,
              sliced: true
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
          width: '47%',
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

export default PieChart
