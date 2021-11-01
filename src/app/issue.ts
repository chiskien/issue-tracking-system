export interface Issue {
  issueNo: number;
  title: string;
  description: string;
  priority: "low" | "high"
  type: "Feature" | "Bug" | "Documentation";
  completed?: Date; //optional because new issues may not have this property yet
}
