interface ShirtSizes {
  [key: string]: string;
}

interface LanguageTranslations {
  size: string;
  tshirtTypeFemale: string;
  tshirtTypeMale: string;
  tshirtTypeChild: string;
  button: string;
  paymentMethod: string;
  paymentMethodCard: string;
  paymentMethodTransfer: string;
  paymentMethodBLIK: string;
  paymentMethodGooglePay: string;
  shirtSizes: ShirtSizes;
  language: string;
}

interface Translations {
  PL: LanguageTranslations;
  EN: LanguageTranslations;
}

const translations: Translations = {
  PL: {
    language: 'PL',
    size: 'Rozmiar koszulki:',
    tshirtTypeFemale: 'Damska',
    tshirtTypeMale: 'Męska',
    tshirtTypeChild: 'Dziecięca',
    button: 'Zapisz się na bieg',
    paymentMethod: 'Wybierz metodę płatności',
    paymentMethodCard: 'Karta płatnicza',
    paymentMethodTransfer: 'Przelew tradycyjny',
    paymentMethodBLIK: 'BLIK',
    paymentMethodGooglePay: 'Google Pay',
    shirtSizes: {
      'rozmiar 36 (S)': 'rozmiar 36 (S)',
      'rozmiar 38 (M)': 'rozmiar 38 (M)',
      'rozmiar 40 (L)': 'rozmiar 40 (L)',
      'rozmiar 42 (XL)': 'rozmiar 42 (XL)',
      'rozmiar S': 'rozmiar S',
      'rozmiar M': 'rozmiar M',
      'rozmiar L': 'rozmiar L',
      'rozmiar XL': 'rozmiar XL',
      '104': '104',
      '110': '110',
      '116': '116',
      '122': '122',
      '134': '134',
      '140': '140',
    },
  },
  EN: {
    language: 'EN',
    size: 'T-shirt size:',
    tshirtTypeFemale: 'Female',
    tshirtTypeMale: 'Male',
    tshirtTypeChild: 'Child',
    button: 'Sign up for the run',
    paymentMethod: 'Choose payment method',
    paymentMethodCard: 'Credit Card',
    paymentMethodTransfer: 'Bank Transfer',
    paymentMethodBLIK: 'BLIK',
    paymentMethodGooglePay: 'Google Pay',
    shirtSizes: {
      'rozmiar 36 (S)': 'size 36 (S)',
      'rozmiar 38 (M)': 'size 38 (M)',
      'rozmiar 40 (L)': 'size 40 (L)',
      'rozmiar 42 (XL)': 'size 42 (XL)',
      'rozmiar S': 'size S',
      'rozmiar M': 'size M',
      'rozmiar L': 'size L',
      'rozmiar XL': 'size XL',
      '104': '104',
      '110': '110',
      '116': '116',
      '122': '122',
      '134': '134',
      '140': '140',
    },
  },
};

export default translations;
