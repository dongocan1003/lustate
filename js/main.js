//Bai tap JS 1.1
//Bai 1: Nhập vào 1 số bất kỳ, kiểm tra số đó có phải là số chẵn hay không? Kết quả trả về kiểu true/false
//  function checkNumber(a){
//     if(typeof a ==="number"){
//         if(a % 2 == 0){
//             console.log(true)
//         }else {
//             console.log(false)
//         }
//     }else{
//         console.log("khong phai la so")
//     }
// }
// checkNumber();




//2. Viết hàm kiểm tra số đó có chia hết cho 3 hay không?
// function checkNumber(a){
//     if(typeof a === "number"){
//             if (a % 3 === 0) {
//                 console.log('so chia het cho 3')
//             }
//             else {
//                 console.log('So khong chia het cho 3')
//             }
//     }else{
//         console.log("khong phai la so")
//     }
// }
// checkNumber()


// 3. Khai báo 2 số a = 4, b = 12, in kết quả bằng console.: Tính tổng 2 số a và b? Lấy b chia a, lấy phần
// dư ? Lấy b chia a, lấy phần nguyên ?

// const a = 4;
//       b = 12;

// function sum(x,y){
//     return x + y;
// }
//     console.log("tong a va b la : " + sum(a,b))
//     //chia lay phan nguyen
// function divider(x,y) {
//     const resulf = y / x;
//     return Math.trunc(resulf)
// }
//     console.log(divider(a,b))
//     //chia lay phan du
// function chia(x,y){
//     return x % y;
// }
// console.log(chia(a,b))


//4. In ra họ và tên của mình bằng cách khai báo 1 biến chứa họ và biến chứa tên, có khoảng trắng
//giữa họ và tên của bạn.
// function fullName(){
//     let firtsname = "Do Ngoc"
//     let lastname = "An"
//     console.log(firtsname + " " + lastname)
// }
// fullName()



// // 5. Viết hàm so sánh 2 số nguyên.nếu a > b thì trả về 1, nếu a < b thì trả về - 1, nếu a == b thì trả về 0.
//   function comparetNumber(a,b){
//     if(a > b) {
//         return 1
//     }else if(a<b){
//         return -1
//     }else{
//         return 0
//     }
//   }



// 6. Khai báo một chuỗi ký tự là “happy news year”
// a.In ra tổng số ký tự có trong chuỗi(gợi ý dùng length)
// b.In ra vị trí của chữ “y” từ đầu xuống(gợi ý dùng indexOf)
// c.In ra vị trí của chữ “y” từ dưới lên(gợi ý dùng lastIndexOf)
// d.Dùng replace để thay thế từ “happy” bằng một từ tuỳ ý bạn.
// let titleText = "happy news year"
//     console.log(titleText.length)
//     console.log(titleText.indexOf("y"))
//     console.log(titleText.lastIndexOf("y"))
//     console.log(titleText.replace("happy","unhappy"))




//Bài tập Javascript (Phần 1.2)




//1. Viết hàm nhập vào điểm của một học sinh và in ra kết quả tương ứng nếu:
// a.Điểm lớn hơn 8 thì in ra Excellence -
//     b.Điểm từ 7 đến 8 thì in ra Good
// c.Điểm từ 4 - 6 thì in ra Not Good
// d.Nhỏ hơn 4 thì in ra Bad
// function score(x){
//     if(x >=10){
//         console.log("Không hợp lệ")
//     }
//     else if(x > 8){
//         console.log("Excellence")
//     }else if(x > 6){
//         console.log("Good")
//     }else if(x >= 4){
//         console.log("Not good")
//     }else{
//         console.log("Bab")
//     }
// }
// let x = score(11)


// 2. Viết hàm nhập vào 1 chuỗi và chuẩn hóa chuỗi theo định dạng chữ cái đầu tiên của chuỗi phải
// được in hoa.Các chữ còn lại viết thường.Ví dụ: HOC lập TRình JavAScript thì phải chuyển
// thành: Học Lập Trình Javascript


// let sentence = "HOC lập TRình JavAScript"
// let uppString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase()
// let uppWords = (str) => str.split(" ").map(uppString).join(" ")
// console.log(uppWords(sentence))


