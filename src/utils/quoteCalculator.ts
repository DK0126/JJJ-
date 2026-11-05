export type MoveCategory =
  | 'office_corporate'
  | 'office_small'
  | 'residential_2bhk'
  | 'residential_3bhk'
  | 'industrial_it';

export interface QuoteFormInput {
  fromAddress: string;
  toAddress: string;
  shiftingDate: string;
  moveCategory?: MoveCategory;
  contactPhone?: string;
}

export interface QuoteValidationErrors {
  fromAddress?: string;
  toAddress?: string;
  shiftingDate?: string;
}

export interface CalculatedQuote {
  referenceId: string;
  fromAddress: string;
  toAddress: string;
  shiftingDate: string;
  moveCategory: MoveCategory;
  moveCategoryLabel: string;
  distanceKm: number;
  estimatedMinInr: number;
  estimatedMaxInr: number;
  formattedRange: string;
  recommendedVehicle: string;
  crewSize: number;
  estimatedDowntimeHours: string;
  isWeekendOrPeak: boolean;
}

export interface EnquiryFormInput {
  fullName: string;
  phoneNumber: string;
  shiftingType: string;
  city: string;
  shiftingDate: string;
}

export interface EnquiryValidationErrors {
  fullName?: string;
  phoneNumber?: string;
  shiftingType?: string;
  city?: string;
  shiftingDate?: string;
}

export interface SubmittedEnquiry {
  enquiryId: string;
  fullName: string;
  phoneNumber: string;
  shiftingType: string;
  shiftingTypeLabel: string;
  city: string;
  shiftingDate: string;
  submittedAt: string;
  recipientEmail: string;
}

export const SHIFTING_TYPES = [
  { value: 'household', label: 'Household Shifting (1/2/3 BHK & Villa)' },
  { value: 'office_corporate', label: 'Office & Corporate Relocation' },
  { value: 'vehicle_transit', label: 'Car & Bike Carrier Transportation' },
  { value: 'industrial_machinery', label: 'Industrial & Server Rack Shifting' },
  { value: 'warehousing', label: 'Storage & Warehousing Services' },
] as const;

