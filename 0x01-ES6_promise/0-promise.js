<<<<<<< HEAD
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    resolve('Success');
  });
}
=======
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Success');
    } else {
      reject('Error');
    }
  });
}
>>>>>>> other-branch

