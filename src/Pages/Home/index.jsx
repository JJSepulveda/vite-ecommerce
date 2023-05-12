import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'

function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setItems(data)})
  }, [])

  return (
    <>
      <Layout>
        Home
        <div className='grid gap-4 grid-cols-4 w-100 max-w-screen-lg'>
          {
            items?.map((item) => <Card key={item.id} data={item} />)
          }
        </div>
      </Layout>
    </>
  )
}

export default Home
