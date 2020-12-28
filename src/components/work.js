
const Work = props => {

    return (
        <div id="workPage">
            <div id="workNavCover">
                <div className="container">
                    <h1>See my Work</h1>
                    <p>Below you can see some of my latest projects and get an idea of the work I do.</p>
                </div>
            </div>
            <section id="workPortfolio" className="center">
                {props.examples.map(work => {
                    return (
                        <div className="workItem" key={work.name}>
                            <img className="workThumbnail" src={work.thumbnail.url} alt="logo" />
                            <h5 className="workName">{work.name}</h5>
                            <p className="workTag">{work.tagline}</p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default Work;