// 3. Viết hàm định dạng số giây luôn có 2 chữ số.Ví dụ: Nếu người dùng nhập vào: 12 => 12. nếu
// người dùng nhập vào: 5 => 05


// function second(n) {
//   m = n.toString();
//   return console.log(m.padStart(2, "0"));
// }

// second(9);





// 4. Viết hàm trích xuất domain như sau.Ví dụ: - Nếu là cfdcircle @gmail.com => "gmail.com" - Nếu
// là learning @cfdcircle.vn => "cfdcircle.vn"

// function domain(n){
//     m = n.lastIndexOf("@");
//     let currenDomain = n.slice(m + 1);
//     return console.log(currenDomain)
// }
// domain("cfdcircle@gmail.com")



// 5. Viết hàm nhập vào 1 chuỗi và chuyển đổi chuỗi thành path URL.Ví dụ: "javascript cho nguoi
// moi bat dau" => javascript-cho-nguoi-moi-bat-dau

// function myFunction(x){
//   let m = x.split(" ");
//   let n = m.join("-") 
//   return console.log(n)
   
    
// }
// myFunction("javascript cho nguoi")









// Bài tập Javascript(Phần 2.1)




// 1. Chạy vòng lặp với i = 0, i < 10, i++. Tính tổng giá trị mỗi lần i tăng lên 1(gợi ý dùng vòng lặp for
// hoặc while)


   //for
    // for(let i = 0; i < 10; i++){
    //     console.log(i)
    // }
    //while
    // let i = 0;
    // while(i<10){
    //     i++
    //     console.log(i)
    // }


// 2. In ra số chẵn từ 0 - 20.(dùng vòng lặp while)?
// let x = 0;
// while(x <= 20){
//     if(x % 2 == 0){
//         console.log(x)
//     }
//     x++
// }


// 3. Tạo 1 mảng bất kỳ với 5 phần tử, thực hiện xoá 2 phần tử cuối, sau đó in ra mảng kết quả(gợi
// ý dùng: splice) ?

// let number = [1, 2, 3, 4, 5]
// let x = number.splice(0,3)
// console.log(x)



// 4. Tạo 1 mảng gồm tên các khoá học của CFD Circle.In ra số lượng các khoá học ? In ra chỉ số
// index của mảng ? In ra tên khoá học ở vị trí index thứ 2. In ra chuỗi tên các khoá học cách
// nhau bằng dấu phẩy ? Push thêm 2 phần tử bất kỳ vào mảng đã tạo.


// let arr = ["newbie", "res", "reactjs"]
// console.log(arr.length)
// console.log(arr.splice(2))
// console.log(arr.join())
// arr.push("noodjs", "C#")
// console.log(arr)



// 5. Tạo 1 mảng gồm các phần tử là kiểu số nguyên dương, tính tổng các phần tử có trong mảng ?

// arr = [1, 3, 5, 6, 10];
// total = 0;
// for(let i in arr){
//     total = total + arr[i]
// }
// console.log(total)



// Bài tập Javascript(Phần 2.2)



// 1. Viết hàm random một số ngẫu nhiên từ 1 đến n(n là tham số bất kỳ được truyền vào) ?

// function random(x){
//     return console.log(Math.floor(Math.random() * x + 1))
// }
// random(10)



// 2. Hiển thị một alert thông báo với nội dung bất kỳ sau khi vào trang web sau 4 giây ?

// function sayHello(){
//     alert("hi");
// }
// setTimeout(sayHello, 4000)


// 3. Lấy thời gian hệ thống để tạo đồng hồ bằng javascript, in ra giao diện người dùng t trong thẻ H1
// (gợi ý sử dụng setInterval và đối tượng Date, in ra giao diện thì dùng dùng document.write()).
 
// let date = new Date();
// let string = date.toLocaleTimeString();
// document.getElementById("demo").innerHTML = string;


