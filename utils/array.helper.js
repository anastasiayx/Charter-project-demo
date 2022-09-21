export const arrayGroupByPropertyValue = (arr, property) => {
    if (property === undefined || !Array.isArray(arr)) {
        throw new Error('invalid args')
    }
    return arr.reduce((acc, curItem) => {
        const curPropValue = curItem[property];
        if (curPropValue === undefined) {
            return acc;
        }
        if (acc[curPropValue] === undefined) {
            acc[curPropValue] = [curItem]
        } else {
            acc[curPropValue].push(curItem)
        }
        return acc;
    }, {})
}

export const sumArrayItemPropertyNumValue = (arr, property) => {
    if (property === undefined || !Array.isArray(arr)) {
        throw new Error('invalid args')
    }
    return arr.reduce((acc, curItem) => {
        const curValue = curItem[property] ? curItem[property] : 0
        return acc + curValue
    }, 0)
}