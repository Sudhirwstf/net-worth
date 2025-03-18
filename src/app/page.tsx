import FeedbackTable from "@/components/feedbackTable";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
export default function DashboardPage() {
  return (
    <main className="p-2 w-full bg-background flex flex-row gap-5 h-full">
      <div className="w-[20%] h-full">
        <Sidebar />
      </div>
      <div className="lg:w-[75%] ">
        <Navbar />
        <FeedbackTable />
      </div>
    </main>
  );
}
