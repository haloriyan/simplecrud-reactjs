import React, { Component } from 'react';
import axios from 'axios';

class All extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost/api/users/show')
        .then(res => {
            const users = res.data
            this.setState({ users })
        })
    }
    hapus = (evt) => {
        window.location = './delete/' + evt.target.value
    }
    ubah = (evt) => {
        window.location = './edit/' + evt.target.value
    }
    render() {
        return (
            <div>
                <h1>Semua User</h1>
                <ul>
                    {
                        this.state.users.map(user =>
                            <li>{user.name} 
                                <button onClick={this.ubah} value={user.iduser}>Ubah</button>
                                <button onClick={this.hapus} value={user.iduser}>X</button>
                            </li>
                        )
                    }
                </ul>
                <a href="./add">Tambah User Baru</a>
            </div>
        )
    }
}

export default All;