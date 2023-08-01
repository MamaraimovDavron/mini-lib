import React, { Component } from 'react';
import Card from './Card';
import './library.css';

class Library extends Component{
    render(){
        return(
            <div className='container container-library'>
                <div className="row">
                    <Card 
                            name="The Hunger Games" 
                            urlImg="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052.jpg" 
                            author="Suzanne Collins"
                            price="$50"
                        />

                    <Card 
                            name="Harry Potter and the Order of the Phoneix" 
                            urlImg="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546910265i/2.jpg" 
                            author="J.K.Rowling"
                            price="$150"
                        />

                    <Card 
                            name="Pride and Prejudice" 
                            urlImg="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg" 
                            author="Jane Austen,Anna Quindlen"
                            price="$110"
                        />

                    <Card 
                            name="The Hunger Games" 
                            urlImg="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052.jpg" 
                            author="Suzanne Collins"
                            price="$50"
                        />


                    <Card 
                            name="The Hunger Games" 
                            urlImg="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052.jpg" 
                            author="Suzanne Collins"
                            price="$50"
                        />
                </div> 
            </div>
        )
    }
}

export default Library;