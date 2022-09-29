import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({date}) => {

    const [services, setServices] = useState([]);

    const [treatment, setTreatment] = useState(null);
    const handleTreatment = (treatment) =>{
        setTreatment(treatment,)
    }
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <h4 className="text-xl text-accent text-center">Available appointment on: {format(date, 'PP')}</h4>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                 {
                    services.map(service => <Service key={service._id} service={service}  handleTreatment={handleTreatment} treatment={treatment}></Service>)
                }
            </div>
            {
                    treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;