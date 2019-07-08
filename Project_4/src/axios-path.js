import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://resume-cards.firebaseio.com'
})

export default instance