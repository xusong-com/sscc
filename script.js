function inputText(id){
    return document.getElementById(id).value;
}

function showText(id,value){
    document.getElementById(id).value = value;
}

console.log("xxx")
function primeNumber(){
    console.log("primeNumber start");
    let N = inputText("txtPrimeNumber");
    console.log("N=", N);
    N = Number(N)
    let S = 0;
    let T = 1;
    let U = N;
    let Q = 0;
    let P = 0;

    while (2 * T <= N){
        if (T * U == N){
            S = S + T;
        }
        T = T + 1;
        Q = N % T;
        P = N - Q;
        U = P / T;
    }
    if (S == 1){
        showText("txtPrimeNumberResult","素数です");
    }else{
        showText("txtPrimeNumberResult","素数ではないです");
    }
}
console.log("xxx")