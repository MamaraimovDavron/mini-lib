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
                            name="To Kill a Mockingbird" 
                            urlImg="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg" 
                            author="Harper Lee"
                            price="$250"
                        />


                    <Card 
                            name="The Book Thief" 
                            urlImg="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1522157426i/19063.jpg" 
                            author="Markus Zusak"
                            price="$130"
                        />

                    <Card 
                            name="Twilight" 
                            urlImg="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361039443i/41865.jpg" 
                            author="Stephenie Meyer"
                            price="$230"
                        />

                    <Card 
                            name="Animal Farm" 
                            urlImg="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1325861570i/170448.jpg" 
                            author="George Orwell, Russel Baker"
                            price="$130"
                        />

                    <Card 
                            name="The Hobbit and The Lord of the Rings" 
                            urlImg="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1656625315i/30.jpg" 
                            author="J.R.R. Tolkien"
                            price="$160"
                        />
                </div> 
            </div>
        )
    }
}

export default Library;