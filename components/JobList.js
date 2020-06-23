
function stripHtml(string) {
    var strippedString = string.replace(/(<([^>]+)>)/ig, "")
    return strippedString
}

const JobList = (props) => {
    return (

        <li className="list-group-item">
            <div>
                <img style={styles.imageStyle} src={props.image} alt="logo" />
                <div className="col-xs-5" style={styles.listDiv}>
                    <h1>{props.company}</h1>
                    <p><span style={styles.title}>Location:</span> {props.location}</p>
                    <p><span style={styles.title}>Title:</span> {props.title}</p>
                    <p><span style={styles.title}>How to apply: </span>{stripHtml(props.how_to_apply)}</p>
                    <p><span style={styles.title}>Description:</span> {stripHtml(props.description)}</p>
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

export default JobList;