import React from 'react'

export default function Header(Component) {
    return function() {
        return (
            <>
                <Component></Component>
            </>
        )
    }
}
