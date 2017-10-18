import * as Rx from 'rx';
let arrar
let interval=Rx.Observable.interval(1000).take(5);
let arr=Rx.Observable.create((observer)=>{
    let unsub=interval.subscribe((o)=>{
        observer.onNext({id:o,value:10*Math.random()})
    },(err)=>{
        observer.onError(err);
    },()=>{
        observer.onCompleted();
    });
    return()=>{
        unsub.dispose();
    }
});
let tas=arr.subscribe((a)=>{
    console.dir(a);
},(err)=>{
    console.log(err.toString())
},()=>{
    console.log("completed");
});
setTimeout(()=>{
    tas.dispose();    
},2580)