// 4. Tạo một mảng, bên trong gồm 4 đối tượng là các khoá học của CFD Circle, mỗi đối tượng gồm
// các key(thuộc tính) name(tên khoá học), price(giá), date(ngày khai giảng).In ra các đối tượng
// có trong mảng ? In ra price(giá khoá học) của từng đối tượng ?



    // let courses = [
    //     {
    //         name : "Fontend Newbie",
    //         price: "4500000",
    //         date: "20/10/2023"
    //     },
    //     {
    //         name: "Wed Res",
    //         price: "4500000",
    //         date: "20/10/2023"
    //     },
    //     {
    //         name: "Reactjs",
    //         price: "4500000",
    //         date: "20/10/2023"
    //     }
        
    // ]
    // console.log(courses)
    

// 5. Tạo 1 một đối tượng car gồm các thuộc tính (key): name, color, price. Kiểm tra xem thuộc tính
// (key) là speed có tồn tại trong đối tượng car hay không, trả về kiểu boolean. (gợi ý dùng
// hasOwnProperty)?
      

    // let car = {
    //     name : "honda",
    //     color : "yello",
    //     price : "120000$"
    // }
    // console.log(car.hasOwnProperty("spell"))




// Bài tập Javascript(Phần 3.1)




// 1. Tạo 1 mảng gồm tên các khoá học của CFD Circle.In ra số lượng các khoá học ? In ra chỉ số
// index của mảng ? In ra tên khoá học ở vị trí index thứ 2. In ra chuỗi tên các khoá học cách
// nhau bằng dấu phẩy ? Tính tổng giá các khoá học ? (bắt buộc dùng 1 trong những Phương
// thức xử lý mảng nâng cao đã học)



// === Bài tập 1 ===
// function getCourses() {
//   let courses = ["Newbie", "Web Res", "React"];
//   console.log("Số lượng khóa học:", courses.length);

//   for (let i = 0; i < courses.length; i++) {
    
//     if (i == 2) {
//       console.log("khoa hoc 2", courses[2]);
//     }
//   }
//   console.log(courses.join(", "));
// }
//  getCourses();

// === Bài tập 2 ===
//2. Viết 1 hàm nhận vào 1 mảng số và trả về tổng giá trị các phần tử của mảng?
// function totalNumber() {
//   let number = [3, 5, 6, 2, 3];
//   let total = 0;
//   for (const element of number) {
//     total += element;}
//   console.log(total);
// }
// totalNumber();

// === Bài tập 3 ===
//3. Viết 1 hàm nhận vào 2 tham số là array và character. Hàm trả về 1 chuỗi là kết quả của việc
//nối các phần tử của array với character? (lưu ý: array là mảng nhận vào, character là ký tự để
  //  nối các phần tử của mảng).


// function noi(array,character){
// console.log(array.join(character))
// }
// noi(["css", "html", "js"], "-")
// === Bài tập 4 ===

//Tạo 1 object user gồm: tên, tuổi, địa chỉ và 1 mảng chứa tên bạn bè. In ra array bạn bè? In ra
//tên của người bạn cuối cùng? In ra địa chỉ của user? Thêm 1 người bạn vào mảng bạn bè? in
//ra độ dài mảng bạn bè?


// function getUser() {
//   let user = {
//     name: "Lộc",
//     age: 27,
//     address: "Lý Thường Kiệt",
//     friends: ["Thiên", "Long", "Nhân"],
//   };

//   for (let i = 0; i < user.friends.length; i++) {
//     if (i == user.friends.length - 1) {
//       console.log("Last Friend:", user.friends[i]);
//     }
//   }

//   console.log("Address:", user.address);
//   console.log("Độ dài mảng mới:", user.friends.push("Quả"));
//   console.log(user.friends);
// }

// getUser();

// === Bài tập 5 ===
//5. Cho mảng gồm các phần tử 2,4,5,7,32,67,30,100. Trả về và in ra mảng mới gồm các phần tử có
//giá trị gấp đôi giá trị của từng phần tử mảng đã khởi tạo? Gợi ý dùng hàm map().
// function number(){
//     let arr = [2,4,5,7,32,67,30,100];
//     let tong = arr.map(function(value){
//         return value * 2
//     })
//     console.log(tong)
// }
// number()





// function number() {
//   let numbers = [2, 4, 5, 7, 32, 67, 30, 100];
//   let doubleNumbers = numbers.map((a) => {
//     return a * 2;
//   });

