const nbYear = (p0, percent, aug, p) => {
    // every year add 1 to counter and augment from p0
    for (years=0; p0 < p ;years ++) {
        p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
}
