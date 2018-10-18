import expect from 'expect'
import { shallowMount} from '@vue/test-utils'
import ChargerModal from '@/components/ChargerModal'

const factory = (values={})=>{
    return shallowMount(ChargerModal,{
      propsData: {...values}
    })
  }
  describe('ChargerMessage',()=>{
    describe('data is valid?',()=>{
        it('type is of type string', () => {
            let propsData={type:123123}
            const wrapper=factory(propsData)
            expect(wrapper).toNotHaveBeenCalled(expect.stringContaining('[Vue warn]: Invalid prop'))
          })
    })
})