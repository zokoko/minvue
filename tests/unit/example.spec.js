import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {

  const msg = 'new message'    

  const wrapper0 = shallowMount(HelloWorld, {
    props: { msg }
  })

  it('renders props.msg when passed', () => {
    
    expect(wrapper0.text()).toMatch(msg)

  })

  const wrapper = shallowMount(HelloWorld)
  it('renders the correct infomation', () => {
    expect(wrapper.html()).toContain('<div class="gitInfoText"></div>')})



})
