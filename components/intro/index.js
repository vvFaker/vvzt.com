
import React, { useRef, useState } from 'react'
import {} from 'rxjs/operators';
import posed from 'react-pose';
import styled from 'styled-components/macro';

import EaseInHoc from '../../hocs/ease-in-hoc';


const Intro =  function () {
    return (
        <div>
            这里是测试文字
        </div>
    )
}

export default EaseInHoc(Intro);
