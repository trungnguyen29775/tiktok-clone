import { useStat,useEffect, useState } from "react"
function Content()
{
    const [value,setValue] = useState('')
    useEffect(()=>
    {
        // Initate event
        console.log("Hello")
        
        return ()=>
        {
            console.log("Clean up")
        }
    },[value])



    return(
        <div>
            <input value={value} onChange={e=>setValue(e.target.value)}/>
           
        </div>
    )
}
export default Content