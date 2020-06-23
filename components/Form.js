import JobLists from './JobLists';
import Loader from 'react-loader-spinner';
import axios from 'axios';

let listItem = "";
class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: "python",
            cityZip: "new york",
            jobs: [],
            loading: false
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    descriptionChange = (event) => {

        this.setState({ description: event.target.value })
    }

    cityZipChange = (event) => {
        this.setState({ cityZip: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({ loading: true })
        //need to replace for cityzip in url
        let splitCity = this.state.cityZip.split(" ").join("+")

        axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.description}&location=${this.state.cityZip}`)
            .then(response => {
                //console.log(response.data)
                if (response.data.length === 0) {
                    listItem = <p>There were no job results for this search</p>;
                }
                else {
                    this.state.jobs.push(response.data)
                    this.setState({ jobs: this.state.jobs[0] })
                    console.log(this.state.jobs)

                }

            })
            .catch(error => console.log(error))

    }
    render() {
        return (
            <div>
                <div className="container" style={styles.formContainer}>
                    <div className="input-group mb-3">
                        <input type="text" onChange={this.descriptionChange} value={this.state.description} className="form-control" placeholder="Description ex: Java, Ruby, Javascript" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <div className="col-xs-6">
                            <input type="text" onChange={this.cityZipChange} value={this.state.cityZip} style={styles.cityInput} className="form-control" placeholder="City Name or Zipcode" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <button type="button" onClick={this.onSubmit} style={styles.buttonStyle} className="btn btn-primary">Search</button>
                    </div>
                </div>
                <div>
                    {this.state.loading ? <div><Loader
                        className="text-center"
                        style={styles.loaderStyle}
                        type="Oval"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} />
                    </div> :
                        <div className="container">
                            <ul className="list-group list-group-flush">
                                {this.state.jobs.map(job => {
                                    return <JobLists
                                        company={job.company}
                                        title={job.title}
                                        image={job.company_logo}
                                        location={job.location}
                                        how_to_apply={job.how_to_apply}
                                        description={job.description}
                                    />

                                })}
                            </ul>
                        </div>}
                </div>
            </div>

        );
    };

};

const styles = {
    formContainer: {
        padding: '10px',
        border: '1px solid black'
    },
    buttonStyle: {
        marginLeft: '20px'
    },
    loaderStyle: {
        marginTop: '100px'
    }

}


export default Form;