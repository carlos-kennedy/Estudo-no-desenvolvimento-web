function getScore(score) {
  let scoreA = score >= 90 && score <= 100;
  let scoreB = score >= 80 && score <= 89;
  let scoreC = score >= 70 && score <= 79;
  let scoreD = score >= 60 && score <= 69;
  let scoreF = score >= 0 && score <= 59;

  let endPoints;

  if (scoreA) {
    endPoints = "A";
  } else if (scoreB) {
    endPoints = "B";
  } else if (scoreC) {
    endPoints = "C";
  } else if (scoreD) {
    endPoints = "D";
  } else if (scoreF) {
    endPoints = "F";
  } else {
    endPoints = "Esta nota é inválida";
  }

  console.log(endPoints);

  return endPoints;
}

getScore(90);
