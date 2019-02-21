import React, { Component } from 'react';
import axios from 'axios';

class Add extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: null,
            email: null,
            password: null
        }
    }
    mengetik = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    tambahUser = (event) => {
        let toPost = new URLSearchParams()
        toPost.append('name', this.state.name)
        toPost.append('email', this.state.email)
        toPost.append('password', this.state.password)
        
        axios.post('http://localhost/api/users/add', toPost)
        .then(res => {
            document.location = '/'
        })

        event.preventDefault()
    }
    render() {
        return (
            <div>
                <h1>Tambah User Baru</h1>
                <form onSubmit={this.tambahUser}>
                    <div>Nama :</div>
                    <input type='text' name='name' onChange={this.mengetik.bind(this)} />
                    <div>Email :</div>
                    <input type='email' name='email' onChange={this.mengetik.bind(this)} />
                    <div>Password :</div>
                    <input type='password' name='password' onChange={this.mengetik.bind(this)} />
                    <br />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default Add;