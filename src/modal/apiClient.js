import axios from 'axios'

const config = {
  baseURL: 'http://localhost:8002/',
  timeout: 1000
}

const client = axios.create(config)

export default {
  getMoodleList: () => {
    return client.get('static/moodle.json')
  },
}
