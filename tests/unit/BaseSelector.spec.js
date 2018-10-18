import { expect } from 'chai'
import { shallowMount} from '@vue/test-utils'
import BaseSelector from '@/components/BaseSelector'

// 这个组件应该根据

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
  it('传递不同 value type ,显示对应的 + value type -', () => {
    let propsData={count:{type:'元',value:0,stepValue:10,maxValue:100}}
    const wrapper=factory(propsData)
    expect(wrapper.text()).to.include("+0元-")
  })
  it('根据传递的 stepValue ,每次点击 + 按钮应该使得计数 value 依次递增 stepValue, 递增到 maxValue 后变成 0 再继续递增', () => {
    let propsData={count:{type:'元',value:90,stepValue:10,maxValue:100}}
    const wrapper=factory(propsData)
    wrapper.find('div.selector__symbol-hd').trigger('click')
    expect(wrapper.vm.count.value).to.be.equal(100)
    wrapper.find('div.selector__symbol-hd').trigger('click')
    expect(wrapper.vm.count.value).to.be.equal(0)
    wrapper.find('div.selector__symbol-hd').trigger('click')
    expect(wrapper.vm.count.value).to.be.equal(10)
  })
  it('根据传递的 stepValue ,每次点击 - 按钮应该使得计数 value 依次递减 stepValue, 递减到 0 后继续回变成 maxValue', () => {
    let propsData={count:{type:'元',value:10,stepValue:10,maxValue:100}}
    const wrapper=factory(propsData)
    wrapper.find('div.selector__symbol-ft').trigger('click')
    expect(wrapper.vm.count.value).to.be.equal(0)
    wrapper.find('div.selector__symbol-ft').trigger('click')
    expect(wrapper.vm.count.value).to.be.equal(100)
  })
  // it('测试触发递增事件后,父组件监听函数的参数获取值是否正确,类型为[type,value]', () => {
  //   let propsData={count:{type:'元',value:10,stepValue:10,maxValue:100}}
  //   const wrapper=factory(propsData)
  //   // 触发 DOM 上的递增点击事件,修改给父组件的函数参数返回值
  //   wrapper.find('div.selector__symbol-hd').trigger('click')
  //   // 触发父组件监听的事件，判断递增点击事件后，测试返回值是否一致
  //   wrapper.vm.$emit('chargerNumber',[wrapper.vm.count.type,wrapper.vm.count.value])
  //   expect(wrapper.emitted().chargerNumber[0][0][0]).to.be.equal('元')
  //   expect(wrapper.emitted().chargerNumber[0][0][1]).to.be.equal(10)
  // })
  // it('测试触发递减事件后,父组件监听函数的参数获取值是否正确,类型为[type,value]', () => {
  //   let propsData={count:{type:'元',value:10,stepValue:10,maxValue:100}}
  //   const wrapper=factory(propsData)
  //   // 触发 DOM 上的递减点击事件,修改给父组件的函数参数返回值
  //   wrapper.find('div.selector__symbol-ft').trigger('click')
  //   // 触发父组件监听的事件，判断递减点击事件后，测试返回值是否一致
  //   wrapper.vm.$emit('chargerNumbe',[wrapper.vm.count.type,wrapper.vm.count.value])
  //   expect(wrapper.emitted().chargerNumbe[0][0][0]).to.be.equal('元')
  //   expect(wrapper.emitted().chargerNumbe[0][0][1]).to.be.equal(0)
  // })
})
