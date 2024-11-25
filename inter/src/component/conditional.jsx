import React from 'react'

const conditional = () => {
    let dd=true
    // if(dd===true){                            //first way
    //     return <div>hello</div>;
    // }
    // else{
    //     return <div>loading....</div>;
    // }

    return(
        // dd===true && <div>hello</div> || <div>loading....</div>         //second way
        <div>
            {dd ? <h1>hello</h1>:<h1>loading....</h1>}                     {/*third way*/}
        </div>
    )
}

export default conditional
