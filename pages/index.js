import config from '../config'
import Head from 'next/head'
import Link from 'next/link'

import Footer from '../components/Footer'

export default () => (
    <div>
        <Head>
            <title>{ config.title }</title>
        </Head>

        <div className='header'>
            <h1>hi!</h1>
        </div>

        <div className='content animated fadeIn'>
            <div className='top-bar'>
                <h2>I'm <strong>{ config.name }</strong></h2>
                {/* <h2>{ config.role } <strong>w/</strong> &gt;{config.yearsOfExp} years of experience</h2> */}
                <h3>目前是一名 <a target='_blank' rel='noopener noreferrer' href='https://www.baidu.com/s?wd=scuec'>SCUEC</a> 的大四学生，今年六月毕业。</h3>
                {/* <h4></h4> */}
                <h5>即将加入 <a target='_blank' rel='noopener noreferrer' href='https://cn.bing.com/search?q=网易'>网易</a> ，目前的小目标：成为一名优秀的前端开发工程师</h5>
            </div>

            <div className='mid-bar'>
                <div className='hashtags'>#frontend, #fake-backend, #ocd-fool</div>
                <div className='links'>
                    my <Link prefetch href='/projects'><a>projects</a></Link> |
                    my <Link prefetch href='/friends'><a>friends</a></Link>
                    {/* my <Link prefetch href='/projects'><a>projects</a></Link> | */}
                    {/* my <a target='_blank' rel='noopener noreferrer' href={config.site + 'static/Vladyslav_Hrytsenko.pdf'}>c.v.</a> */}
                </div>
            </div>

            <div className='link-bar'>
                <a href='mailto:vvzt666666@foxmail.com'><i className='fa fa-envelope'></i></a>
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/vvzt'><i className='fa fa-github'></i></a>
                {/* <a target='_blank' rel='noopener noreferrer' href='https://facebook.com/inlife360'><i className='fa fa-facebook-official'></i></a> */}
                {/* <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/inlife360'><i className='fa fa-twitter'></i></a> */}
                {/* <a target='_blank' rel='noopener noreferrer' href='https://angel.co/inlife360'><span className='smaller'><i className='fa fa-angellist'></i></span></a> */}
            </div>
        </div>

        <Footer />
    </div>
)
