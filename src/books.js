import React, {Component} from 'react';
import './App.css';
class Books extends Component{
    state = {
        hide: 'hidden',

    }

    
    hideBook = () =>{
        console.log('hello');
        if(this.state.hide === 'false'){
            this.setState({hide: 'hidden'})
        }else{
            this.setState({hide: 'false'})
        }
    }
    
    render(){
        let link = this.props.book.website;
        return(

        <div>
        <h3>ISBN: {this.props.book.isbn}</h3>

        <h1 onClick={this.hideBook}>Book Title: {this.props.book.title}</h1>
        <h3 className={this.state.hide} onClick={this.hideBook}>Subtitle: {this.props.book.subtitle}</h3>
        <h3 className={this.state.hide} onClick={this.hideBook}>Author: {this.props.book.author}</h3>
        <h2 className={this.state.hide} onClick={this.hideBook}>Published: {this.props.book.published}</h2>
        <h3 className={this.state.hide} onClick={this.hideBook}>Publisher: {this.props.book.publisher}</h3>
        <h3 className={this.state.hide} onClick={this.hideBook}>Pages: {this.props.book.pages}</h3>
        <p className={this.state.hide} onClick={this.hideBook}>Description: {this.props.book.description}</p>
        <a href= {link} className={this.state.hide} onClick={this.hideBook}>Website: {this.props.book.website}</a>

       </div>
)
    }
}

export default Books;