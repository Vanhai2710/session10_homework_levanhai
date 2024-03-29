


// Viết chương trình khai báo mảng gồm nhiều phần tử bất kỳ,
// đảo ngược thứ tự của các phần tử trong mảng đã khai báo
// in ra màn hình console.

// -------------------------------------------------------

// Khai báo mảng
let numbers = ["a", "b", "c", "d", "e"];

// Khai báo biến để lưu trữ mảng đảo ngược
let reversedArray = [];

// Duyệt từ phần tử cuối cùng đến phần tử đầu tiên của mảng
for (let i = numbers.length - 1; i >= 0; i--) {
  // Thêm phần tử hiện tại vào mảng reversedArray
  reversedArray.push(numbers[i]);
}

// In ra mảng reversedArray
console.log(`Mảng đảo ngược: ${reversedArray}`);