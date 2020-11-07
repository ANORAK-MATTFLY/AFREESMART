function im(n) {
    var str = '';
    for (let i = 1; i <= n; i++) {
        if (i % n !== 0) {
            str += i.toString()
            i += 1
            if (i == n - 1) {
                str += n.toString();
            }
        }
    }
}

console.log(im(7))