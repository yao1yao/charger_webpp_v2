import expect from 'expect'
import { shallowMount} from '@vue/test-utils'
import ChargerMessage from '@/components/ChargerMessage'

const factory = (values={})=>{
    return shallowMount(ChargerMessage,{
      propsData: {...values}
    })
  }

describe('ChargerMessage',()=>{
    it('渲染正确的标记',()=>{
        const wrapper = factory({devicePower:3.30,serviceRate:0.5,energyRate:0.8262})
        expect(wrapper.html()).toContain('<span>功率</span><strong>3.3 kw/h</strong>')
        expect(wrapper.html()).toContain('<span>服务费</span><strong>0.5 元/度</strong>')
        expect(wrapper.html()).toContain('<span>电费</span><strong>0.8262 元/度     </strong>')
    })
    it('测试数据是否赋值正常',()=>{
        const wrapper = factory({devicePower:3.30,serviceRate:0.5,energyRate:0.8262})
        expect(wrapper.vm.devicePower).toEqual(3.30)
        expect(wrapper.vm.serviceRate).toEqual(0.5)
        expect(wrapper.vm.energyRate).toEqual(0.8262)
    })
})