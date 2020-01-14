//like 56, 65, 76, 86, 97, 107, 118, 128, 139, 149, 1510.
//input : 56
//output
import React from 'react';

class App extends React.Component{

    render(){
        function generate( num ){
            let single = num % 10 - 1;
            let arr = [];
            for(let i = Math.floor(num/10 - single); i < Math.floor(num/10 - single) + 11; i++){
                let tmp = 0;
                if(i < 10){
                    tmp = (i + 5) * 10 +  (Number( (i===0) ) + Math.floor((i + 10)/2));
                }
                else{
                    tmp = (i + 5) * 100 +  (Number( (i===0) ) + Math.floor((i + 10)/2));
                }
                arr.push( tmp );
            }
            return arr;
        }
        console.log( generate(56).slice(0, 5))
        return(
            <div>
            {generate(56).map((node, index) => 
                <b style = {{marginLeft:"10px"}} key = {index}>
                {node}

                </b>
            )}
            <div style = {{marginLeft:"10px"}}>
            {"total: "+ generate(56).slice(0, 5).reduce((a, b) => a+b)}
            </div>
            </div>
        )
    }
}
export default App;


//generate(56);
    //console.log('single', single);
    //console.log('tenpostion', tenpostion);
    //let tenpostion = Math.floor( num/10 );