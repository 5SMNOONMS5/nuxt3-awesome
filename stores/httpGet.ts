import { defineStore } from 'pinia'

export interface Args {}

export interface Headers {
  Accept: string
  'Accept-Encoding': string
  'Accept-Language': string
  Host: string
  Referer: string
  'User-Agent': string
  'X-Amzn-Trace-Id': string
}

export interface Get {
  args: Args
  headers: Headers
  origin: string
  url: string
}

const defaultGet: Get = {
  args: {},
  headers: {
    Accept: 'default',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language':
      'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7,und;q=0.6,cy;q=0.5,ja;q=0.4,da;q=0.3,ko;q=0.2',
    Host: 'httpbin.org',
    Referer: 'http://httpbin.org/',
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
    'X-Amzn-Trace-Id': 'Root=1-62fdfa30-37ae113f43a7d4e869fd16a7',
  },
  origin: '211.23.42.181',
  url: 'http://httpbin.org/get',
}

export interface Response {
  isSuccess: boolean
  data: Get
  Accept: string
}

const aURL: string = 'http://httpbin.org/get'

export const useHttpGet = defineStore('httpGet', {
  state: (): Response => ({
    isSuccess: true,
    data: defaultGet,
    Accept: defaultGet.headers.Accept,
  }),
  actions: {
    async request() {
      const { data, pending, error, refresh } = await useFetch(aURL)
      if (error.value) {
        this.isSuccess = false
        return
      }
      const value = data.value
      this.Accept = value.headers.Accept
    },
  },
  getters: {
    combine() {
      return ''
    },
    getAccept(): string {
      return this.Accept
    },
  },
})
