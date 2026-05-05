export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: 'active' | 'inactive' | 'pending' | 'blacklisted';
  
  // Personal Information
  fullName: string;
  bvn: string;
  gender: 'Male' | 'Female' | 'Other';
  maritalStatus: 'Single' | 'Married' | 'Divorced' | 'Widowed';
  children: string;
  typeOfResidence: string;
  
  // Education and Employment
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: string;
  
  // Socials
  twitter?: string;
  facebook?: string;
  instagram?: string;
  
  // Guarantor
  guarantor: {
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    relationship: string;
  };
  
  // Bank Details
  accountBalance?: string;
  accountNumber?: string;
  bankName?: string;
}

export interface UserStats {
  totalUsers: number;
  activeUsers: number;
  usersWithLoans: number;
  usersWithSavings: number;
}

export interface FilterOptions {
  organization?: string;
  username?: string;
  email?: string;
  date?: string;
  phoneNumber?: string;
  status?: string;
}
