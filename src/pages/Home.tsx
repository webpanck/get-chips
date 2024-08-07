import useSWR from 'swr'
import { Link, Navigate } from 'react-router-dom'
import { useAjax } from '../lib/ajax'
import { useTitle } from '../hooks/useTitle'
import { AddItemFloatButton } from '../components/AddItemFloatButton'
import { Loading } from '../components/Loading'
import { Icon } from '../components/Icon'

interface Props {
  title?: string
}

export const Home: React.FC<Props> = (props) => {
  useTitle(props.title)
  const { get } = useAjax({ showLoading: true, handleError: false })
  const { data: meData, error: meError } = useSWR('/api/v1/me', async path => {
    // 如果返回 401 就让用户先登录
    const response = await get<Resource<User>>(path)
    return response.data.resource
  })
  const { data: itemData, error: itemError } = useSWR(meData ? '/api/v1/items' : null, async path =>
    (await get<Resources<Item>>(path)).data
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
      <Icon className="mt-20vh mb-20vh w-128px h-128px" name="pig" />
    </div>
    <div px-16px>
      <Link to="/items/new">
        <button c-btn>开始记账</button>
      </Link>
    </div>
    <AddItemFloatButton />
  </div>
}
