


// Viết chương trình khai báo số nguyên bất kì,
// in ra phần tử lớn hơn 0 nhỏ nhất chưa xuất hiện trong mảng
// Ví dụ: 
//       - Khai báo mảng [1,2,5,7] thì in ra 3
//       - Khai báo mảng [10,5,7] thì in ra 1

// ------------------------------------------------------------

// Khai báo mảng
let numbers = [10, 5, 7];

// Biến để lưu trữ phần tử nhỏ nhất chưa xuất hiện
let smallestUnseenNumber = 1;

// Duyệt qua từng phần tử trong mảng
for (let i = 0; i < numbers.length; i++) {
  // Kiểm tra xem phần tử hiện tại có lớn hơn 0 hay không
  if (numbers[i] > 0) {
    // Cập nhật phần tử nhỏ nhất chưa xuất hiện
    smallestUnseenNumber = Math.min(smallestUnseenNumber, numbers[i]);
  }
}

// In ra phần tử nhỏ nhất chưa xuất hiện
console.log(`Phần tử lớn hơn 0 nhỏ nhất chưa xuất hiện: ${smallestUnseenNumber}`);