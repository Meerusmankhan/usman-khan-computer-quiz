import 'process'
export default function  Progress({persent = '10%'}){
    return(
        <div className="outer-container">
            <div className="inner-container" style={{'width':persent}}>
              {persent}
            </div>
        </div>
    )
}