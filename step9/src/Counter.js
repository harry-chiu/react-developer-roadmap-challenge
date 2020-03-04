import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: '無名氏',
        }
    }

    render() {
        return (
            <div>
                請輸入姓名：
                <input
                    type="text" value={this.state.name}
                    onChange={(e) => { this.setState({ name: e.target.value }) }}
                />
                <br />
                <span>{`${this.state.name}點了 ${this.state.count} 下`}</span>
                <br />
                <button
                    onClick={() => { this.setState({ count: this.state.count + 1 }) }}
                >
                    點我加 1
                </button>
            </div>
        )
    }
}

export default Counter