export const INDIAN_CITIES: string[] = [
  'Chennai (Tamil Nadu)',
  'Guduvancheri (Tamil Nadu)',
  'Tambaram (Tamil Nadu)',
  'Chengalpattu (Tamil Nadu)',
  'Coimbatore (Tamil Nadu)',
  'Madurai (Tamil Nadu)',
  'Tiruchirappalli (Tamil Nadu)',
  'Salem (Tamil Nadu)',
  'Tirunelveli (Tamil Nadu)',
  'Vellore (Tamil Nadu)',
  'Erode (Tamil Nadu)',
  'Thoothukudi (Tamil Nadu)',
  'Tiruppur (Tamil Nadu)',
  'Hosur (Tamil Nadu)',
  'Kanchipuram (Tamil Nadu)',
  'Thanjavur (Tamil Nadu)',
  'Dindigul (Tamil Nadu)',
  'Nagercoil (Tamil Nadu)',
  'Kumbakonam (Tamil Nadu)',
  'Cuddalore (Tamil Nadu)',
  'Karur (Tamil Nadu)',
  'Sivakasi (Tamil Nadu)',
  'Udhagamandalam / Ooty (Tamil Nadu)',
  'Puducherry (Puducherry UT)',
  'Bengaluru (Karnataka)',
  'Mysuru (Karnataka)',
  'Mangaluru (Karnataka)',
  'Hubballi-Dharwad (Karnataka)',
  'Belagavi (Karnataka)',
  'Kalaburagi (Karnataka)',
  'Davanagere (Karnataka)',
  'Ballari (Karnataka)',
  'Shivamogga (Karnataka)',
  'Tumakuru (Karnataka)',
  'Udupi (Karnataka)',
  'Hyderabad (Telangana)',
  'Warangal (Telangana)',
  'Nizamabad (Telangana)',
  'Karimnagar (Telangana)',
  'Khammam (Telangana)',
  'Secunderabad (Telangana)',
  'Visakhapatnam (Andhra Pradesh)',
  'Vijayawada (Andhra Pradesh)',
  'Guntur (Andhra Pradesh)',
  'Nellore (Andhra Pradesh)',
  'Kurnool (Andhra Pradesh)',
  'Rajahmundry (Andhra Pradesh)',
  'Tirupati (Andhra Pradesh)',
  'Kakinada (Andhra Pradesh)',
  'Anantapur (Andhra Pradesh)',
  'Eluru (Andhra Pradesh)',
  'Kochi (Kerala)',
  'Thiruvananthapuram (Kerala)',
  'Kozhikode (Kerala)',
  'Thrissur (Kerala)',
  'Kollam (Kerala)',
  'Palakkad (Kerala)',
  'Alappuzha (Kerala)',
  'Kannur (Kerala)',
  'Kottayam (Kerala)',
  'Mumbai (Maharashtra)',
  'Navi Mumbai (Maharashtra)',
  'Thane (Maharashtra)',
  'Pune (Maharashtra)',
  'Nagpur (Maharashtra)',
  'Nashik (Maharashtra)',
  'Chhatrapati Sambhajinagar / Aurangabad (Maharashtra)',
  'Solapur (Maharashtra)',
  'Kolhapur (Maharashtra)',
  'Amravati (Maharashtra)',
  'Sangli (Maharashtra)',
  'New Delhi (Delhi NCR)',
  'Gurugram (Haryana)',
  'Faridabad (Haryana)',
  'Panipat (Haryana)',
  'Ambala (Haryana)',
  'Karnal (Haryana)',
  'Rohtak (Haryana)',
  'Hisar (Haryana)',
  'Noida (Uttar Pradesh)',
  'Greater Noida (Uttar Pradesh)',
  'Ghaziabad (Uttar Pradesh)',
  'Lucknow (Uttar Pradesh)',
  'Kanpur (Uttar Pradesh)',
  'Varanasi (Uttar Pradesh)',
  'Agra (Uttar Pradesh)',
  'Prayagraj (Uttar Pradesh)',
  'Meerut (Uttar Pradesh)',
  'Bareilly (Uttar Pradesh)',
  'Aligarh (Uttar Pradesh)',
  'Moradabad (Uttar Pradesh)',
  'Gorakhpur (Uttar Pradesh)',
  'Jhansi (Uttar Pradesh)',
  'Mathura (Uttar Pradesh)',
  'Ahmedabad (Gujarat)',
  'Surat (Gujarat)',
  'Vadodara (Gujarat)',
  'Rajkot (Gujarat)',
  'Gandhinagar (Gujarat)',
  'Bhavnagar (Gujarat)',
  'Jamnagar (Gujarat)',
  'Anand (Gujarat)',
  'Vapi (Gujarat)',
  'Bharuch (Gujarat)',
  'Kolkata (West Bengal)',
  'Howrah (West Bengal)',
  'Siliguri (West Bengal)',
  'Durgapur (West Bengal)',
  'Asansol (West Bengal)',
  'Kharagpur (West Bengal)',
  'Jaipur (Rajasthan)',
  'Jodhpur (Rajasthan)',
  'Udaipur (Rajasthan)',
  'Kota (Rajasthan)',
  'Bikaner (Rajasthan)',
  'Ajmer (Rajasthan)',
  'Bhilwara (Rajasthan)',
  'Alwar (Rajasthan)',
  'Chandigarh (Chandigarh UT)',
  'Ludhiana (Punjab)',
  'Amritsar (Punjab)',
  'Jalandhar (Punjab)',
  'Patiala (Punjab)',
  'Bathinda (Punjab)',
  'Mohali (Punjab)',
  'Bhopal (Madhya Pradesh)',
  'Indore (Madhya Pradesh)',
  'Gwalior (Madhya Pradesh)',
  'Jabalpur (Madhya Pradesh)',
  'Ujjain (Madhya Pradesh)',
  'Sagar (Madhya Pradesh)',
  'Patna (Bihar)',
  'Gaya (Bihar)',
  'Muzaffarpur (Bihar)',
  'Bhagalpur (Bihar)',
  'Darbhanga (Bihar)',
  'Bhubaneswar (Odisha)',
  'Cuttack (Odisha)',
  'Rourkela (Odisha)',
  'Berhampur (Odisha)',
  'Sambalpur (Odisha)',
  'Ranchi (Jharkhand)',
  'Jamshedpur (Jharkhand)',
  'Dhanbad (Jharkhand)',
  'Bokaro Steel City (Jharkhand)',
  'Raipur (Chhattisgarh)',
  'Bhilai-Durg (Chhattisgarh)',
  'Bilaspur (Chhattisgarh)',
  'Guwahati (Assam)',
  'Dibrugarh (Assam)',
  'Silchar (Assam)',
  'Jorhat (Assam)',
  'Dehradun (Uttarakhand)',
  'Haridwar (Uttarakhand)',
  'Roorkee (Uttarakhand)',
  'Haldwani (Uttarakhand)',
  'Shimla (Himachal Pradesh)',
  'Solan (Himachal Pradesh)',
  'Dharamshala (Himachal Pradesh)',
  'Jammu (Jammu & Kashmir)',
  'Srinagar (Jammu & Kashmir)',
  'Panaji (Goa)',
  'Margao (Goa)',
  'Vasco da Gama (Goa)',
  'Agartala (Tripura)',
  'Shillong (Meghalaya)',
  'Imphal (Manipur)',
  'Aizawl (Mizoram)',
  'Kohima (Nagaland)',
  'Dimapur (Nagaland)',
  'Itanagar (Arunachal Pradesh)',
  'Gangtok (Sikkim)',
  'Port Blair (Andaman & Nicobar UT)',
];

