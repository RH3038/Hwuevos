const rxjs = require('rxjs');

function y(): any {

    const x = new rxjs.Observable((subscriber: any) => {

        setTimeout(() => {
    
            subscriber.next(3);
    
            subscriber.complete();
    
        }, 5000);
    
    });

    return x;
    
}

function z(): any {

    return y();

}

z().subscribe((data: any) => console.log(data));


