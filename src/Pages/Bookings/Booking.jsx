import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import BookingRow from './BookingRow';

const Booking = () => {
    const {user} = useContext(AuthContext);
    const [booking, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data));
        

    },[url]);


    const handleDelete = id =>{
        const proceed = confirm('Are You sure you want to delete');
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successful');
                    const remaining = booking.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
      }
      const handleBookingConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'confirm'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = booking.filter(booking => booking._id !==id);
                const updated = booking.find( booking => booking._id ===id);
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining];
                setBookings(newBookings); 

            }
        })
      }
    return (
        <div>
            <h2 className="text-5xl">Your bookings : {booking.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Services name</th>
        <th>Date</th>
        <th>price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
   {
    booking.map(booking =><BookingRow
    key={booking._id}
    booking={booking}
    handleDelete={handleDelete}
    handleBookingConfirm={handleBookingConfirm}
    ></BookingRow>)
   }
    </tbody>   
  </table>
</div>
        </div>
    );
};

export default Booking;