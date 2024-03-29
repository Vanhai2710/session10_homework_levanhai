


// Viết chương trình yêu cầu nhập vào hai số nguyên dương a và b,
// lưu các số chia hết cho b trong khoảng  từ 1 đến a
// hoặc các số chia chia hết cho a trong khoảng từ 1 đến b vào một mảng
// in mảng đó ra màn hình console.

// --------------------------------------------------------------

// Nhập vào hai số nguyên dương a và b
let a = Number(prompt("Nhập vào số nguyên dương a: "));
let b = Number(prompt("Nhập vào số nguyên dương b: "));

// Khai báo mảng để lưu trữ các số chia hết cho a hoặc b
let divisibleNumbers = [];

// Duyệt từ 1 đến a
for (let i = 1; i <= a; i++) {
  // Kiểm tra xem i có chia hết cho b hay không
  if (i % b === 0) {
    // Thêm i vào mảng divisibleNumbers
    divisibleNumbers.push(i);
  }
}

// Duyệt từ 1 đến b
for (let j = 1; j <= b; j++) {
  // Kiểm tra xem j có chia hết cho a hay không
  if (j % a === 0 && !divisibleNumbers.includes(j)) {
    // Thêm j vào mảng divisibleNumbers
    divisibleNumbers.push(j);
  }
}

// In ra mảng divisibleNumbers
console.log(`Các số chia hết cho a hoặc b: ${divisibleNumbers}`);