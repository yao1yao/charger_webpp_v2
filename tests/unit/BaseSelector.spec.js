import { expect } from 'chai'
import { shallowMount, createLocalVue} from '@vue/test-utils'
import VueRouter from 'vue-router'
import BaseSelector from '@/components/BaseSelector'

const factory = (values={})=>{
  return shallowMount(BaseSelector,{
    propsData: {...values}
  })
}
// 'describe' 是 '测试套件'(test suite), 表示一组相关的测试. 第一个参数时测试套件的名称，第二个参数是实际执行的函数
// 'it' 是 '测试用例'(test case) 表示一个单独的测试，是测试的最小单位, 第一个参数是测试用例的名称，第二个参数是一个实际执行的函数
describe('BaseSelector.vue', () => {
  it('renders props when passed', () => {
    let propsData={count:{type:'元',value:10}}
    const wrapper=factory(propsData)
    // expect(wrapper.text()).to.include(msg)
    // expect(wrapper.find('.count'))
    console.log(wrapper.find('.count').text());
  })
})
