import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  const msg = 'new message'

  const wrapper0 = mount(HelloWorld, {
    props: {
      msg
    }
  })

  it('renders props.msg when passed', () => {
    expect(wrapper0.text()).toMatch(msg)
  })

  const wrapper = mount(HelloWorld)
  it('renders the correct infomation', () => {
    expect(wrapper.html()).toContain('<div class="gitInfoText"></div>')
  })

  // it('has a stop button', () => {
  //   expect(wrapper.contains('button')).toBe(true)})
  var that = this
  test('time props', async () => {
    const time = 1000
    const wrapper = mount(HelloWorld, {
      props: {
        time
      }
    })

    await wrapper.setProps({ time: 3000 })

    expect(wrapper.vm.time).toBe(3000)
  })

  it('gitInfoText int', () => {
    expect(wrapper.vm.gitInfoText).toBe('')
  })
})
