import React, { Component } from 'react';
import './Challenge.css';
import {Button} from 'react-bootstrap';

export class Challenge extends Component {
         constructor(props) {
           super(props);
           this.state = {
             planetas: [],
             filmes: [],
             titulos: []
           };
         }

         componentDidMount() {
           this.refreshList();
         }

         refreshList() {
           let randomNumber = Math.floor(Math.random() * 61 + 1);
           let apiUrl = "https://swapi.co/api/planets/" + randomNumber;
           /*let apiUrl = 'https://swapi.co/api/planets/2'*/

           fetch(apiUrl)
             .then(response => response.json())
             .then(data => {
               this.setState({ planetas: data });
               this.setState({ filmes: data.films });

               this.state.filmes.map(film =>
                 fetch(film)
                   .then(response => response.json())
                   .then(data => {
                     let titulos = this.state.titulos;
                     titulos.push(data.title);
                     this.setState({ titulos: titulos });
                   })
               );
             });
         }

         atualizaPagina() {
           window.location.reload();
         }

         render() {

          let msgFilmes;
          if (this.state.titulos.length < 1) {
            msgFilmes = <p>No Movie Featured!</p>
          } 

           return (
             <div className="App">
               <div className="divbtn">
               <Button onClick={this.atualizaPagina} variant="outline-warning">Random Planet</Button>
               </div>
               

               <div className="fade" />

               <section className="star-wars">
                 <div className="crawl">
                   <div className="title">
                     <h1>Planet Information:</h1>
                     <p>Name: {this.state.planetas.name}</p>
                     <p>
                      Climate: {this.state.planetas.climate}
                   </p>
                   <p>
                     Terrain: {this.state.planetas.terrain}
                   </p>
                    <br></br>
                   <p>
                     Feature Films:
                   </p>
                   <br></br>
                   <p>{msgFilmes}</p>
                   {this.state.titulos.map(item => (
                        <p key={item}>{item}</p>
                    ))}
                   </div>

                   
                 </div>
               </section>
             </div>
           );
         }
       }