import { useState } from "react";

function LikePost () {
    const [clickCount, setClickCount] = useState(0);

    function incrementCount () {
        setClickCount(ClickedCount + 1);
    }
    return <div>
        <p>{ClickedCount}</p>
        <button onClick={incrementCount}>Like</button>
    </div>
}

export default LikePost;