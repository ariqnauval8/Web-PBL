const Welcome = (props) => {
               
    return (
            <div className="card" style={{color:props.color ?? "blue"}}>
                <h1>Hello, {props.name}</h1>
                <h1>Job, {props.job}</h1>
            </div>
    )
}

export default Welcome