interface Feedback {
  id: number;
  question: string;
  answer: string;
  feedback: string;
}

export const feedbackData: Feedback[] = [
  {
    id: 1,
    question: "What is a credit card?",
    answer:
      "A credit card is a financial tool that allows you to borrow money up to a certain limit to make purchases.",
    feedback: "The answer is accurate and provides a clear explanation of what a credit card is.",
  },
  {
    id: 2,
    question: "How does interest work on a credit card?",
    answer: "Interest is charged on the outstanding balance if you don't pay the full amount by the due date.",
    feedback: "The answer correctly explains how interest is applied to credit card balances.",
  },
  {
    id: 3,
    question: "What are the benefits of using a credit card?",
    answer: "Credit cards offer rewards, cashback, and build your credit score when used responsibly.",
    feedback: "The answer highlights the key benefits of using a credit card effectively.",
  },
  {
    id: 4,
    question: "What is a credit score?",
    answer: "A credit score is a numerical representation of your creditworthiness, based on your credit history.",
    feedback: "The answer provides a concise definition of a credit score.",
  },
  {
    id: 5,
    question: "How can I improve my credit score?",
    answer:
      "You can improve your credit score by paying bills on time, keeping credit utilization low, and maintaining a mix of credit types.",
    feedback: "The answer offers practical tips for improving a credit score.",
  },
];
