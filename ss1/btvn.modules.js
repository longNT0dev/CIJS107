const printNames = (arr) => {
    if (!arr || arr.length === 0) {
        console.log("Dữ liệu truyền vào không có giá trị")

        return
    }

    let result = "";
    for (let i = 0; i < arr.length; i++) {
        // Duyệt qua từng object trong mảng arr
        // Lấy ra giá trị name của object thông qua key
        console.log(arr[i].name);

        if (i === arr.length - 1) {
            result += arr[i].name;
        } else {
            result += arr[i].name + ", ";
        }
    }

    console.log("Kết quả: " + result);
}

const toUpper = (str) => {
    return str.toUpperCase();
}

const formatCurrency = (num) => {
    return num.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

const findLargestNumber = (...args) => {
    if (args.length === 0) {
        return null;
    }

    if (args.length === 1) return args[0];

    // Gán giá trị lớn nhất cho phần từ đầu tiên
    let largest = args[0];

    // [10, 5, 20, 8]
    for(let i = 1; i< args.length; i++) {
        if(args[i] > largest) {
            largest = args[i];
        }
    }

    return largest
}


export {
    printNames,
    toUpper,
    formatCurrency,
    findLargestNumber
}