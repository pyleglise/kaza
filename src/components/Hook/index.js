import { useState, useEffect } from 'react'
import axios from 'axios'

const urlAPILodging = process.env.PUBLIC_URL + '/data/lodging.json'

export const useGet =(url = urlAPILodging, filter) =>{
  const [data, setData]=useState()
  const[isLoading, setLoading] = useState(true)
  const [error, setError]=useState(false)
}