


// Viết chương trình khai báo mảng có sẵn gồm nhiều phần tử,
// yêu cầu người dùng nhập vào giá trị bất kì và tìm kiếm trong mảng.
// In ra vị trí của phần tử trong mảng nếu tìm thấy,
// nếu ko thì in "phần tử ko tồn tại" lên màn hình console.

// ------------------------------------------------------------------

// Khai báo mảng
let elements
 = ["a", "b", "c", "d", "e"];

// Nhập giá trị cần tìm từ người dùng
let searchValue = prompt("Nhập giá trị cần tìm: ");

// Tìm kiếm phần tử trong mảng
let foundIndex = -1;
for (let i = 0; i < elements.length; i++) {
  if (elements[i] === searchValue) {
    foundIndex = i;
    break; // Thoát khỏi vòng lặp khi tìm thấy phần tử
  }
}

// Hiển thị kết quả
if (foundIndex === -1) {
  console.log("Phần tử không tồn tại");
} else {
  console.log(`Phần tử được tìm thấy ở vị trí ${foundIndex}`);
}