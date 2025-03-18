import Image from "next/image";

interface Answer {
  responseText: string;
  structuredResponse?: any;
}

interface NetworkResponse {
  question: string;
  answer: Answer;
}

const sampleData: NetworkResponse = {
  question: "A credit",
  answer: {
    responseText:
      "A credit card is a financial tool issued by banks that allows cardholders to borrow funds to pay for goods and services. These funds must be repaid over time, with interest if not paid in full by the due date. Below are some key points about credit cards:\n\n- *Credit Line: An approved limit set by the bank which the cardholder can utilize.\n- **Interest Rates: Charges applied if the borrowed amount is not repaid in full by the statement due date.\n- **Rewards: Many cards offer rewards like cashback, miles, or points for spending.\n- **Fees: Cards may have annual fees, late payment fees, or other charges depending on the issuer.\n- **Eligibility*: Typically based on income, credit score, and residency requirements. \n\nWould you like to know more specific details about different credit cards?",
    structuredResponse: {
      "Key Features of Credit Card": "Borrow funds for purchases, repayable over time.",
      "Interest Rates": "Applicable if balance unpaid.",
      Rewards: "Cashback, miles, or points for eligible spends.",
      Fees: "Can include annual, late payment, and other types of fees.",
      Eligibility: "Depends on income, credit score, and residency.",
    },
  },
};

async function getData(id: string) {
  try {
    const res = await fetch(`https://net-worth-be-udv82.ondigitalocean.app/user/question/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    return data?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

const formatText = (text: any) => {
  return text?.split("\n").map((line: any, index: any) => {
    if (line.startsWith("-")) {
      return (
        <li
          key={index}
          dangerouslySetInnerHTML={{
            __html: line.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>").replace(/\*(.*?)\*/g, "<i>$1</i>"),
          }}
        />
      );
    }
    return (
      <p
        key={index}
        dangerouslySetInnerHTML={{
          __html: line.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>").replace(/\*(.*?)\*/g, "<i>$1</i>"),
        }}
      />
    );
  });
};
const toTitleCase = (str: any) => {
  return str.replace(/\w\S*/g, (txt: any) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

const renderTextWithLinks = (text: any) => {
  return text;
};
export default async function QuestionPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const data = await getData(id);
  return (
    <main className="bg-black p-2 px-5 flex flex-col gap-2 h-full max-w-[450px] min-w-[350px] mx-auto overflow-scroll">
      <header className="py-10 px-5 pb-3 flex justify-center items-center bg-[url('/images/background_shape.png')] bg-cover bg-center bg-no-repeat">
        <h1 className="text-white text-lg font-normal tracking-tight">Discover</h1>
      </header>
      {!data ? (
        <div className="flex justify-center items-center">
          <p className="text-white text-lg font-normal tracking-tight">No answer available for the provided question</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {/* question */}
          <div className="self-end min-h-[2.5rem] rounded-tl-md rounded-bl-md px-3 py-2 bg-gray-800/50 max-w-[260px]">
            <p className="text-xs text-gray-400 break-words">{data?.question}</p>
          </div>
          {/* answer response text */}
          <div className="self-start relative min-h-[2.5rem] rounded-md px-5 py-2 bg-gray-700/50 max-w-[300px]">
            <div className="absolute -top-[60px] -left-8">
              <Image src="/images/star.svg" alt="Ai icon" width="100" height="100" />
            </div>
            <p className="text-xs text-white break-words">{formatText(data?.answer?.responseText)}</p>
          </div>
          {/* answer structed text */}
          <div className="w-full border border-[#262a3438] rounded-sm overflow-hidden items-center">
            <div className="flex justify-start items-center bg-[#232630db] w-full rounded-t-sm">
              <p className="text-[10px] font-normal p-[10px] text-white w-[39.7%] border-r border-[#122f5526]">
                Category
              </p>
              <p className="text-[12px] font-normal p-[10px] text-white  border-l border-[#2f333b61]">Details</p>
            </div>
            {/* structured text table */}
            {data?.answer?.structuredResponse &&
              Object.entries(data.answer.structuredResponse).map(([key, value], index) => (
                <div
                  key={key}
                  className={`flex justify-between items-center w-full gap-[10px] border border-[#262a3447] ${
                    index % 2 === 0 ? "bg-[#262a341a]" : "bg-transparent"
                  }`}
                >
                  <div className="text-white w-[40%] min-h-[60px] py-[5px] px-[10px] border-r border-[#122f5526]">
                    <span className="text-white text-xs">{toTitleCase(key)}</span>
                  </div>
                  <div className="text-xs min-h-[60px] text-white  flex-2 py-[5px] px-[10px] ">
                    {renderTextWithLinks(value)}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </main>
  );
}
