import React, { Component, useEffect } from 'react';
import axios from "axios";
import cookie from 'react-cookies';
import Swal from 'sweetalert2'

class seating extends React.Component {
  
    constructor(props) {
      super(props);
        this.state = {
        seat: [],
        seatAvailable: [],
        seatReserved: [],
      }
    }

    componentDidMount() {
      this.loadSeat();
    }

    loadSeat = async () => {
      axios.post('/api/LoginForm?type=SeatOut')
      .then((response) => {this.setState({ seat : response.data.json })


      // {this.setState({ seat : response.data.json })
      
        // for(var l=0; l<this.state.seatReserved.length ; l++){
        //   this.setState({
        //     seatReserved : this.state.seatReserved.concat(this.state.seatReserved[l].id)
        //   });
        // }
    })
    .catch(console.log)
    }

    onClickData(seat) {
    
      var name = sessionStorage.getItem('username');
      let update_flag = 0;

      for(var l=0; l<this.state.seat.length ; l++){
        if(this.state.seat[l].name == name){
          axios.post('/api/LoginForm?type=Seatupdate', {
            is_Name: name,
            is_Seat: seat
        })
        .then(response => console.log(response.data.json))
        .then(update_flag = 1)
        break;
        }
      }

    if(update_flag == 0){                                                                                                                                                                                                                                     
      axios.post('/api/LoginForm?type=Seatinput', {
        is_Name: name,
        is_Seat: seat
    })
    .then(response => console.log(response.data.json))
    }
    

    axios.post('/api/LoginForm?type=SeatOut')
    .then((response) => {this.setState({ seat : response.data.json }, ()=>{this.loadSeat();})})

    }

    render() {
      console.log('지금이니!');
      return (
        <div>
          <DrawGrid 
            seat = { this.state.seat }
            available = { this.state.seatAvailable }
            reserved = { this.state.seatReserved }
            onClickData = { this.onClickData.bind(this) }
            />
        </div>
      )
    }
  }
  
  class DrawGrid extends React.Component {

    rendering=(name)=> {
      let result = 0;
      
      if(name != null){
        result = 1;
      }
      return result;
    }

    render() {
      return (
         <div className="container">
          <h2></h2>
          <table className="grid">
            <tbody>
                <tr>
                  { this.props.seat.map( row =>
                    <td 
                      className={
                        this.rendering(row.name) > 0? 'reserved': 'available'}
                      key={row} onClick = {e => this.onClickSeat(row.id)}>
                        {row.id}
                        {row.name}
                       </td>) }
                </tr>
            </tbody>
          </table>
                    
          <AvailableList available = { this.props.available } />
          <ReservedList reserved = { this.props.reserved } />
         </div>
      )
    }
    
    onClickSeat(seat) {
      this.props.onClickData(seat);
  }
  }
  
  class AvailableList extends React.Component {
    render() {
      const seatCount = this.props.available.length;
      return(
        <div className="left">
          <h4>Available Seats: ({seatCount == 0? 'No seats available' : seatCount})</h4>
          <ul>
            {this.props.available.map( res => <li key={res} >{res}</li> )}
          </ul>
        </div>
      )
    }
  }
  
  class ReservedList extends React.Component {
    render() {
      return(
        <div className="right">
          <h4>Reserved Seats: ({this.props.reserved.length})</h4>
            { this.props.reserved.map(row =>
                <td 
                key={row}>
                  {row.id}
                 </td>) }
        </div>
      )
    }
  }
  export default seating;

