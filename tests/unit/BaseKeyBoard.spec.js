import expect from 'expect'
import { shallowMount} from '@vue/test-utils'
import BaseKeyBoard from '@/components/BaseKeyBoard'
const factory = (values={})=>{
    return shallowMount(BaseKeyBoard,{
      propsData: {...values}
    })
}
describe('BaseKeyBoard.vue',()=>{
    it('测试 display ,display 在父组件传递为 true 时显示',()=>{
        let propsData={display:true}
        const wrapper = factory(propsData)
        expect(wrapper.vm.display).toBe(true)
    })
    it('测试 display ,display 在父组件传递为 false 时隐藏',()=>{
        let propsData={display:false}
        const wrapper = factory(propsData)
        expect(wrapper.vm.display).toBe(false)
    })
    it('点击 ul 下的每个 li 中的 span, 返回当前的文本内容,这里模拟依次点击，文本内容排列顺序为 1,2,..,9, ,del',()=>{
        const expected = ["1","2","3","4","5","6","7","8","9","","0","del"]
        let propsData={display:true}
        const wrapper = factory(propsData)
        let li = wrapper.findAll('span.btn')
        let arr = []
        for(let i = 0,len = li.length;i<len;i++){
            li.at(i).trigger('click')
            arr.push(wrapper.vm.value)
        }
        expect(arr).toEqual(expect.arrayContaining(expected))
    })
})