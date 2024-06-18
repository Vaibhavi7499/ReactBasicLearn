export function ShowDetails(props) {
    let {fullnam, mob, email, isSubmit } = props.details
    return (
        
            {isSubmit} ?
        <div className="subcontainer">
            <label>Full Name: {fullnam}</label>
            <br></br>
            <label>Mobile Number: {mob}</label>
            <br></br>
            <label>Email id: {email}</label>
          </div>
          : ''
        
    )
}