export function validateEnquiryForm(input: EnquiryFormInput): EnquiryValidationErrors {
  const errors: EnquiryValidationErrors = {};
  const nameTrimmed = (input.fullName || '').trim();
  const phoneTrimmed = (input.phoneNumber || '').trim();
  const digitsOnly = phoneTrimmed.replace(/\D/g, '');
  const typeTrimmed = (input.shiftingType || '').trim();
  const cityTrimmed = (input.city || '').trim();
  const dateTrimmed = (input.shiftingDate || '').trim();

  if (!nameTrimmed) {
    errors.fullName = 'Please enter your full name';
  } else if (nameTrimmed.length < 2) {
    errors.fullName = 'Name must be at least 2 characters';
  }

  if (!phoneTrimmed) {
    errors.phoneNumber = 'Please enter your phone number';
  } else if (digitsOnly.length < 10 || digitsOnly.length > 13) {
    errors.phoneNumber = 'Please enter a valid 10-digit mobile number';
  }

  if (!typeTrimmed) {
    errors.shiftingType = 'Please select type of shifting';
  }

  if (!cityTrimmed) {
    errors.city = 'Please select a city in India';
  }

  if (!dateTrimmed) {
    errors.shiftingDate = 'Please select your shifting date';
  }

  return errors;
}

export function createEnquiryRecord(
  input: EnquiryFormInput,
  recipientEmail = 'uv.dineshkumar0126@gmail.com'
): SubmittedEnquiry {
  const foundType = SHIFTING_TYPES.find((t) => t.value === input.shiftingType);
  const seed = `${input.fullName.trim()}-${input.phoneNumber.trim()}-${input.city.trim()}-${input.shiftingDate.trim()}`;
  let code = 1000;
  for (let i = 0; i < seed.length; i++) {
    code = (code * 19 + seed.charCodeAt(i)) % 9000;
  }

  return {
    enquiryId: `JJJ-ENQ-${1000 + code}`,
    fullName: input.fullName.trim(),
    phoneNumber: input.phoneNumber.trim(),
    shiftingType: input.shiftingType,
    shiftingTypeLabel: foundType ? foundType.label : input.shiftingType,
    city: input.city.trim(),
    shiftingDate: input.shiftingDate.trim(),
    submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    recipientEmail,
  };
}

const CHENNAI_HUB_COORDS: Record<string, number> = {
  guduvancheri: 0,
  tambaram: 12,
  chengalpattu: 21,
  vandalur: 6,
  urapakkam: 4,
  maraimalai: 9,
  sriperumbudur: 28,
  oragadam: 22,
  guindy: 27,
  velachery: 26,
  omr: 25,
  sholinganallur: 24,
  siruseri: 21,
  tnagar: 31,
  't nagar': 31,
  't. nagar': 31,
  annanagar: 36,
  'anna nagar': 36,
  adyar: 30,
  porur: 30,
  ambattur: 38,
  egmore: 35,
  nungambakkam: 34,
  chennai: 32,
};

export const MOVE_CATEGORY_CONFIG: Record<
  MoveCategory,
  {
    label: string;
    baseCost: number;
    perKmRate: number;
    vehicle: string;
    crew: number;
    downtime: string;
  }
> = {
  office_corporate: {
    label: 'Corporate / IT Office (20–100+ Workstations)',
    baseCost: 14500,
    perKmRate: 185,
    vehicle: '19ft Closed Container Fleet',
    crew: 8,
    downtime: '< 4 Hours (Overnight Shift)',
  },
  office_small: {
    label: 'Small Office / Studio (Up to 20 Desks)',
    baseCost: 7800,
    perKmRate: 120,
    vehicle: '14ft Eicher Closed Carrier',
    crew: 5,
    downtime: '2–3 Hours',
  },
  residential_2bhk: {
    label: '2 BHK Household Relocation',
    baseCost: 5500,
    perKmRate: 95,
    vehicle: '14ft Cushioned Home Carrier',
    crew: 4,
    downtime: '3–4 Hours Door-to-Door',
  },
  residential_3bhk: {
    label: '3 BHK / Villa Full Packing & Moving',
    baseCost: 8900,
    perKmRate: 135,
    vehicle: '17ft High-Cube Home Container',
    crew: 6,
    downtime: '4–5 Hours Door-to-Door',
  },
  industrial_it: {
    label: 'Server Rack & Precision Lab Equipment',
    baseCost: 18500,
    perKmRate: 220,
    vehicle: '22ft Air-Ride Shockproof Container',
    crew: 10,
    downtime: 'Zero-Data-Loss Window (< 3 Hrs)',
  },
};

