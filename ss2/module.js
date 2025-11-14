// Câu 1 
export const sumArr = (arr) => {
    let result = 0

    arr.map((value) => {
        result += value
    })


    console.log("Tổng các phần tử trong mảng là: ", result)
}


export const countOccurrences = (arr, value) => {
    console.log(`Số lần xuất hiện của giá trị ${value} là: ${arr.filter(item => item === value).length} lần`)
}

export const removeDuplicates = (arr) => {
    // return arr.filter((value, index) => arr.indexOf(value) === index);
    console.log([...new Set(arr)]);
}

export const flattenArray = (arr) => {
    // let flattened = [];
    // for (let element of arr) {
    //     flattened = flattened.concat(element);
    // }
    // console.log(flattened);

    console.log(arr.flat(Infinity));
}

export const isSymmetric = (arr) => {
    // So sánh chuỗi 12321 với chuỗi đảo ngược 12321
    let str = arr.join('');

    return str === array.reverse().join('')
}

export const findSecondLargest = (arr) => {
    let sortedArr = arr.sort((a, b) => a - b) // b - a xếp giảm, a - b xếp tăng

    console.log(sortedArr)

    console.log(sortedArr[sortedArr.length - 2])

}

// [1, 2, 2, 3, 4, 4, 6, 2, 3, 6]
// Result: 1 2
// 1 => 0 = 0 
