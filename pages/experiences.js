import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import config from '../config'
import Footer from '../components/Footer'

const COMPS = [
    {
        name: '51信用卡',
        date: '2018/06/05 - 2018/09/20',
        jd: '前端开发（实习）',
        desc: 'Hybrid, Weex, H5, 快应用'
    },
    {
        name: '网易有道',
        date: '2019/07/01 - NOW',
        jd: '前端开发',
        desc: 'NEJ, Regular, React, Rx.js'
    }
];

export default () => (
    <div>
        <Head>
            <title>{ config.title } - Experience</title>
        </Head>

        <div className='header'>
            <div className='back'>
                <Link prefetch href='/'><a><i className='fa fa-angle-left'></i> back</a></Link>
            </div>

            <h1>experiences:</h1>
        </div>

        <div className='content animated fadeIn'>
            <div id='projects'>

            <ul>
                {
                    COMPS.map(comp => (
                        <li>
                            <h3>{ comp.name } <time style={{ fontSize: 'medium' }}>· { comp.date }</time></h3>
                            <p style={{ lineHeight: '130%', textIndent: '2rem', }}>{ comp.jd }<span style={{ fontSize: '14px' }}> - { comp.desc }</span></p>
                        </li>
                    ))
                }
            </ul>

            </div>
        </div>

        <Footer />
    </div>
)
