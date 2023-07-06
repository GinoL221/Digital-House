let tabla = () => {
    let tot = 0;
    for (let i = 1; i <= 10; i++) {
        for (let e = 1; e <= 10; e++) {
            tot = e * i;
            console.log(i + " X " + e + " = " + tot);
        }
    }
}

tabla();