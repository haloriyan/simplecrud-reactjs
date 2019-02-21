import React, { Component } from 'react';
import axios from 'axios';

class Delete extends Component {
    constructor(props) {
        super(props)

        this.state = {
            iduser: props.match.params.iduser
        }
    }
    componentDidMount() {
        this.deleteUser()
    }
    deleteUser = () => {
        let toDelete = new FormData()
        toDelete.append('id', this.state.iduser)

        axios.post('http://localhost/api/users/delete', toDelete)
        .then(res => {
            document.location = '../'
        })
    }
    render() {
        return (
            <div>
                <h1>Hapus user {this.state.iduser}</h1>
            </div>
        )
    }
}

export default Delete;