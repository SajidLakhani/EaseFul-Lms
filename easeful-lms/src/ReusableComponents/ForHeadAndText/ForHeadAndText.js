import React from 'react'

function ForHeadAndText({ text, head }) {
    return (
        <div>
            <h1 style={{ color: '#302D3A', fontWeight: 'unset', fontSize: '35px' }}>{head}</h1>
            <p style={{ color: '#5F5982' }}>{text}</p>
        </div>
    )
}

export default ForHeadAndText
