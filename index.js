// Code your solution in this file!
const blocks = 42

function distanceFromHqInBlocks(b){
    
    if(b > blocks){
        return b - blocks ;
    }else 
        return blocks - b ;
     
}  

function distanceFromHqInFeet (f){
    
    if(blocks > f){
        return (blocks - f) * 264 ;
    }else  
        return (f -blocks ) * 264 ;
    } 

function distanceTravelledInFeet(d1, d2){

    if (d1 > d2){
        return (d1 - d2) * 264;  
    }else 
        return (d2 - d1) * 264;
}

 function calculatesFarePrice(start, destination){
    let p = distanceTravelledInFeet(start,destination);
    
    if ( p <= 400){
        return 0;
    }else if (p > 400 &&  p < 2000){
        return (p - 400) * 0.02;
    } else if (p >2000 && p <2500 ){
        return 25 ;
    }else 
        return "cannot travel that far";


    }




