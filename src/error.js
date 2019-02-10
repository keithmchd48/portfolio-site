import React, {Component} from 'react'

class Error extends Component{
    render(){
        return(
            <div id="error-body">
                <div id="notfound">
                    <div class="notfound">
                        <div class="notfound-404">
                            <h1>404</h1>
                            <h2>Page not found</h2>
                        </div>
                        <a href="/">Back To Home</a>
                    </div>
                </div>    
            </div>
        )
    }
}

export default Error