import { z } from "zod";

export type Employee = {
  id: string;
  name: string;
  role: string;
  department: string;
  status: "Active" | "On leave";
};

export const demoEmployees: Employee[] = [
  { id: "WS-1001", name: "Aarav Sharma", role: "HR Manager", department: "Human Resources", status: "Active" },
  { id: "WS-1002", name: "Priya Reddy", role: "Software Engineer", department: "Engineering", status: "Active" },
  { id: "WS-1003", name: "Rahul Nair", role: "Product Designer", department: "Design", status: "On leave" }
];

export const leaveRequestSchema = z.object({
  employeeId: z.string().min(1, "Choose an employee"),
  leaveType: z.enum(["Annual", "Sick", "Personal"]),
  startDate: z.string().min(1, "Choose a start date"),
  endDate: z.string().min(1, "Choose an end date"),
  reason: z.string().trim().min(3, "Reason must contain at least 3 characters")
}).refine(v => v.endDate >= v.startDate, {
  message: "End date must be on or after the start date",
  path: ["endDate"]
});
export type LeaveRequestInput = z.infer<typeof leaveRequestSchema>;

export function calculateInclusiveLeaveDays(startDate: string, endDate: string): number {
  if (!startDate || !endDate || endDate < startDate) return 0;
  const start = new Date(`${startDate}T00:00:00Z`);
  const end = new Date(`${endDate}T00:00:00Z`);
  return Math.floor((end.getTime() - start.getTime()) / 86400000) + 1;
}
