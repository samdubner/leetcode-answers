//without switch
var isValid = function (s) {
  let openings = [];

  let brackets = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let i = 0; i < s.length; i++) {
    if (["[", "{", "("].includes(s[i])) {
      openings.push(s[i]);
    } else {
      let last = openings.pop();
      if (brackets[s[i]] != last) return false;
    }
  }

  return !openings.length;
};

//with switch
var isValid = function (s) {
  let openings = [];

  for (let i = 0; i < s.length; i++) {
    if (["[", "{", "("].includes(s[i])) {
      openings.push(s[i]);
    } else {
      let last = openings.pop();
      switch (s[i]) {
        case ")":
          if (last !== "(") return false;
          break;
        case "]":
          if (last !== "[") return false;
          break;
        case "}":
          if (last !== "{") return false;
          break;
      }
    }
  }

  return !openings.length;
};
