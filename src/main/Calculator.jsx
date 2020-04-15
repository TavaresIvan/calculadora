import React, {Component} from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculator extends Component {

    constructor(props){
        super(props);

        this.state = {
            display: 0
        }
    }


    setDisplay = (value) => {
        this.setState({display: value})
    }

    render ()  {
        return(
            <div className="calculator">
                <Display value={this.state.display} />
                <Button label="AC" setDisplay={this.setDisplay}/>
                <Button label="/"  setDisplay={this.setDisplay}/>
                <Button label="7"  setDisplay={this.setDisplay}/>
                <Button label="8"  setDisplay={this.setDisplay}/>
                <Button label="9"  setDisplay={this.setDisplay}/>
                <Button label="*"  setDisplay={this.setDisplay}/>
                <Button label="4"  setDisplay={this.setDisplay}/>
                <Button label="5"  setDisplay={this.setDisplay}/>
                <Button label="6"  setDisplay={this.setDisplay}/>
                <Button label="-"  setDisplay={this.setDisplay}/>
                <Button label="1"  setDisplay={this.setDisplay}/>
                <Button label="2"  setDisplay={this.setDisplay}/>
                <Button label="3"  setDisplay={this.setDisplay}/>
                <Button label="+"  setDisplay={this.setDisplay}/>
                <Button label="0"  setDisplay={this.setDisplay}/>
                <Button label="."  setDisplay={this.setDisplay}/>
                <Button label="="  setDisplay={this.setDisplay}/>
            </div>
        )
    }
}