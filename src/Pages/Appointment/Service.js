import React, { useState } from 'react';

const Service = ({service, handleTreatment}) => {
    const {name, slots} = service;
    return (
        <div>
            <div className="card lg:max-w-lg shadow-xl text-center">
            <div className="card-body">
                <h2 className=" text-gray-600 text-center text-xl">{name}</h2>
                <p className="text-gray-500">
                    {
                        slots.length ? <span>{slots[0]}</span> : <span className="text-red-500">Try another date</span>
                    }
                </p>

                <p className="text-gray-500">{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    {/* if treatment value exists then open modal */}
                    
                <div className="card-actions justify-center">
                <label onClick={()=> handleTreatment(service)} disabled = {slots.length === 0} htmlFor="booking-modal" className="btn modal-button btn btn-accent text-white uppercase">Book Appointment</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Service;