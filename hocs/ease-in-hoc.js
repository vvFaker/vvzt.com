import React, { useState, useEffect, useCallback } from 'react'
import { Observable, fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';
import posed from 'react-pose';
import styled from 'styled-components/macro';

export default function EaseInHoc(WrappedComponent) {
    const EaseInWrapper = posed.div({
        visible: {
            opacity: 1,
        },
        hidden: {
            opacity: 0,
        }
    });
    const StyledEaseInWrapper = styled(EaseInWrapper)`
    `;
    return function(props) {
        const [visible, setVisible] = useState(true);
        return (
            <StyledEaseInWrapper pose={visible ? 'visible' : 'hidden'}>
                <WrappedComponent {...props}></WrappedComponent>
            </StyledEaseInWrapper>
        )
    }
}
