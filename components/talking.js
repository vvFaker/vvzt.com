
import React, { useRef, useState } from 'react'
import {} from 'rxjs/operators';
import posed from 'react-pose';
import styled from 'styled-components';

import EaseInHoc from '../hocs/ease-in-hoc';


const Share =  function () {
    return (
        <div>
            这里是测试文字
        </div>
    )
}

const SharePage = (Share);
// const SharePage = EaseInHoc(Share);

export default SharePage;
