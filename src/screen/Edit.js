import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            iduser: props.match.params.iduser, //untuk ngambil
            loaded: {
                name: null
            },
            toChange: {
                name: null,
                email: null
            }
        }
    }
    componentDidMount() {
        let data = new FormData()
        data.append('id', this.state.iduser)

        axios.post('http://localhost/api/users/info', data)
        .then(res => {
            const data = res.data
            this.setState({
                loaded: {
                    name: data.name
                },
                toChange: {
                    name: data.name,
                    email: data.email
                }
            })
            console.log(data.name)
        })
    }
    mengetik = (event) => {
        if(event.target.name == "name") {
            this.setState({
                toChange: {
                    name: event.target.value,
                    email: this.state.toChange.email
                }
            })
        }else {
            this.setState({
                toChange: {
                    name: this.state.toChange.name,
                    email: event.target.value
                }
            })
        }
    }
    ubah = (evt) => {
        let data = new FormData()
        data.append('id', this.state.iduser)
        data.append('name', this.state.toChange.name)
        data.append('email', this.state.toChange.email)
        
        console.log(this.state.toChange.name)
        console.log(this.state.toChange.email)
        evt.preventDefault()
        
        axios.post('http://localhost/api/users/edit', data)
        .then(res => {
            if(res.data == "200") {
                document.location = '../'
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Edit Datanya {this.state.loaded.name}</h1>
                <form onSubmit={this.ubah}>
                    <div>Nama :</div>
                    <input type="text" name="name" onChange={this.mengetik} value={this.state.toChange.name} />
                    <div>Email :</div>
                    <input type="email" name="email" onChange={this.mengetik} value={this.state.toChange.email} />
                    <br />
                    <button>Ubah</button>
                </form>
            </div>
        )
    }
}

export default Edit;

// import React, { Component } from 'react';

// class Edit extends Component {
//     render() {
//         return (
//             <h1>Edit User</h1>
//         )
//     }
// }

// export default Edit;