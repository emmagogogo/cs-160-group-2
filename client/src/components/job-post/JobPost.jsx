import "./JobPost.css"

const JobPost = ({light}) => {
    return (
        <div className={light ? "jobpost light" : "jobpost"}>
            <div className="jobpost-top">
                <table style={{width: "100%"}}>
                    <td style={{width: "20%"}}>
                        <button className="jobpost-btn apply">Apply</button>
                    </td>
                    <td style={{width: "60%"}}>
                      <p className="jobpost-text">Insert Job Listing Here.</p>
                    </td>
                    <td style={{width: "20%"}}>
                        <button className="jobpost-btn details">Details</button>
                    </td>
                </table>
            </div>
        </div>
    )
};

export default JobPost;