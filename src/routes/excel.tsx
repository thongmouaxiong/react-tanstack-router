import { exportToExcel } from "@/services/excel_service";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/excel")({
  component: ExcelPage,
});

export type User = {
  id: number;
  name: string;
  email: string;
};

function ExcelPage() {
  const data: User[] = [
    { id: 1, name: "Alice", email: "alice@email.com" },
    { id: 2, name: "Bob", email: "bob@email.com" },
  ];

  const handleExport = () => {
    exportToExcel(data, "Users");
  };

  return (
    <div className="p-10">
      <button
        onClick={handleExport}
        className="h-10 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Export to Excel
      </button>
    </div>
  );
}