export function validateQuoteForm(input: QuoteFormInput): QuoteValidationErrors {
  const errors: QuoteValidationErrors = {};
  const fromTrimmed = (input.fromAddress || '').trim();
  const toTrimmed = (input.toAddress || '').trim();
  const dateTrimmed = (input.shiftingDate || '').trim();

  if (!fromTrimmed) {
    errors.fromAddress = 'Please enter pickup location (e.g., Anna Nagar, Chennai)';
  } else if (fromTrimmed.length < 3) {
    errors.fromAddress = 'Pickup address must be at least 3 characters';
  }

  if (!toTrimmed) {
    errors.toAddress = 'Please enter drop location (e.g., Guduvancheri)';
  } else if (toTrimmed.length < 3) {
    errors.toAddress = 'Drop address must be at least 3 characters';
  } else if (fromTrimmed && fromTrimmed.toLowerCase() === toTrimmed.toLowerCase()) {
    errors.toAddress = 'Drop location must be different from pickup location';
  }

  if (!dateTrimmed) {
    errors.shiftingDate = 'Please select your preferred shifting date';
  }

  return errors;
}

export function estimateDistanceKm(fromAddress: string, toAddress: string): number {
  const normFrom = fromAddress.trim().toLowerCase();
  const normTo = toAddress.trim().toLowerCase();

  let fromMarker: number | null = null;
  let toMarker: number | null = null;

  for (const [key, kmFromGuduvancheri] of Object.entries(CHENNAI_HUB_COORDS)) {
    if (normFrom.includes(key) && fromMarker === null) {
      fromMarker = kmFromGuduvancheri;
    }
    if (normTo.includes(key) && toMarker === null) {
      toMarker = kmFromGuduvancheri;
    }
  }

  if (fromMarker !== null && toMarker !== null) {
    const diff = Math.abs(fromMarker - toMarker);
    return Math.max(8, diff === 0 ? 12 : diff + 4);
  }

  const combined = `${normFrom}->${normTo}`;
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    hash = (hash * 31 + combined.charCodeAt(i)) % 1000;
  }
  return 14 + (hash % 35);
}

export function formatInr(amount: number): string {
  return `₹${Math.round(amount).toLocaleString('en-IN')}`;
}

export function calculateRelocationQuote(input: QuoteFormInput): CalculatedQuote {
  const category: MoveCategory = input.moveCategory || 'office_corporate';
  const config = MOVE_CATEGORY_CONFIG[category];
  const distanceKm = estimateDistanceKm(input.fromAddress, input.toAddress);

  const parsedDate = new Date(input.shiftingDate);
  const dayOfWeek = Number.isNaN(parsedDate.getTime()) ? 2 : parsedDate.getUTCDay();
  const isWeekendOrPeak = dayOfWeek === 0 || dayOfWeek === 6;

  const rawEstimate =
    (config.baseCost + distanceKm * config.perKmRate) * (isWeekendOrPeak ? 1.08 : 1.0);

  const estimatedMinInr = Math.round(rawEstimate / 100) * 100;
  const estimatedMaxInr = Math.round((rawEstimate * 1.18) / 100) * 100;

  const seed = `${input.fromAddress.trim()}-${input.toAddress.trim()}-${input.shiftingDate.trim()}`;
  let code = 1000;
  for (let i = 0; i < seed.length; i++) {
    code = (code * 17 + seed.charCodeAt(i)) % 9000;
  }
  const referenceId = `JJJ-${1000 + code}`;

  return {
    referenceId,
    fromAddress: input.fromAddress.trim(),
    toAddress: input.toAddress.trim(),
    shiftingDate: input.shiftingDate.trim(),
    moveCategory: category,
    moveCategoryLabel: config.label,
    distanceKm,
    estimatedMinInr,
    estimatedMaxInr,
    formattedRange: `${formatInr(estimatedMinInr)} – ${formatInr(estimatedMaxInr)}`,
    recommendedVehicle: config.vehicle,
    crewSize: config.crew,
    estimatedDowntimeHours: config.downtime,
    isWeekendOrPeak,
  };
}
