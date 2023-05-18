import AppHW1 from './AppHW1'

export default function Trial1(){
    let obj={xcoordinate:12, ycoordinate:20}

    return <div>
        <AppHW1 flag={true} point={obj} num1={10} str="HW1" arr={[1,2,3]}></AppHW1>
    </div>

}

//Write <Trial /> inside root.render() in index.js