import React, { Component } from "react";
import './card.css';

class Card extends Component{
    render(){
        return(
            <div className="col-3">
                <div className="card">
                <div className="card-header">
                    <h4 className='name'>{this.props.name}</h4>
                </div>
                <div className="card-body">
                    <img src={this.props.urlImg} alt="" />
                </div>
                <div className="card-footer">
                    <h4 className='author'>{this.props.author}</h4>
                    <h5 className='price'>{this.props.price}</h5>
                </div>
            </div>
            </div>
        )
    }
}

export default Card;