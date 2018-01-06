import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AutolinkerWrapper from '../AutolinkerWrapper'
import Autolinker from 'autolinker'

configure({ adapter: new Adapter() })

describe('AutolinkerWrapper', () => {

  it('should render without throwing an error', () => {
    mount(<AutolinkerWrapper />).unmount()
  })

  it('should use a div as the default tag', () => {
    const wrapper = mount(<AutolinkerWrapper />)
    expect(wrapper.childAt(0).name()).toEqual('div')
    wrapper.unmount()
  })

  it('should use the tag as specified in the tagName property', () => {
    const wrapper = mount(<AutolinkerWrapper tagName="span" />)
    expect(wrapper.childAt(0).name()).toEqual('span')
    wrapper.unmount()
  })

  it('should add the extra properties to the wrapper element', () => {
    const wrapper = mount(<AutolinkerWrapper tooltip="test tooltip" />)
    expect(wrapper.childAt(0).prop('tooltip')).toEqual('test tooltip')
    wrapper.unmount()
  })

  it('shouldn\'t add the tagName, text and options properties to the wrapper element', () => {
    const wrapper = mount(<AutolinkerWrapper tagName="div" text="test" options={{stripPrefix: false}} />)
    expect(wrapper.childAt(0).prop('tagName')).toBeUndefined()
    expect(wrapper.childAt(0).prop('text')).toBeUndefined()
    expect(wrapper.childAt(0).prop('options')).toBeUndefined()
    wrapper.unmount()
  })

  it('should invoke autolinker with its text property', () => {
    const link = jest.spyOn(Autolinker, 'link')
    const wrapper = mount(<AutolinkerWrapper text="test" />)
    expect(link).toHaveBeenLastCalledWith('test')
    wrapper.unmount()
  })

  it('should invoke autolinker with its options property', () => {
    const link = jest.spyOn(Autolinker, 'link')
    const options = {newWindow: false}
    const wrapper = mount(<AutolinkerWrapper text="test" options={options} />)
    expect(link).toHaveBeenLastCalledWith('test', options)
    wrapper.unmount()
  })

  it('should invoke autolinker when the text or options properties change', () => {
    const link = jest.spyOn(Autolinker, 'link')
    const wrapper = mount(<AutolinkerWrapper text="test1" />)
    expect(link).toHaveBeenLastCalledWith('test1')
    wrapper.setProps({text: 'test2'})
    expect(link).toHaveBeenLastCalledWith('test2')
    wrapper.unmount()
  })

  it('should not invoke autolinker when some extra property changes', () => {
    const link = jest.spyOn(Autolinker, 'link')
    const wrapper = mount(<AutolinkerWrapper tooltip="test tooltip" />)
    link.mockClear()
    wrapper.setProps({tooltip: 'test tooltip 2'})
    expect(link).not.toHaveBeenCalled()
    wrapper.unmount()
  })
})
