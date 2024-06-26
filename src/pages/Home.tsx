import useSWR from 'swr'
import { Navigate } from 'react-router-dom'
import p from '../assets/images/pig.svg'
import { ajax } from '../lib/ajax'
import { useTitle } from '../hooks/useTitle'
import { AddItemFloatButton } from '../components/AddItemFloatButton'
import { Loading } from '../components/Loading'

interface Props {
  title?: string
}

export const Home: React.FC<Props> = (props) => {
  useTitle(props.title)
  const { data: meData, error: meError } = useSWR('/api/v1/me', async path =>
    (await ajax.get<Resource<User>>(path)).data.resource
  )
  const { data: itemData, error: itemError } = useSWR(meData ? '/api/v1/items' : null, async path =>
    (await ajax.get<Resources<Item>>(path)).data
  )
  const isLoadingMe = !meData && !meError
  const isLoadingItems = meData && !itemData && !itemError

  if (isLoadingMe || isLoadingItems) {
    return <Loading className="h-screen" />
  }
  if (itemData?.resources[0]) {
    return <Navigate to="/items" />
  }

  return <div>
    <div flex justify-center items-center>
      <img mt-20vh mb-20vh width="128" height="130" src={p} />
    </div>
    <div px-16px>
      <button c-btn>开始记账</button>
    </div>
    <AddItemFloatButton />
  </div>
}
