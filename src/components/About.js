import React from 'react'


export default function About(props) {
    // const [mystyle, mynewstyle] = useState({
    //     color: "black",
    //     backgroundColor: "white",
    //     border: "1px solid black"
    // })
    // const [lightdarkmode, newlightdarkmode] = useState("Enable Dark mode")
    // const togglelight = () => {
    //     if (mystyle.color === "black") {
    //         mynewstyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border: "1px solid white"
    //         })
    //         newlightdarkmode("Enable Light Mode")
    //     }
    //     else {
    //         mynewstyle({
    //             color: "black",
    //             backgroundColor: "white",
    //             border: "1px solid black"
    //         })
    //         newlightdarkmode("Enable Dark Mode")
    //     }
    // }
    let mystyle = {
        color: props.mystyle.color === "black" ? "black" : "white",
        backgroundColor: props.mystyle.backgroundColor === "rgb(25 27 36)" ? "rgb(24 6 22)" : "white",
        border: "1px solid"

    }

    return (
        <>
            <div className='container my-3' >
                <h1 >About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>What is WordCounter?</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                The word count is the number of words in a document or passage of text. Word counting may be needed when a text is required to stay within certain numbers of words. This may particularly be the case in academia, legal proceedings, journalism and advertising
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                                <strong>Why does the word count matter?</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                When your text is longer, Google has more clues to determine what it is about. The longer your (optimized) text, the more often your focus keyphrase appears. This is no excuse for keyphrase stuffing, though! If you optimize your copy naturally, your focus keyphrase will pop up here and there throughout your text. You can also fit in more synonyms and related keyphrases. In a longer post, you can add more headings, links, and images, in which you can also mention the keyphrase.
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
                                    <strong>Write readable texts</strong>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body" style={mystyle}>
                                    The most important thing when writing long (or any kind of) posts is  write for your audience. That may sound obvious, but it is surprisingly easy to get distracted and start adding irrelevant information. So start by thinking about questions a reader could have about the topic youre covering. Then, provide clear answers to those questions. Of course, the answers should be well-written and readable.
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <button type="button" onClick={togglelight} className="btn btn-primary my-2">{lightdarkmode}</button> */}
                </div>
            </div>
        </>



    )

}
