import { expect } from 'chai'
import { shallowMount, createLocalVue} from '@vue/test-utils'
import VueRouter from 'vue-router'
import BaseSelector from '@/components/BaseSelector'

// 这个组件应该

const factory = (values={})=>{
  return shallowMount(BaseSelector,{
    propsData: {...values}
  })
}
// 'describe' 是 '测试套件'(test suite), 表示一组相关的测试. 第一个参数时测试套件的名称，第二个参数是实际执行的函数
// 'it' 是 '测试用例'(test case) 表示一个单独的测试，是测试的最小单位, 第一个参数是测试用例的名称，第二个参数是一个实际执行的函数
// '断言',就是判断源码的实际执行结果与预期结果是否一致，如果不一致就抛出一个错误
//  所有的测试用例(it 块) 都应该含有一句或多句的断言
describe('BaseSelector.vue', () => {
  it('传递不同 value type ,显示对应的 value type ', () => {
    let propsData={count:{type:'元',value:0,stepValue:10,maxValue:100}}
    const wrapper=factory(propsData)
    expect(wrapper.text()).to.include("0元")
  
  })
  it('根据传递的 stepValue ,点击 + 按钮应该使得计数依次递增 stepValue, 反之点击 - 依次递减 stepValue', () => {
    let propsData={count:{type:'元',value:0,stepValue:10,maxValue:100}}
    const wrapper=factory(propsData)
    expect(wrapper.text()).to.include("0元")
    wrapper.find('div.selector__symbol').trigger('click',1)
    expect(wrapper.vm.count.value).to.be.equal(10)
    wrapper.find('div.selector__symbol').trigger('click',-1)
    console.log(wrapper.vm.count.value);
    expect(wrapper.vm.count.value).to.be.equal(0)

  })
  it('点击按钮计数超过最大值时，会变成 0 ', () => {
    let propsData={count:{type:'元',value:100,stepValue:10,maxValue:100}}
    const wrapper=factory(propsData)
    expect(wrapper.text()).to.include("100元")
    wrapper.find('div.selector__symbol').trigger('click',1)
    expect(wrapper.vm.count.value).to.be.equal(0)
  })
})
