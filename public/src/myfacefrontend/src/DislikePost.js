import { useState } from "react";

function DisikePost () {
    const [clickCount, setClickCount] = useState(0);

    function incrementCount () {
        setClickCount(ClickedCount + 1);
    }
    return <div>
        <p>{ClickedCount}</p>
        <button onClick={incrementCount}>Disike</button>
    </div>
}

export default DisikePost;