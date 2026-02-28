import React from 'react'

const MyBookings = () => {

  const [bookings, setBookings] = useStae([])

  const fetchMyBookings = async () => {
    setBookings(dummyMyBookingsData)
  }

  useEffect(()=>{
    fetchMyBookings()
  },[])

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl'>
      
      <Title title='My Bookings'
        subtitle='View and mangae your all car bookings'/>

    </div>
  )
}

export default MyBookings
