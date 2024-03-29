


// Viết chương trình khai báo mảng số nguyên gồm nhiều phần tử bất kỳ,
// tiến hành di chuyển các phần tử âm lên đầu mảng,
// phần tử dương về cuối mảng và in kết quả ra màn hình console.

// ------------------------------------------------------------


// Khai báo mảng
let numbers = [1, -2, 3, -4, 5, -6];

// Biến để lưu trữ vị trí hiện tại của phần tử dương
let positiveIndex = numbers.length - 1;

// Duyệt từ đầu mảng đến cuối mảng
for (let i = 0; i < numbers.length; i++) {
  // Kiểm tra xem phần tử hiện tại có âm hay không
  if (numbers[i] < 0) {
    // Hoán đổi phần tử hiện tại với phần tử tại vị trí positiveIndex
    let temp = numbers[i];
    numbers[i] = numbers[positiveIndex];
    numbers[positiveIndex] = temp;
    
    // Giảm vị trí positiveIndex xuống 1
    positiveIndex--;
  }
}

// In ra mảng kết quả
console.log(`Mảng sau khi di chuyển: ${numbers}`);