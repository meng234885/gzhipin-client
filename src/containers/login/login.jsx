import React, {Component} from 'react'
import {NavBar,Button,List,InputItem,WingBlank, WhiteSpace} from 'antd-mobile'
import Logo from '../logo/logo'


export default class Login extends Component {
    state={
        username:'',
        password:''
    }
    handleChange = (type,value) => {
        this.setState({
            [type]:value
        })
    }
    denglu=()=>{
        const { username, password} =this.state
        console.log(username, password);
    }
    toRegister=()=>{
        this.props.history.replace('./register')
    }
    render () {
        return (
            <div>
                <NavBar>硅谷直聘</NavBar>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem onChange={val =>this.handleChange('username',val) }>账&nbsp;&nbsp;&nbsp;号:</InputItem>
                        <InputItem onChange={val =>this.handleChange('password',val) }>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.denglu}>登&nbsp;&nbsp;&nbsp;录</Button>
                    <WhiteSpace />
                    <Button onClick={this.toRegister}>没有账户请去注册</Button>
                </WingBlank>

            </div>
        )
    }
}