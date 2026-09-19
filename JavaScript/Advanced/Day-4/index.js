// const user = {
//     name: "Abdullah",
//     address: {
//         city: "Peshawar"
//     }
// };
// console.log(user.address.city);


// const user = {
//     name: "Abdullah"
// };
// console.log(user.address.city); // error


// is se erroe nahi ayega simple undefined show hoga
// const user = {
//     name: "Abdullah"
// };
// console.log(user.address?.city);


// const user = {
//     profile: {
//         contact: {
//             phone: "96767346346"
//         }
//     }
// };
// console.log(user.profile.contact.phone);


// const user = {
//     profile: {
//         contact: {
//             phone: "96767346346"
//         }
//     }
// };
// console.log(user?.profile?.contact?.phone);


// const user = {
//     name: "Abdullah",
//     profile: {
//         bio: "MERN Developer"
//     }
// };
// console.log(user.profile.social.github);


// const user = {
//     name: "Abdullah",
//     profile: {
//         bio: "MERN Developer"
//     }
// };
// console.log(user?.profile?.social?.github);


// const user = {
//     name: "Abdullah"
// };
// console.log(user?.age);


// const user = {
//     name: "Abdullah"
// };
// console.log(user?.age ?? "Not Available");


// pratice-1
// const user = {
//     name: "Abdullah",
//     profile: {
//         contact: {
//             email: "abdullah277388@gmail.com"
//         }
//     }
// };
// console.log(user.name);
// console.log(user.profile.contact.email);
// console.log(user.profile.contact?.phone);


// pratice-1
// const student = {
//     name: "Abdullah",
//     university: {
//         name: "University of Peshawar",
//         department: {
//             name: "Software Enginnering"
//         }
//     }
// };
// console.log(student.name);
// console.log(student.university.name);
// console.log(student?.phone);


// pratice-2
// const user = {
//     name: "Abdullah",
//     account: {
//         profile: {
//             username: "abdullah01"
//         }
//     }
// };
// console.log(user.name);
// console.log(user.account.profile.username);
// console.log(user?.email);
// console.log(user?.phone);




// Nullish Coalescing Operator — ??
// const user = {
//     name: "Abdullah"
// };
// console.log(user.age ?? "Age not available");


// pratice-1
// const user = {
//     name: "Abdullah",
//     age: null,
//     city: "Peshawar"
// };
// console.log(user.name ?? "Unknown");
// console.log(user.age ?? "Age not available");
// console.log(user.city ?? "City not available");


// pratice-2
// const user = {
//     name: "Abdullah",
//     profile: {
//         username: "abdullah34",
//         bio: null
//     }
// };
// console.log(user.name ?? "Unknown User");
// console.log(user.profile.username ?? "No username");
// console.log(user.profile.bio ?? "No bio available");
// console.log(user?.email ?? "No email available");