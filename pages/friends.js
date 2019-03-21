import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import config from '../config'
import Footer from '../components/Footer'

export default () => (
    <div>
        <Head>
            <title>{ config.name } - Friends</title>
        </Head>

        <div className='header'>
            <div className='back'>
                <Link prefetch href='/'><a><i className='fa fa-angle-left'></i> back</a></Link>
            </div>

            <h1>friends:</h1>
        </div>

        <div className='content animated fadeIn'>
            <div id='projects'>

<ul>
    <li>
      <a href="https://tangbohao.github.io/"rel="noopener noreferrer" target="_blank">tang的博客</a>
    </li>
    <li>
      <a href="https://azhizhizhizhizhi.github.io/"rel="noopener noreferrer" target="_blank">经验直的博客</a>
    </li>
    <li>
      <a href="https://lsj9757.github.io/"rel="noopener noreferrer" target="_blank">点点点点</a>
    </li>
    {/* <li>
      <p><strong>librg</strong> <br />
      <strong>type:</strong> open-source, team<br />
      <strong>year:</strong> 2017-2018 <br />
      <strong>link:</strong> <a href="https://github.com/librg/librg"rel="noopener noreferrer" target="_blank">https://github.com/librg/librg</a> <br />
      <strong>description:</strong> Pure C99 game networking library for building simple and elegant cross-platform mmo client-server solutions.<br />
      <strong>responsibilities:</strong> Development.<br />
      <strong>used technologies:</strong> C, nodejs, git</p>
    </li> */}
</ul>
            </div>
        </div>

        <Footer />
    </div>
)
