import expect from 'expect'
import { shallowMount} from '@vue/test-utils'
import ChargerInfo from '@/components/ChargerInfo'

const factory = (values={})=>{
    return shallowMount(ChargerInfo,{
      propsData: {...values}
    })
  }
//   props: ['address','deviceId','status','chargershow','serviceMoney','energyMoney','mapPosition'],

describe('ChargerInfo',()=>{
    it('渲染正确的标记',()=>{
        const wrapper = factory({address:'深圳南山区西丽凯达尔大厦 B 座',deviceId:4,status:2,chargershow:true,serviceMoney:0.5,energyMoney:0.8262,mapPosition:[113.93041,22.53332]})
        expect(wrapper.html()).toContain('<span>深圳南山区西丽凯达尔大厦 B 座</span>')
        expect(wrapper.html()).toContain('<span>4</span>')
        expect(wrapper.html()).toContain('<span>电桩充电中</span>')
        expect(wrapper.html()).toContain('<span>0.5 元/度 </span>')
        expect(wrapper.html()).toContain('<span>0.8262 元/度</span>')
    })
    it('按钮点击事件',()=>{
        const wrapper = factory({address:'深圳南山区西丽凯达尔大厦 B 座',deviceId:4,status:2,chargershow:true,serviceMoney:0.5,energyMoney:0.8262,mapPosition:[113.93041,22.53332]})
        wrapper.find('button.charger-info__nav').trigger('click')
        expect(wrapper.vm.address).toBe('深圳南山区西丽凯达尔大厦 B 座')
        expect(wrapper.vm.lng).toBe(113.93041)
        expect(wrapper.vm.lat).toBe(22.53332)
    })
    it('组件显示测试,chargershow 为 true ',()=>{
        const wrapper = factory({address:'深圳南山区西丽凯达尔大厦 B 座',deviceId:4,status:2,chargershow:true,serviceMoney:0.5,energyMoney:0.8262,mapPosition:[113.93041,22.53332]})
        expect(wrapper.vm.chargershow).toBe(true)
    })
    it('组件隐藏测试,chargershow 为 false ',()=>{
        const wrapper = factory({address:'深圳南山区西丽凯达尔大厦 B 座',deviceId:4,status:2,chargershow:false,serviceMoney:0.5,energyMoney:0.8262,mapPosition:[113.93041,22.53332]})
        expect(wrapper.vm.chargershow).toBe(false)
    })
})