import React from 'react';
import styles from './Services.module.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from "../../Data/services_data.js";
import arrow_icon from '../../assets/arrow_icon.svg'

const Sevices = () => {
    return (
        <div id='services' className={styles['services']}>
            <div className={styles['services-title']}>
                <h1>My services</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className={styles['services-container']}>
                {Services_Data.map((service, index) => {
                    return (
                        <div className={styles['services-format']} key={index}>
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>
                            {/*<div className={styles['services-readmore']}>*/}
                            {/*    <p>Read More</p>*/}
                            {/*    <img src={arrow_icon} alt=''/>*/}
                            {/*</div>*/}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Sevices;