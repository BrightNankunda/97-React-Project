import React, { Component } from 'react';
import Like from './common/like';
 
class Movies extends Component {
    state= {
        movies: [
            {
                id: 1,
                title: 'Merlin',
                genre: 'Action',
                stock: 5,
                rating: '9.5',
                liked: true
                },
                {
                   id: 2,
                   title: 'Legend Of the Seeker',
                   genre: 'Action',
                   stock: 4,
                   rating: '8.8', 
                   liked: false
                },
                {
                    id: 3,
                    title: 'Iron Fist',
                    genre: 'Action',
                    stock: '6',
                    rating: '9.8',
                    liked: false
                },
                {
                    id: 4,
                    title: 'Succession',
                    genre: 'Family',
                    stock: '2',
                    rating: '8.1',
                    liked: true
                },
                {
                    id: 5,
                    title: 'Knights',
                    genre: 'Adventure',
                    stock: 4,
                    rating: '8.5',
                    liked: false
                },
                {
                    id: 6,
                    title: 'Dare Devil',
                    genre: 'Crime',
                    stock: 9,
                    rating: '9.9',
                    liked: true
                },
                {
                    id: 7,
                    title: 'Hanna',
                    genre: 'Action',
                    stock: 3,
                    rating: '9.2',
                    liked: false
                },
                {
                    id: 8,
                    title: 'Warrior Nun',
                    genre: 'Action',
                    stock: 6,
                    rating: '9.0',
                    liked: false
                },
                {
                    id: 9,
                    title: 'Shooter',
                    genre: 'Crime',
                    stock: 6,
                    rating: '9.6',
                    liked: false
                },
                {
                    id: 10,
                    title: 'Last Kingdom',
                    genre: 'Adventure',
                    stock: 6,
                    rating: '9.8',
                    liked: false
                },
                
            ]
    }

    handleDelete = (id) => {
        const movies = this.state.movies.filter(movie => movie.id != id);
        this.setState({movies})
        console.log(id);
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie)
        movies[index] = { ...movies[index] }
        movies[index].liked = !movies[index].liked
        this.setState({movies})
    }

    render() { 
        const count =this.state.movies.length;
        if(count === 0) return <div><p className="text-center text-danger">There are NO Saved Series!</p></div>
        return (
            <div>
            <div>
                <h3 className="text-center text-success">Showing {count} Series</h3>
            </div>
                <table className="table hovered striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th>Like</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.movies.map(movie => (
                        <tr key={movie.id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre}</td>
                            <td>{movie.stock}</td>
                            <td>{movie.rating}</td>
                            <td><Like liked={movie.liked} onLike={() => this.handleLike(movie)}/></td>
                            <td>
                                <button onClick={() => this.handleDelete(movie.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                        
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Movies;