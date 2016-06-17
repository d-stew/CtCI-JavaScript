function rotate(img) {
  let img90 = []
  let temp = []
  for (let i=0; i < img.length; i++) {
    for (let j=0; j < img[i].length; j++) {
      temp.push([img[i][j], img[i][j+1]], [ img[i+1][j], img[i+1][j+1] ]);
    }
  }
  return temp;
}


console.log(rotate([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]));
