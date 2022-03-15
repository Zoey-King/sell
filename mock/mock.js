import Mock from 'mockjs'
import MockData from './data.json'

Mock.mock('/api/seller', {
  code: 200,
  message: 'success',
  data: MockData.seller
})

Mock.mock('/api/goods', {
  code: 200,
  message: 'success',
  data: MockData.goods
})

Mock.mock('/api/ratings', {
  code: 200,
  message: 'success',
  data: MockData.ratings
})
