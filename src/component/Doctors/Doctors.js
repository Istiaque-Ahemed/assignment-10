import React from 'react';
import './Doctors.css';
import Doctor1 from '../../images/doctors/cheerful-male-doctor-white-gown-portrait_53876-108640.jpg'
import Doctor2 from '../../images/doctors/female-doctor-showing-support-hand-gesture_53876-129944.jpg'
import Doctor3 from '../../images/doctors/female-doctor-with-presenting-hand-gesture_53876-105106.jpg'
import Doctor4 from '../../images/doctors/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_1258-57233.jpg'

const Doctors = () => {
    return (
        <>
        
            <h2 className="doc-hedr">Our <b>Doctors</b></h2>
            <hr />
            <div className="doctors">

                <div>
                    <div className="inner"><img src={Doctor1} alt="" /></div>
                    <h3>Prof. Dr. Md. Ruhul Amin</h3>
                    <p>BDS DAND DDS MS</p>
                </div>
                <div>
                <div className="inner"><img src={Doctor2} alt="" /></div>
                    <h3>Dr. Rabea Khatun</h3>
                    <p>BDS DAND DDS MS</p>
                </div>
                <div>
                <div className="inner"><img src={Doctor3} alt="" /></div>
                    <h3>Dr. Sharmin Sultan</h3>
                    <p>BDS DAND DDS MS</p>
                </div>
                <div>
                <div className="inner"><img src={Doctor4} alt="" /></div>
                    <h3>Dr. Md. Abu Bakar Shah</h3>
                    <p>BDS DAND DDS MS</p>
                </div>
            </div>
        </>
    );
};

export default Doctors;