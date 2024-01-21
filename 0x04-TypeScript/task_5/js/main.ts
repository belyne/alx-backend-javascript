// task_5/js/main.ts

// Interface with brand property for MajorCredits
interface MajorCredits {
  credits: number;
  brand: 'MajorCreditsBrand'; // Brand property
}

// Interface with brand property for MinorCredits
interface MinorCredits {
  credits: number;
  brand: 'MinorCreditsBrand'; // Brand property
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCreditsBrand',
  };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCreditsBrand',
  };
}

// Example usage
const majorSubject1: MajorCredits = { credits: 3, brand: 'MajorCreditsBrand' };
const majorSubject2: MajorCredits = { credits: 4, brand: 'MajorCreditsBrand' };
console.log(sumMajorCredits(majorSubject1, majorSubject2));

const minorSubject1: MinorCredits = { credits: 2, brand: 'MinorCreditsBrand' };
const minorSubject2: MinorCredits = { credits: 1, brand: 'MinorCreditsBrand' };
console.log(sumMinorCredits(minorSubject1, minorSubject2));

