import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player'

const LootiePlayer = (props) => {
    return (
        <Player
            autoplay
            loop
            src={props.url}
            style={{ height: 'auto', width: '90%' }}
        >
            <Controls visible={false}></Controls>
        </Player>
    )
}

export default LootiePlayer
