


// Viết chương trình khai báo mảng số nguyên gồm nhiều số bất kì,
// yêu cầu người dùng nhập vào một số bất kì,
// tìm ra mảng con đầu tiên từ mảng ban đầu có tổng các phần tử bằng với số vừa nhập.
// nếu ko tìm thấy thì hiển thị "ko có mảng con thỏa mãn".
// VD: có mảng [1,5,6,3,2,1,1,5,6,7] nhập vào số 14 sẽ hiển thị mảng con [5,6,3].

// ---------------------------------------------------------------


// Khai báo mảng
let numbers = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];

// Nhập số từ người dùng
let targetSum = Number(prompt("Nhập số cần tìm: "));

// Biến để lưu trữ mảng con kết quả
let subArray = [];

// Duyệt từ đầu mảng đến cuối mảng
for (let i = 0; i < numbers.length; i++) {
  // Biến để lưu trữ tổng các phần tử trong mảng con hiện tại
  let currentSum = 0;

  // Duyệt từ vị trí hiện tại đến cuối mảng
  for (let j = i; j < numbers.length; j++) {
    // Cộng thêm phần tử hiện tại vào tổng
    currentSum += numbers[j];

    // Kiểm tra xem tổng hiện tại có bằng số cần tìm hay không
    if (currentSum === targetSum) {
      // Lưu trữ mảng con hiện tại
      subArray = numbers.slice(i, j + 1);
      break; // Thoát khỏi vòng lặp j
    }
  }

  // Kiểm tra xem đã tìm thấy mảng con hay chưa
  if (subArray.length > 0) {
    break; // Thoát khỏi vòng lặp i
  }
}

// In ra kết quả
if (subArray.length > 0) {
  console.log(`Mảng con đầu tiên có tổng bằng ${targetSum} là: ${subArray}`);
} else {
  console.log(`Không có mảng con nào thỏa mãn`);
}