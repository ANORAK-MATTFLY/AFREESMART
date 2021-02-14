import React from 'react'

import Lottie from 'react-lottie'

const LottieSuperObj = ({ objectProps }) => {
    return (
        <div>
            <Lottie options={objectProps} />
        </div>
    )
}

export default LottieSuperObj
