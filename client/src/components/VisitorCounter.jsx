// src/components/VisitorCounter.js
import React, { useEffect, useState } from "react";

function VisitorCounter() {
const [visitors, setVisitors] = useState(null);

useEffect(() => {
    fetch("http://localhost:5555/api/visitors") // 👈 adjust port if backend runs on 5000
    .then((res) => res.json())
    .then((data) => setVisitors(data.visitors))
    .catch((err) => console.error("Error fetching visitors:", err));
}, []);

return (
    <div style={{ marginTop: "20px", fontSize: "18px" }}>
    {visitors !== null ? (
        <p>Total Visitors: <b>{visitors}</b></p>
    ) : (
        <p>Loading visitor count...</p>
    )}
    </div>
);
}

export default VisitorCounter;
