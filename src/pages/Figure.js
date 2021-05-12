import React, {useState} from 'react'

const Figure = () => {

const [coordinates, setCoordinates] = useState({x: 0, y: 40})

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function newPosition (oldTop, oldLeft, width, height) {
        let range = 5;
        let newTop = getRandomInt(0, height);
        let newLeft = getRandomInt(0, width);
        if ( ((oldTop - range) < newTop && (oldTop + range) > newTop) ||
            ((oldLeft - range) < newLeft && (oldLeft + range) > newLeft))
            return newPosition (oldTop, oldLeft, width, height);
        else return [newTop, newLeft];
    }

    const movement = () => {
        let buttonPosition = newPosition (
            parseInt(coordinates.y),
            parseInt(coordinates.x),
            200,
            200,
        );
        setCoordinates({
            x: buttonPosition[0],
            y: buttonPosition[1],
        })
    }

    return(
        <div style={{
            width: 200,
            height: 200,
            padding: 50,
            border: "1px solid grey",
            boxSizing: "content-box",
            position: "relative",
            margin: "20px 20px",
        }}>
            <div
                className="border-solid border-2 border-black-300 absolute bg-yellow-400"
                onMouseMove={movement}
                style={{
                    left: coordinates.x,
                    top: coordinates.y,
                    width: 70,
                    height: 70,
                }}
                >
                <p>
                    Push me .... !
                </p>
            </div>
        </div>
    );
}

export default Figure