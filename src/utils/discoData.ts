export interface DiscoInfo {
  code: string;
  name: string;
  fullName: string;
  city: string;
  ratePerUnit: number; // in PKR
}

export const DISCO_DATA: DiscoInfo[] = [
  {
    code: 'lesco',
    name: 'LESCO',
    fullName: 'Lahore Electric Supply Company',
    city: 'Lahore & adjacent areas',
    ratePerUnit: 48,
  },
  {
    code: 'ke',
    name: 'K-Electric',
    fullName: 'K-Electric (formerly KESC)',
    city: 'Karachi & adjoining regions',
    ratePerUnit: 55,
  },
  {
    code: 'iesco',
    name: 'IESCO',
    fullName: 'Islamabad Electric Supply Company',
    city: 'Islamabad, Rawalpindi, Jhelum',
    ratePerUnit: 50,
  },
  {
    code: 'fesco',
    name: 'FESCO',
    fullName: 'Faisalabad Electric Supply Company',
    city: 'Faisalabad & Sargodha region',
    ratePerUnit: 48,
  },
  {
    code: 'mepco',
    name: 'MEPCO',
    fullName: 'Multan Electric Power Company',
    city: 'Multan & Southern Punjab',
    ratePerUnit: 51,
  },
  {
    code: 'pesco',
    name: 'PESCO',
    fullName: 'Peshawar Electric Supply Company',
    city: 'Peshawar & Khyber Pakhtunkhwa',
    ratePerUnit: 49,
  },
  {
    code: 'gepco',
    name: 'GEPCO',
    fullName: 'Gujranwala Electric Power Company',
    city: 'Gujranwala, Sialkot, Gujrat',
    ratePerUnit: 50,
  },
  {
    code: 'hesco',
    name: 'HESCO',
    fullName: 'Hyderabad Electric Supply Company',
    city: 'Hyderabad & Sindh districts',
    ratePerUnit: 53,
  },
  {
    code: 'qesco',
    name: 'QESCO',
    fullName: 'Quetta Electric Supply Company',
    city: 'Quetta & Balochistan province',
    ratePerUnit: 54,
  },
  {
    code: 'sepco',
    name: 'SEPCO',
    fullName: 'Sukkur Electric Power Company',
    city: 'Sukkur, Larkana, Nawabshah',
    ratePerUnit: 52,
  },
];
