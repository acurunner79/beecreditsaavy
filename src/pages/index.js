import * as React from "react"
import { Client } from "appwrite";
import Layout from "../components/Layout"


const IndexPage = () => {

  const client = new Client();

  client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('65680158d5e6fee2d002');
  console.log(client.config.endpoint)

  // const apiEndpoint = client.config.endpoint

  // const [data, setData] = React.useState()

  // const getData = async () => {
  //   const response = fetch(apiEndpoint + '/abcdefghijklmnopqrstuvwxyz')
  //   const data = await (await response).json()
  //   setData(data)
  //   console.log('data from appwrite - ', data)
    
  // }

  // React.useEffect(() => {
  //   getData(data)
  // }, [])


  return (
    <Layout>
      <main>
        <h1 className='page-header'>BeeCreditSavvy</h1>
        
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
