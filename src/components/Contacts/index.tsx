import React, { useState, useEffect, useCallback, useRef } from 'react'
import UserContact from '../UserContact'
import debounce from 'lodash.debounce'
// import myImage from '../../assets/travis.svg'

import InfiniteScroll from 'react-infinite-scroller'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { User } from '../../types'

import classes from './style.module.scss'
import { getUsers } from '../../api/users'

interface IProps {
  search: string
}

function Contacts(props: IProps) {
  const { search } = props
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const users = useSelector<RootState>(state => state.users) as User[]

  const debouncedQuery = useRef(debounce(search => {
    setPage(1)
    getUsers(search, 1, true).then(({ hasMore }) => {
      setHasMore(hasMore)
    })
  }, 300)).current;

  const didMountRef = useRef(false);

  const fetchUsers = useCallback(async (currentPage: number) => {
    setLoading(true)
    const { hasMore } = await getUsers(search, currentPage)
    setLoading(false)
    setHasMore(hasMore)
  }, [search])

  const fetchData = () => {
    console.log('loading', loading)
    if (!loading) {
      console.log('here')
      setPage(page + 1)
      fetchUsers(page + 1)
    }
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true
      return
    }
    fetchUsers(1)
    console.log('page', page);
  }, [])

  useEffect(() => {
    debouncedQuery(search)
  }, [search])

  console.log('hasMore', hasMore)

  return (
    <div className={classes.contacts}>
      <InfiniteScroll
        useWindow={false}
        initialLoad={false}
        loadMore={fetchData}
        hasMore={hasMore}
        loader={loading ? <h4 key="loader">Loading...</h4> : undefined}
      >
        {users.map((user) => {
          return (
            <div key={user.id} className={classes.contact}>
              <UserContact
                user={user}
              />
            </div>
          )
        })}
        </InfiniteScroll>
    </div>
  );
}

export default Contacts;