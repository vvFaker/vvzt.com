
import React, { useRef, useState } from 'react'
import {} from 'rxjs/operators';
import posed from 'react-pose';
import styled from 'styled-components';

import EaseInHoc from '../hocs/ease-in-hoc';


const Funny =  function () {
    return (
        <div>
            这里是测试文字
        </div>
    )
}

const FunnyPage = (Funny);
// const FunnyPage = EaseInHoc(Funny);

export default FunnyPage;
