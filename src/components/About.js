import React from 'react'


export default function About(props) {
    // const [myStyle, setmyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })

    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white'
    }
    return (
        <div className="container" >
            <h2 className="my-3" style={{color: props.mode === 'dark'?'white':'black'}} >About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           Who Are we ?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>we are text utils</strong> we are here to provide you with all the basic functionlity related to Your
                            text . Check the home page to view all the basic functionalities.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           How to contact ?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>contat us on our mail id : <a href="mailto:someone@example.com">textutils@support.com</a> or call us at: 1800 13200 1000 </strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
