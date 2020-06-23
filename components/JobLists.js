
function stripHtml(string) {
    var strippedString = string.replace(/(<([^>]+)>)/ig, "")
    return strippedString

}
const JobLists = (company = "No company provided", title = "No title provided",
    image = "No image provided", location = "no location provided",
    how_to_apply = "Check description on how to apply", description = "no description provided") => {
    return (

        <li className="list-group-item">
            <div>
                <img style={styles.imageStyle} src={image} alt="logo" />
                <div className="col-xs-5" style={styles.listDiv}>
                    <h1>{company}</h1>
                    <p><span style={styles.title}>Location:</span> {location}</p>
                    <p><span style={styles.title}>Title:</span> {title}</p>
                    <p><span style={styles.title}>How to apply: </span>{stripHtml(how_to_apply)}</p>
                    <p><span style={styles.title}>Description:</span> {stripHtml(description)}</p>
                </div>
            </div>
        </li>
    )
}

const styles = {
    imageStyle: {
        margin: "10px",
        height: 100,
        width: 100,
        verticalAlign: "baseline"
    },
    listDiv: {
        display: "inline-block",
    },
    title: {
        fontWeight: 600,
        fontSize: "1rem"
    }

}

export default JobLists;