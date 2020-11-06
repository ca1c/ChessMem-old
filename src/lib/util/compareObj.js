/*
  Step 1: Check if both objects have same number of keys
*/

function keyNum(k1, k2) {
  return k1.length === k2.length ? true : false;
}

/*
  Step 2: Check if all the keys are equal
*/

function keyEqu(k1, k2) {
  for(let i = 0; i < k1.length; i++) {
    if(k1[i] !== k2[i]) {
      return false;
    }
  }

  return true;
}

/*
  Step 3: Check if all the values with respect to their corresponding keys are equal
*/

function valEqu(o1, o2, k1) {
  for(let i = 0; i < k1.length; i++) {
    if(o1[k1[i]] !== o1[k1[i]]) {
      return false;
    }
  }

  return true;
}

/*
  If all of these checks pass, the objects are equal.
*/

export default function comapreObj (o1, o2) {
  let k1 = Object.getOwnPropertyNames(o1);
  let k2 = Object.getOwnPropertyNames(o2);

  let keyNumB = keyNum(k1, k2);
  let keyEquB = keyEqu(k1, k2);
  let valEquB = valEqu(o1, o2, k1);

  if(keyNumB === true && keyEquB === true && valEquB === true) {
    return true;
  }

  return false;
}
