import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateQuoteForm,
  estimateDistanceKm,
  calculateRelocationQuote,
  validateEnquiryForm,
  createEnquiryRecord,
  INDIAN_CITIES,
} from './quoteCalculator';

test('validateEnquiryForm returns field errors when inputs are empty', () => {
  const errors = validateEnquiryForm({
    fullName: '',
    phoneNumber: '',
    shiftingType: '',
    city: '',
    shiftingDate: '',
  });
  assert.ok(errors.fullName);
  assert.ok(errors.phoneNumber);
  assert.ok(errors.shiftingType);
  assert.ok(errors.city);
  assert.ok(errors.shiftingDate);
});

test('validateEnquiryForm validates 10-digit phone number and passes valid enquiry', () => {
  const invalidPhone = validateEnquiryForm({
    fullName: 'Dinesh Kumar',
    phoneNumber: '12345',
    shiftingType: 'office_corporate',
    city: 'Chennai (Tamil Nadu)',
    shiftingDate: '2026-11-25',
  });
  assert.ok(invalidPhone.phoneNumber);

  const valid = validateEnquiryForm({
    fullName: 'Dinesh Kumar',
    phoneNumber: '9840082100',
    shiftingType: 'office_corporate',
    city: 'Chennai (Tamil Nadu)',
    shiftingDate: '2026-11-25',
  });
  assert.deepEqual(valid, {});
});

test('createEnquiryRecord builds deterministic enquiry ID and maps shiftingTypeLabel', () => {
  assert.ok(INDIAN_CITIES.length > 100);
  const record = createEnquiryRecord({
    fullName: 'Dinesh Kumar',
    phoneNumber: '9840082100',
    shiftingType: 'office_corporate',
    city: 'Guduvancheri (Tamil Nadu)',
    shiftingDate: '2026-11-25',
  });
  assert.ok(record.enquiryId.startsWith('JJJ-ENQ-'));
  assert.equal(record.shiftingTypeLabel, 'Office & Corporate Relocation');
  assert.equal(record.recipientEmail, 'uv.dineshkumar0126@gmail.com');
});

test('validateQuoteForm returns errors when required inputs are empty', () => {
  const errors = validateQuoteForm({
    fromAddress: '',
    toAddress: '',
    shiftingDate: '',
  });
  assert.ok(errors.fromAddress);
  assert.ok(errors.toAddress);
  assert.ok(errors.shiftingDate);
});

test('estimateDistanceKm and calculateRelocationQuote work deterministically', () => {
  const km = estimateDistanceKm('Anna Nagar, Chennai', 'Guduvancheri');
  assert.equal(km, 40);
  const quote = calculateRelocationQuote({
    fromAddress: 'OMR Sholinganallur, Chennai',
    toAddress: 'Guduvancheri',
    shiftingDate: '2026-11-18',
    moveCategory: 'office_corporate',
  });
  assert.ok(quote.referenceId.startsWith('JJJ-'));
});
