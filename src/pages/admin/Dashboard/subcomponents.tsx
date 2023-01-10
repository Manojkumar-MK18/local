import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import HighchartsReact from 'highcharts-react-official'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  margin-bottom: 3%;
`
export const Cards = styled(Card)`
  background-color: white;
  padding: 25px 10px 25px 15px;
  max-width: 25%;
  margin: 0 30px 0 40px;
  background-color: #fff;
  border: inherit !important;
  border-radius: 7px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const CardTextWrapper = styled.div`
  margin-top: 10px;
  align-items: center;
`

export const CardsTitle = styled.h5`
  color: inherit;
  font-family: inherit;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 0.66em;
`
export const CardsBody = styled.h2`
  font-size: 1.75rem;
  font-weight: 700 !important;
  float: left;
  color: inherit;
  font-family: inherit;
  line-height: 1.1;
`
export const CardsImage = styled.img`
  width: 100px;
  height: 75px;
  object-fit: contain;
`
export const HighPieChart = styled(HighchartsReact)``

export const FilterWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 50px;
`

export const Icon = styled(FontAwesomeIcon)`
  font-weight: 0;
  color: #55075b;
  font-size: 20px;
`

export const ChartWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0 2rem 0;
  justify-content: space-evenly;
`
