function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('c')
    const fahrenheitExists = degree.toUpperCase().includes('f')

    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }
    let updateDegree = Number(degree.toUppercase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9
    let degreeSing = 'C'




    return formula(updateDegree) + degreeSing
}

try {

    console.log(transformDegree('50F'))
        //transformDegree('10e')

} catch (error) {
    console.log(error.message)
}