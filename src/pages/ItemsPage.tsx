import styled from 'styled-components'
import { Topnav } from '../components/Topnav'
import { TimeRangePicker } from '../components/TimeRangePicker'
import { AddItemFloatButton } from '../components/AddItemFloatButton'
import { ItemsSummary } from './ItemsPage/ItemsSummary'

const Div = styled.div`
  background: linear-gradient(0deg, rgba(143,76,215,1) 0%, rgba(92,51,190,1) 100%);
`

export const ItemsPage: React.FC = () => {
  return (
    <div>
      <Div>
        <Topnav />
        <TimeRangePicker />
      </Div>
      <ItemsSummary />
      <AddItemFloatButton />
    </div>
  )
}
