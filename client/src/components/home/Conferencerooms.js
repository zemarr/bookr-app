import React, { Fragment } from 'react';
import cfr from './home.module.css';
import Button from '../buttons/Buttons'

const Conferencerooms = () => {
    return (
        <Fragment>
            <div className={cfr.conferencesection}>
                <Heading name='Conference rooms' />
                <Smallrooms />
                <Bigrooms />
            </div>
        </Fragment>
    )
}

export const Heading = (props) => {
    return (
        <Fragment>
            <h2 className={cfr.sectionheading}>{props.name}</h2>
        </Fragment>
    )
}

export const Smallrooms = () => {
    return (
        <div className={cfr.rooms}>
            <section>
                <Info
                    name='Small Meeting rooms'
                    paragraph1='The small meeting room contains less people, it contains maximum of 9 persons and a big table.'
                    paragraph2='Small rooms section ere quite small but very comfortable. Each room has unique features that enable your way to the perfect meetings.'
                    paragraph3='The small meeting sector contains less people with'
                />
                <Button
                    name='Learn more'
                    className='learnmorebtn'
                />
            </section>
            <section className={cfr.roomthumbnails}>
                <Roomthumbnails />
            </section>
        </div>
    )
}

export const Bigrooms = () => {
    return (
        <div className={cfr.rooms}>
            <section className={cfr.roomthumbnails}>
                <Roomthumbnails />
            </section>
            <section>
                <Info
                    name='Big Meeting rooms'
                    paragraph1='The small meeting room contains less people, it contains maximum of 9 persons and a big table.'
                    paragraph2='Small rooms section ere quite small but very comfortable. Each room has unique features that enable your way to the perfect meetings.'
                    paragraph3='The small meeting sector contains less people with'
                />
                <Button
                    name='Learn more'
                    className='learnmorebtn'
                />
            </section>
        </div>
    )
}

const Info = (props) => {
    return (
        <Fragment>
            <h4>{props.name}</h4>
            <p>{props.paragraph1}</p>
            <p>{props.paragraph2}</p>
            <p>{props.paragraph3}</p>
        </Fragment>
    )
}

const Roomthumbnails = () => {
    return (
        <Fragment>
            <Thumbnail
                name='Marketing Room'
                className='marketingbg'
            />
            <Thumbnail
                name='Sales Room'
                className='salesbg'
            />
            <Thumbnail
                name='Board Room'
                className='boardbg'
            />
            <Thumbnail
                name='Tech Room'
                className='techbg'
            />
            <Button
                name='View more'
                className='viewmore'
            />
        </Fragment>
    )
}


const Thumbnail = (props) => {
    return (
        <Fragment>
            <div className={cfr[props.className]}>
                <div style={{
                    position: 'absolute',
                    backgroundColor: 'rgba(0, 0, 0, 0.46)',
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    margin: '0'
                }}>
                    <p style={{
                        fontSize: '1.4rem',
                        lineHeight: '25px',
                        fontWeight: '500',
                        color: 'white',
                        textAlign: 'center',
                        width: '130px',
                        position: 'absolute',
                        left: '34px',
                        top: '50px'
                    }}>{props.name}</p>
                    <Button
                        name='View details'
                        className='viewdetails'
                    />
                </div>
            </div>

        </Fragment>
    )
}

export default Conferencerooms;