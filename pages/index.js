import Router from 'next/router'

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


import Intro from '../components/intro';

export default function (props) {
    useEffect(() => {
        // 预加载主页
        Router.prefetch('/dynamic');
        return () => {
        };
    }, []);
    return (
        <>
            <Intro></Intro>
        </>
    );
}