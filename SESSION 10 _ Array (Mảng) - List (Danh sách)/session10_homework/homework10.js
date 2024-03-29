


// Viết chương trình khai báo 3 mảng số nguyên đã đc sắp sếp ,
// in ra các phần tử chung của cả 3 mảng đã đc khai báo.
// VD: khai báo 3 mảng [1,2,3,4,5] , [-3,-1,0,1,5] , [1,5,6,7] 
//                  thì in ra phần tử 1 , 5.

// -----------------------------------------------------------------

// Khai báo 3 mảng đã được sắp xếp
let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [-3, -1, 0, 1, 5];
let numbers3 = [1, 5, 6, 7];

// Biến để lưu trữ các phần tử chung
let commonElements = [];

// Vị trí hiện tại của mỗi mảng
let i = 0,
    j = 0, 
    k = 0;

// Duyệt qua các phần tử của cả 3 mảng
while (i < numbers1.length && j < numbers2.length && k < numbers3.length) {
  // So sánh các phần tử hiện tại của 3 mảng
  if (numbers1[i] === numbers2[j] && numbers2[j] === numbers3[k]) {
    // Thêm phần tử chung vào mảng commonElements
    commonElements.push(numbers1[i]);

    // Tăng vị trí của cả 3 mảng
    i++;
    j++;
    k++;
  } else if (numbers1[i] < numbers2[j]) {
    // Tăng vị trí của mảng 1
    i++;
  } else if (numbers2[j] < numbers3[k]) {
    // Tăng vị trí của mảng 2
    j++;
  } else {
    // Tăng vị trí của mảng 3
    k++;
  }
}

// In ra các phần tử chung
console.log(`Các phần tử chung: ${commonElements}`);