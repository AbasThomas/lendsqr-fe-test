import { User } from '@/types/user';

/**
 * Generate mock user data for testing
 * This generates 500 users as required by the assessment
 */
export const generateMockUsers = (count: number = 500): User[] => {
  const organizations = ['Lendsqr', 'Irorun', 'Lendstar'];
  const statuses: User['status'][] = ['active', 'inactive', 'pending', 'blacklisted'];
  const genders: User['gender'][] = ['Male', 'Female'];
  const maritalStatuses: User['maritalStatus'][] = ['Single', 'Married', 'Divorced', 'Widowed'];
  const educationLevels = ['B.Sc', 'M.Sc', 'Ph.D', 'HND', 'OND'];
  const employmentStatuses = ['Employed', 'Self-employed', 'Unemployed'];
  const sectors = ['FinTech', 'Healthcare', 'Education', 'Technology', 'Agriculture'];
  const residenceTypes = ["Parent's Apartment", 'Own Apartment', 'Rented Apartment'];
  
  const firstNames = [
    'Grace', 'Adedeji', 'Debby', 'Tosin', 'John', 'Mary', 'Peter', 'Sarah',
    'David', 'Ruth', 'James', 'Esther', 'Michael', 'Rebecca', 'Daniel', 'Rachel',
    'Joseph', 'Hannah', 'Samuel', 'Abigail', 'Benjamin', 'Elizabeth', 'Joshua', 'Miriam'
  ];
  
  const lastNames = [
    'Effiom', 'Ogana', 'Dokunmu', 'Adeyemi', 'Okafor', 'Bello', 'Ibrahim',
    'Adeleke', 'Okonkwo', 'Musa', 'Ajayi', 'Eze', 'Yusuf', 'Nwosu', 'Hassan'
  ];

  const users: User[] = [];

  for (let i = 0; i < count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const fullName = `${firstName} ${lastName}`;
    const username = `${firstName.toLowerCase()}${i}`;
    const email = `${username}@${organizations[i % organizations.length].toLowerCase()}.com`;
    
    // Generate random date within the last 3 years
    const dateJoined = new Date(
      Date.now() - Math.floor(Math.random() * 3 * 365 * 24 * 60 * 60 * 1000)
    ).toISOString();

    const user: User = {
      id: `LSQ${String(i + 1).padStart(7, '0')}`,
      organization: organizations[i % organizations.length],
      username,
      email,
      phoneNumber: `0${Math.floor(7000000000 + Math.random() * 2999999999)}`,
      dateJoined,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      
      // Personal Information
      fullName,
      bvn: String(Math.floor(10000000000 + Math.random() * 89999999999)),
      gender: genders[Math.floor(Math.random() * genders.length)],
      maritalStatus: maritalStatuses[Math.floor(Math.random() * maritalStatuses.length)],
      children: String(Math.floor(Math.random() * 5)),
      typeOfResidence: residenceTypes[Math.floor(Math.random() * residenceTypes.length)],
      
      // Education and Employment
      levelOfEducation: educationLevels[Math.floor(Math.random() * educationLevels.length)],
      employmentStatus: employmentStatuses[Math.floor(Math.random() * employmentStatuses.length)],
      sectorOfEmployment: sectors[Math.floor(Math.random() * sectors.length)],
      durationOfEmployment: `${Math.floor(Math.random() * 10) + 1} years`,
      officeEmail: `${username}@${sectors[Math.floor(Math.random() * sectors.length)].toLowerCase()}.com`,
      monthlyIncome: `₦${(Math.floor(Math.random() * 400) + 100) * 1000}.00 - ₦${(Math.floor(Math.random() * 400) + 400) * 1000}.00`,
      loanRepayment: `${Math.floor(Math.random() * 100) + 10},000`,
      
      // Socials
      twitter: `@${username}`,
      facebook: fullName,
      instagram: `@${username}`,
      
      // Guarantor
      guarantor: {
        fullName: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
        phoneNumber: `0${Math.floor(7000000000 + Math.random() * 2999999999)}`,
        emailAddress: `guarantor${i}@email.com`,
        relationship: ['Sister', 'Brother', 'Parent', 'Friend', 'Colleague'][Math.floor(Math.random() * 5)],
      },
      
      // Bank Details
      accountBalance: `₦${(Math.floor(Math.random() * 500) + 50) * 1000}.00`,
      accountNumber: String(Math.floor(1000000000 + Math.random() * 8999999999)),
      bankName: ['Providus Bank', 'GTBank', 'Access Bank', 'First Bank', 'Zenith Bank'][Math.floor(Math.random() * 5)],
    };

    users.push(user);
  }

  return users;
};

/**
 * Get mock users (generates once and caches)
 */
let cachedMockUsers: User[] | null = null;

export const getMockUsers = (): User[] => {
  if (!cachedMockUsers) {
    cachedMockUsers = generateMockUsers(500);
  }
  return cachedMockUsers;
};