//   console.log(doubleNumbers);
// }

// number();

// ========== Bài tập phần 3.2 ==========
// === Bài tập 1 ===
//1. Viết 1 hàm nhận vào 1 tham số là mảng và trả về ngẫu nhiên 1 phần tử của mảng?
// function random(arr){
//     const a = Math.random() * (arr.length)
//     const b = Math.floor(a)
//     return console.log(arr[b])
// }
// random(["1","2","3","4","5"])







// function param(a) {
//   let b = Math.random() * (a.length - 1);
//   let c = Math.round(b);

//   return console.log(a[c]);
// }

// param(["HTML", "CSS", "JS", "NodeJs", "PhP"]);

// === Bài tập 2 ===
// 2. Tạo 1 đối tượng student trống: Thêm thuộc tính name với giá trị là tên student? Thêm thuộc tính
// age với giá trị là tuổi? Thay đổi giá trị name của student thành tên bất kỳ? Xóa thuộc tính age ra
// khỏi đối tượng?


// let student = {};
// student.name = "Kiệt";
// student.age = 27;

// // Thay đổi giá trị name
// student.name = "Khoa";

// // ++++ Xóa thuộc tính trong đối tượng ++++
// // == Cách 1 ==
// // Xóa thuộc tính age bằng delete
// delete student.age;
// console.log(student);

// // == Cách 2 ==
// // Xóa thuộc tính bất kỳ bằng cách gán biến
// let propNeedDelete = ["age"];
// delete student[propNeedDelete];
// console.log(student);

// // == Cách 3 ==
// //  Xóa thuộc tính age bằng destructuring + Rest Param để không tác động đến đối tượng gốc
// const { age, ...restStudent } = student;
// console.log(restStudent);

// === Bài tập 3 ===
//3. Tạo 1 mảng gồm các object là các student gồm tên và điểm trung bình. Viết 1 hàm nhận vào 1
//tham số là mảng vừa tạo và trả về các object có điểm trung bình lớn hơn 5?
function checkStudent(){
    let arr = [
    {
        student : {
            nane : "an",
            score : 10,
        }
    },
    {
        student : {
            nane : "thi",
            score : 10,
        }
    },
    {
        student : {
            nane : "cun",
            score : 0,
        }
    }
    
    ]
    function average(x){
        x.forEach((i) => {
            if(i.student.score > 5){
                console.log(i.student)
            }
        });
    }
    average(arr)
}
checkStudent()




// function checkStudent() {
//   let arr = [
//     {
//       student: {
//         name: "Thiên",
//         score: 4,
//       },
//     },
//     {
//       student: {
//         name: "Long",
//         score: 9,
//       },
//     },
//     {
//       student: {
//         name: "Nhân",
//         score: 7,
//       },
//     },
//   ];

//   function average(a) {
//     a.forEach((e) => {
//       if (e.student.score > 5) {
//         console.log("student có score trên 5:", e.student);
//       }
//     });
//   }

//   average(arr);
// }

// checkStudent();

// === Bài tập 4 ===
// function salary() {
//   let staff = [
//     {
//       name: "Lý",
//       salary: 3000000,
//     },
//     {
//       name: "Quốc",
//       salary: 6000000,
//     },
//     {
//       name: "Kỳ",
//       salary: 8000000,
//     },
//   ];

//   let total = 0;
//   for (let value of staff) {
//     total += value.salary;
//   }
//   console.log("Tổng lương:", total);
// }

// salary();

// === Bài tập 5 ===
// function findNumber() {
//   let array = [2, 4, 5, 7, 32, 67, 30, 100];
//   function checkArr(a) {
//     return a > 20;
//   }

//   let array1 = array.find(checkArr);

//   console.log(array1);
// }

// findNumber();

// === Bài tập 6 ===
// function check() {
//   let diemso = [5, 7, 8, 9, 3];

//   let checkDiemso = diemso.every((a) => a >= 5);
//   if (checkDiemso == true) {
//     console.log("Đủ điểm đỗ");
//   } else {
//     console.log("Không đủ điểm đỗ");
//   }
// }

// check();


















    
