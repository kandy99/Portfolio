import React, { useState, useEffect } from 'react'
import SRC from "../assets/20120117_083743_291_Demo.png";
export default function Blogs(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(props.data);
    }, [props])
    return (
        <section id="blogs">
            <span className="container">
                {
                    data && data.map(entity => <div >
                        <span className="info">
                            <img src={SRC} alt="Avatar" className="avatar"></img>
                            <h2 >
                                {entity.heading}
                            </h2>
                            <br />
                        </span>
                        <p>
                            {entity.text}
                        </p>
                        <span className="author">
                            {entity.author}
                        </span>
                        <span className="designation">
                            {entity.designation}
                        </span>
                    </div>)
                }
            </span>
        </section>
    );
}
