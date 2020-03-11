// 因為需使用 JSX 寫法，所以 import React
import React from 'react'
// enzyme 及 render Component 的 method : shallow
import Enzyme, { shallow } from 'enzyme'
// 將對應 React 版本的解析器導入
import Adapter from 'enzyme-adapter-react-16'

// 以該解析器提供給 Enzyme 做渲染 Component 的設置
Enzyme.configure({ adapter: new Adapter() })

// import 受測 Component 也就是此測試的 SUT
import Counter from './Counter'

// 使用 shallow 將 Component Render 給 counter
const counter = shallow(<Counter />)

describe('<Counter>', () => {
    test('Check initial state', () => {
        //以 state('key') 的方式取得 state 的值
        expect(counter.state('count')).toBe(0)
        expect(counter.state('name')).toBe('無名氏')
    })
})

test('After click event', () => {
    // 點擊 div 中的 button
    counter.find('div').find('button').simulate('click')
    // 點擊後判斷 count 有沒有多 1
    expect(counter.state('count')).toBe(1)
})

test('Check span display text', () => {
    // 確認 div 中 span 內的文字
    expect(counter.find('div').find('span').text()).toBe('無名氏點了 1 下')
})

test('Change value of name', () => {
    // 先確認 input 的 value 屬性
    expect(counter.find('div').find('input').props().value).toBe('無名氏')
    // setState
    counter.setState({ name: '神Ｑ超人' })

    // 觸發 onChange 
    counter.find('div').find('input').simulate('change', { target: { value: '神Ｑ超人', }, })

    // 確認 sate 及 span 中的文字是否改變
    expect(counter.find('div').find('input').props().value).toBe('神Ｑ超人')
    expect(counter.find('div').find('span').text()).toBe('神Ｑ超人點了 1 下')
})