import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import { fetchMessagesData } from '../util/api'

const App: React.FC<{}> = () => {

    useEffect(() => {
        fetchMessagesData()
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <img src="icon.png" />
        </div>
    )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
