var mamu =500;
var singara = 20 ; 
var cha = 10 ; 
var danish = 30 ;
var pizza =45 ;
var bread = 25

if(mamu >= pizza){//true
    var left = mamu - pizza
    if(left >=danish){
        var left1 = left - danish 
        if(left >= bread){
            var left2 = left - danish 
             if(left2 >= singara){
            var left3 = left - danish 
                if( left >= cha){
                   console.log("fhu mairre maire cha khabo ")
                }
                else{
                   console.log("nah re vagge kichui nai ")
                }
            }
            else if( left2 >= cha){
                console.log("fhu mairre maire cha khabo ")
            }
            else{
                console.log("nah re vagge kichui nai ")
            }
        }
        else if(left >= singara){
            console.log("singara khaite parbe")
        }
        else if( left >= cha){
            console.log("fhu mairre maire cha khabo ")
        }
        else{
            console.log("nah re vagge kichui nai ")
        }

    }else if(left >= bread){
        console.log("bread kahite parbve")
    }
    else if(left >= singara){
        console.log("singara khaite parbe")
    }
    else if( left >= cha){
        console.log("fhu mairre maire cha khabo ")
    }
    else{
        console.log("nah re vagge kichui nai ")
    }


}

else if(mamu >= danish){
    var left = mamu - pizza
    if(left >=danish){
        console.log("abr danish khaboi");
    }else if(left >= bread){
        console.log("bread kahite parbve")
    }
    else if(left >= singara){
        console.log("singara khaite parbe")
    }
    else if( left >= cha){
        console.log("fhu mairre maire cha khabo ")
    }
    else{
        console.log("nah re vagge kichui nai ")
    }
}


else if(mamu >= bread){
    if(left >= singara){
        console.log("singara khaite parbe")
    }
    else if( left >= cha){
        console.log("fhu mairre maire cha khabo ")
    }
    else{
        console.log("nah re vagge kichui nai ")
    }
}


else if(mamu >= singara){
    if( left >= cha){
        console.log("fhu mairre maire cha khabo ")
    }
    else{
        console.log("nah re vagge kichui nai ")
    }
}



else if( mamu >= cha){
    console.log("fhu mairre maire cha khabo ")
}


else{
    console.log("nah re vagge kichui nai ")
}