import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import config from '../config'
import Footer from '../components/Footer'

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
    <li>
      <h3>51信用卡 <time style={{ fontSize: 'medium' }}>· 2018/06/05 - 2018/09/20</time></h3>
      <p style={{ lineHeight: '130%' }}>前端开发（实习）<br /> Hybrid, Weex, H5, 快应用</p>
    </li>
</ul>
            </div>
        </div>

        <Footer />
    </div>
)
