function primeNumber(){
    let N = inputText()
    N = Number(N)
    let S = 0
    let T = 1
    let U = N
    let Q = 0
    let P = 0

    while (2 * T <= N);
        if (T * U == N);
            S = S + T
        T = T + 1
        Q = N % T
        P = N - Q
        U = P / T
    if (S == 1);
        showText("素数です");
}