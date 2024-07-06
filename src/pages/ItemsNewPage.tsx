import { ReactNode, useState } from 'react'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { TopNav } from '../components/TopNav'
import { Tabs } from '../components/Tabs'
import s from './ItemsNewPage.module.scss'
import { Tags } from './ItemsNewPage/Tags'
import { DateAndAmount } from './ItemsNewPage/DateAndAmount'
import { useCreateItemStore } from '../stores/useCreateItemStore'
import { ItemDate } from './ItemsNewPage/ItemDate'

export const ItemsNewPage: React.FC = () => {
  const tabItems: { key: Item['kind']; text: string; element?: ReactNode }[] = [
    { key: 'expenses', text: '支出', element: <Tags kind="expenses" /> },
    { key: 'income', text: '收入', element: <Tags kind="income" /> }
  ]
  const [tabItem, setTabItem] = useState<Item['kind']>('expenses')
  const { data, error, setData, setError } = useCreateItemStore()
  return (
    <div className={s.wrapper} h-screen flex flex-col>
      <Gradient className="grow-0 shrink-0">
        <TopNav title="记一笔" icon={<Icon name="back" />} />
      </Gradient>
      <Tabs tabItems={tabItems} className="text-center grow-1 shrink-1 overflow-hidden"
        classPrefix='itemsNewPage'
        value={data.kind!}
        onChange={(tabItem) => { setData({ kind: tabItem }) }} />
      <div text-28px>{JSON.stringify(data)}</div>
      <DateAndAmount className="grow-0 shrink-0" itemDate={<ItemDate />} />
    </div>
  )
}
