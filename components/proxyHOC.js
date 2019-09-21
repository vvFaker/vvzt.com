
import React, { useEffect, useCallback, useRef } from 'react'

export default function proxyHOC(WrappedComponent) {
    return function(props) {
        return (
            <>
                <header>1</header>
                <WrappedComponent {...props}></WrappedComponent>
            </>
        )
    }
}
