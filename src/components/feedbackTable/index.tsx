import Table from "@/components/common/table";
import { feedbackData } from "@/sampleData";
interface Feedback {
  id: number;
  question: string;
  answer: string;
  feedback: string;
}
export default function FeedbackTable() {
  const tableHeadings = ["Sr.No", "Question", "Answer", "Feedback"];
  return <Table data={feedbackData} itemsPerPage={3} tableHead={tableHeadings} />;
}
