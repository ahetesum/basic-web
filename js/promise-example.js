var promise = new Promise(function(resolve, reject) {
    const x = 1;
    //const y = 1;
    const y = 2;
    if(x === y) {
        resolve();
    } else {
        reject();
    }
    });
    
    promise.
        then(function () {
            console.log('Success, You are Resolved');
        }).
        catch(function () {
            console.log('Some error has occurred so Reject');
        });
    