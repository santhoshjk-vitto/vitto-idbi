export type Prospect = {
  id: string;
  name: string;
  segment: string;
  city: string;
  aiScore: number;
  potentialValue: number; // in lakhs INR
  intent: "Personal Loan" | "Home Loan" | "Credit Card" | "Fixed Deposit" | "Investment" | "Insurance";
  nextBestAction: string;
  timing: string;
  status: "New" | "Engaged" | "Meeting Scheduled" | "Converted";
  reason: string;
  since: string;
};

export const prospects: Prospect[] = [
  { id: "P-1042", name: "Arjun Mehta", segment: "Salaried · Sr. Manager", city: "Bengaluru", aiScore: 92, potentialValue: 12.4, intent: "Personal Loan", nextBestAction: "Schedule Meeting", timing: "Today · 11:00 AM", status: "New", reason: "Recent 3.2x salary bump + EMI closure last month", since: "2d" },
  { id: "P-1044", name: "Kavya Iyer", segment: "Business Owner", city: "Chennai", aiScore: 89, potentialValue: 42.0, intent: "Home Loan", nextBestAction: "Send Pre-Approval", timing: "Today · 2:00 PM", status: "Engaged", reason: "Searching real estate portals + 4 property visits", since: "5d" },
  { id: "P-1051", name: "Rahul Sharma", segment: "Salaried · IT", city: "Pune", aiScore: 87, potentialValue: 8.5, intent: "Credit Card", nextBestAction: "Call Customer", timing: "Best 11 AM – 1 PM", status: "New", reason: "High online spend, no premium card on file", since: "1d" },
  { id: "P-1058", name: "Priya Nair", segment: "Salaried · Doctor", city: "Kochi", aiScore: 84, potentialValue: 22.0, intent: "Fixed Deposit", nextBestAction: "Offer FD Renewal", timing: "This week", status: "Engaged", reason: "Large inflow ₹18L · idle in savings 21 days", since: "3d" },
  { id: "P-1063", name: "Vikram Rao", segment: "HNI · Business", city: "Hyderabad", aiScore: 81, potentialValue: 65.0, intent: "Investment", nextBestAction: "Schedule Wealth Review", timing: "Fri · 4:00 PM", status: "Meeting Scheduled", reason: "Portfolio review overdue · rate cut opportunity", since: "6d" },
  { id: "P-1071", name: "Ananya Gupta", segment: "Salaried · Marketing", city: "Mumbai", aiScore: 78, potentialValue: 5.2, intent: "Insurance", nextBestAction: "Send Term Plan Offer", timing: "This week", status: "New", reason: "New dependent added · no term cover", since: "2d" },
  { id: "P-1074", name: "Rohan Desai", segment: "Salaried · Consultant", city: "Ahmedabad", aiScore: 76, potentialValue: 14.0, intent: "Personal Loan", nextBestAction: "WhatsApp Pre-approval", timing: "Today", status: "New", reason: "Browsed loan calculator 4x in 7 days", since: "1d" },
  { id: "P-1082", name: "Sneha Reddy", segment: "Salaried · HR", city: "Bengaluru", aiScore: 74, potentialValue: 3.8, intent: "Credit Card", nextBestAction: "Email Offer", timing: "This week", status: "Engaged", reason: "Rewards card upgrade eligible", since: "4d" },
  { id: "P-1088", name: "Manish Verma", segment: "Business Owner", city: "Delhi", aiScore: 71, potentialValue: 28.0, intent: "Home Loan", nextBestAction: "Follow up", timing: "Mon · 10:00 AM", status: "Meeting Scheduled", reason: "Existing customer · property near approved list", since: "8d" },
  { id: "P-1091", name: "Divya Menon", segment: "Salaried · Finance", city: "Kolkata", aiScore: 69, potentialValue: 6.4, intent: "Investment", nextBestAction: "Share SIP Options", timing: "This week", status: "New", reason: "Consistent surplus of ₹40k/mo · low equity exposure", since: "2d" },
];

export const dashboardMetrics = {
  totalProspects: 12842,
  highPriority: 2134,
  conversionRate: 24.6,
  aiScoreAvg: 78.4,
  potentialRevenue: 4.82, // Cr
  rmActions: 3241,
  modelAccuracy: 98.5,
};

export const conversionTrend = [
  { month: "Feb", conversion: 14.2, target: 18 },
  { month: "Mar", conversion: 16.8, target: 18 },
  { month: "Apr", conversion: 19.1, target: 20 },
  { month: "May", conversion: 21.4, target: 20 },
  { month: "Jun", conversion: 22.9, target: 22 },
  { month: "Jul", conversion: 24.6, target: 22 },
];

export const productMix = [
  { product: "Personal Loan", value: 32 },
  { product: "Home Loan", value: 24 },
  { product: "Credit Card", value: 18 },
  { product: "Fixed Deposit", value: 12 },
  { product: "Investment", value: 9 },
  { product: "Insurance", value: 5 },
];

export const campaigns = [
  { id: "C-01", name: "Pre-approved PL · Bengaluru IT", reach: 4210, engaged: 1834, converted: 412, revenue: 3.2, status: "Active" },
  { id: "C-02", name: "Home Loan · Rate Cut Nudge", reach: 2870, engaged: 1120, converted: 264, revenue: 4.9, status: "Active" },
  { id: "C-03", name: "Premium Credit Card Upgrade", reach: 6110, engaged: 2044, converted: 388, revenue: 0.9, status: "Active" },
  { id: "C-04", name: "FD Renewal · HNI Segment", reach: 1240, engaged: 902, converted: 271, revenue: 2.6, status: "Ending" },
  { id: "C-05", name: "SIP Onboarding · Millennials", reach: 3980, engaged: 1301, converted: 208, revenue: 0.6, status: "Draft" },
];

export const segments = [
  { name: "Salaried Professionals", pct: 42, count: 5394 },
  { name: "Business Owners", pct: 21, count: 2697 },
  { name: "HNI", pct: 8, count: 1027 },
  { name: "Millennials", pct: 18, count: 2312 },
  { name: "Senior Citizens", pct: 11, count: 1412 },
];

export function inr(cr: number) {
  return `₹ ${cr.toFixed(2)} Cr`;
}
export function lakhs(l: number) {
  if (l >= 100) return `₹ ${(l / 100).toFixed(2)} Cr`;
  return `₹ ${l.toFixed(1)} L`;
}
