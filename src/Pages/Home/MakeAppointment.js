import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className="flex justify-center items-center">
          <div className="flex-1 hidden lg:block">
            <img className="mt-[-150px]" src={doctor} alt="" />
          </div>

          <div className="flex-1 px-5">
            <h3 className="text-xl text-info font-bold">Appointment</h3>
            <h2 className="text-3xl py-5 text-white">Make an appointment today</h2>
            <p className="text-white pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aspernatur placeat repellat tenetur, dolor ratione eligendi iure molestiae eum corporis autem incidunt aliquid eius nam itaque harum optio? Quos consectetur suscipit ipsam, dolores illo maiores neque praesentium explicabo ut placeat!</p>
            <PrimaryButton>Get Started</PrimaryButton>
        </div>  
        </section>
    );
};

export default MakeAppointment;