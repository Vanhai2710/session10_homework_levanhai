


// Viết chương trình khai báo mảng số nguyên gồm nhìu phần tử,
// yêu cầu người dùng nhập vào 1 số nguyên bất kì,
// In ra số lần xuất hiện của số đó trong mảng lên màn hình con sonsole.

// -----------------------------------------------------------

// Khai báo mảng
let numbers = [1, 2, 3, 4, 1, 2, 5, 1];

// Nhập số nguyên từ người dùng
let searchValue = Number(prompt("Nhập số nguyên cần tìm: "));

// Đếm số lần xuất hiện
let count = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === searchValue) {
    count++;
  }
}

// Hiển thị kết quả
console.log(`Số lần xuất hiện của ${searchValue} trong mảng là: ${count}`);