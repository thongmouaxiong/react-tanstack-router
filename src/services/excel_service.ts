// utils/exportToExcel.ts
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import type { User } from "@/routes/excel";
const header = ["User ID", "Full Name", "Email Address"];

export const exportToExcel = (data: User[], fileName: string) => {
  const mappedData = data.map((item) => ({
    "User ID": item.id,
    "Full Name": item.name,
    "Email Address": item.email,
  }));

  // Create a worksheet
  const worksheet = XLSX.utils.json_to_sheet(mappedData, { header: header });

  // Create a workbook and append the worksheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // Generate a buffer
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

  // Save the file
  const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
  saveAs(blob, `${fileName}.xlsx`);
};
