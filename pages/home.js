import React, { useState } from 'react';
import dynamic from 'next/dynamic'
import styled from 'styled-components';

import Nav from '../components/common/nav';
import Content from '../components/common/content';

// 动态加载
const BlogPage = dynamic(import('../components/blog'));
const FunnyPage = dynamic(import('../components/funny'));
const TalkingPage = dynamic(import('../components/talking'));


const getTabPanel = function () {
    return {
        'blog': <BlogPage></BlogPage>,
        'funny': <FunnyPage></FunnyPage>,
        'talking': <TalkingPage></TalkingPage>
    }
}

export default function Home() {
    const [pageIndex, setPageIndex] = useState(0);
    const pageIndexMapName = () => {
        switch(pageIndex) {
            case 0:
                return 'blog';
            case 1:
                return 'funny';
            case 2:
                return 'talking';
        }
    }
    const articles = {
        'A': 'asd',
        'b': 'aaa',
        'vds': 'bbb',
    }
    return (
        <>
            <Nav onChangePage={setPageIndex}></Nav>
            <Content tabs={Object.keys(articles)}>
                {Object.values(articles)}
            </Content>
        </>
    );
}