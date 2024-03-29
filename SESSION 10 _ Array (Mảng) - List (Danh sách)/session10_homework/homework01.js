


// Viết chương trình khai báo 1 mảng gồm các phần tửu bất kì,
// Tiến hành in ra các phần tử là số nguyên trong mảng,
// nếu ko có số nguyên nào thì hiển thị
// "Trong mảng không tồn tại số nguyên" lên màn hình console.
  
// ---------------------------------------------------------------

// Khai báo mảng
let elements = [1, "a", 2.5, "b", 3, "c"];

// Biến để kiểm tra xem có số nguyên nào hay không
let hasInteger = false;

// Duyệt qua từng phần tử trong mảng
for (let i = 0; i < elements.length; i++) {
  // Kiểm tra xem phần tử hiện tại có phải là số nguyên hay không
  if (Number.isInteger(elements[i])) {
    // In ra phần tử hiện tại
    console.log(elements[i]);
    
    // Đặt "hasInteger" thành "true"
    hasInteger = true;
  }
}

// Hiển thị thông báo nếu không có số nguyên nào
if (!hasInteger) {
  console.log("Trong mảng không tồn tại số nguyên");
}