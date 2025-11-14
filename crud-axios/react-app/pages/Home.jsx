import Counter from "../src/components/Counter"
import Welcome from "../src/components/Welcome"

const Home = () => {
    let people = [
        {name:"John", job:"Programmer", color:"red"},
        {name:"Doe", job:"Designer", color:"red"},
        {name:"Sarah", job:"Model" },
        {name:"James", job:"Dancer" }
    ]

    return(
        <>
            <div className='container'>
                {people.map((item, index)=> {
                return(
                    // <div key={index}>
                    <Welcome key={index} name={item.name} job={item.job} color={item.color}></Welcome>
                    // </div>
                )
                })}
            </div>
            <div>
                <Counter/>
                <Counter start={100} />
                <Counter start={-30} />
            </div>
        </>
    )
}

export default Home

















    