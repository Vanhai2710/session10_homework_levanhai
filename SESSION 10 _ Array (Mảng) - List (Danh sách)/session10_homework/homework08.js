


// Viết chương trình khai báo mảng số nguyên bất kì, 
// In ra tất cả các phần tử xuất hiện từ 2 lần trở lên trong mảng đã khai báo.

// -----------------------------------------------------------


// Khai báo mảng
let numbers = [1, 2, 3, 4, 2, 1, 5, 6, 1, 2];

// Biến để lưu trữ số lần xuất hiện của mỗi phần tử
let elementCounts = {};

// Duyệt qua từng phần tử trong mảng
for (let i = 0; i < numbers.length; i++) {
  // Tăng số lần xuất hiện của phần tử hiện tại
  elementCounts[numbers[i]] = (elementCounts[numbers[i]] || 0) + 1;
}

// In ra các phần tử xuất hiện từ 2 lần trở lên
for (let element in elementCounts) {
  if (elementCounts[element] >= 2) {
    console.log(`Phần tử ${element} xuất hiện ${elementCounts[element]} lần`);
  }
}