import React, { Fragment } from 'react';
import hero from './home.module.css';
import Button from '../buttons/Buttons'

const Hero = () => {
    return (
        <Fragment>
            <div className={hero.background}>
                <div className={hero.overlay}>
                    <Heading
                        heading='Bookr'
                        subheading='Fastest way to book a conference /meeting room at a very convenient time'
                    />
                </div>
            </div>
        </Fragment>
    )
}

const Heading = (props) => {
    return (
        <Fragment>
            <section className={hero.heading}>
                <h3>{props.heading}</h3>
                <section>
                    <p>{props.subheading}</p>
                </section>
                <Button
                    name='Book room'
                    className='bookroom'
                    link='/meetingrooms'
                />
            </section>
        </Fragment>
    )
}

export default Hero