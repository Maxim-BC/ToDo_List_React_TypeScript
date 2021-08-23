import React from "react";
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laboriosam repellendus omnis a praesentium quisquam debitis minus ullam, perspiciatis laudantium quidem, quaerat consequatur. Quos mollitia magnam, aliquid voluptates id laboriosam!</p>
            <button className="btn" onClick={() => history.push('/')}>Обратно к списку дел</button>
        </>
    )
}