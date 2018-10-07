let studentScore = 15;
let possibleScore = 20; 

const calculateScore = (sScore, pScore) => {
    let finalScore = (sScore / pScore); 
    let letterGrade = '';
    if (finalScore >= .9) {
        letterGrade = 'A';
    } else if (finalScore >=.8 && finalScore <=.89) {
       letterGrade = 'B';
    } else if (finalScore >=.7 && finalScore <=.79) {
       letterGrade = 'C';
    } else if (finalScore >=.6 && finalScore <=.69) {
       letterGrade = 'D'
    } else {
       letterGrade = 'F'; 
    }
    console.log(`You have receieved a ${letterGrade}, you scored a ${finalScore * 100}% on the exam`)
}

calculateScore(studentScore, possibleScore); 