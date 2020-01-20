// genius information component

import React, {Component} from 'react'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import AvatarSelector from '../../components/avatar-selector/avatar-selector'
import {updateUser} from "../../redux/actions";

class GeniusInfo extends Component {
    state = {
        avatar: '',
        desc: '',
        title: ''
    }

    setAvatar=(avatar)=>{
        this.setState({avatar})
    }

    handleChange=(name, val)=>{
        this.setState({[name]: val})
    }

    render () {
        // jump to genius page if complete information
        const {user} = this.props
        if(user.avatar){
            return <Redirect to='/genius'/>
        }
        return (
            <div>
                <NavBar>Genius Information</NavBar>
                <AvatarSelector setAvatar={this.setAvatar}/>
                <InputItem onChange={val=>this.handleChange('title', val)}>Position: </InputItem>
                <TextareaItem title='Resume: '
                            rows={3}
                            onChange={val=>this.handleChange('desc', val)}/>
                <Button type='primary' onClick={()=>this.props.updateUser(this.state)}>Save</Button>
            </div>
        )
    }
}

export default connect(
    state=>({user: state.user}),
    {updateUser}
)(GeniusInfo)
