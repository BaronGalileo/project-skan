

function unionArray (arroy) {
    if(arroy.data[0]) {
        arroy.data[0].data?.map((elem, index) => {
            elem.riskFact = arroy.data[1].data[index].value
            arroy.data[0].data[index] = elem
    });

    return arroy
}

}

export { unionArray }