import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useStore } from 'react-redux';

import HOC from '../hocs/proxyHOC';

const test = function() {
    const s = useSelector(store => store);
    console.log(s);
    return (
        <div id='world'>{ JSON.stringify(s) }</div>
    )
};

export default HOC(test);