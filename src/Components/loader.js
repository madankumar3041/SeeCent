

import React, { Component } from 'react'

class loader extends Component {
    constructor(props) {

        super(props);

        this.state = { count: 0 };
    }
    componentDidMount() {
        setInterval(() => {
            const { count } = this.state;
            if (count === 3) {
                this.setState({ count: 0 })
            }
            else {
                this.setState({ count: count + 1 })
            }
        }, 250);
    }
    render() {
        return (
            <div>
               <div>
               <img class="logo-cent" src="/plant.svg"></img>
               </div>

                {[...Array(this.state.count)].map(item => <div className="loader">
            
                </div>)}

            </div>
        )
    }
}

export default loader;

