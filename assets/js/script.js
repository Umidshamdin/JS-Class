class Arrays{
    constructor(){
        this.newArray=[];
        this.findArray=[];
    }
    PushFunction(item){
        this.newArray[this.newArray.length]=item;
        return this.newArray;
    }
    FindFunction(callback){
        for (const item of this.newArray) {

            if(callback(item)){
                this.findArray[this.findArray.length]=item;
            }
            
        }
        return this.findArray;
    }
}
let arr = new Arrays();
arr.PushFunction(13);
arr.PushFunction(7);
arr.PushFunction(10);
arr.PushFunction(33);
console.log(arr.newArray);
console.log(arr.FindFunction(n => n>7));
