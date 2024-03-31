interface ShirtGenderMap {
  Damska: string;
  Męska: string;
  Dziecięca: string;
}
interface Translation {
  shirtSizes: string;
  register: string;
  name: string;
  lastName: string;
  number: string;
  email: string;
  shirt: string;
  tshirtTypeFemale: string;
  tshirtTypeMale: string;
  tshirtTypeChild: string;
  button: string;
  paymentMethod: string;
  paymentMethodCard: string;
  paymentMethodTransfer: string;
  paymentMethodGooglePay: string;
  paymentMethodBLIK: string;
  statement: string;
  statementTitle: string;
  statementIDo: string;
  statementItem1part1: string;
  span1: string;
  statementItem1part2: string;
  span2: string;
  statementItem1part3: string;
  statementItem2: string;
  statementItem3: string;
  statementItem4: string;
  [key: string]: string | { [key: string]: string } | ShirtGenderMap;
  shirtGenderMap: ShirtGenderMap;
}

interface Translations {
  PL: Translation;
  EN: Translation;
}

const translations: Translations = {
  PL: {
    shirtSizes: 'Rozmiar koszulki',
    register: 'Zarejestruj się',
    name: 'Imię:',
    lastName: 'Nazwisko:',
    number: 'Numer telefonu:',
    email: 'Adres e-mail:',
    shirt: 'Rozmiar koszulki:',
    tshirtTypeFemale: 'Damska',
    tshirtTypeMale: 'Męska',
    tshirtTypeChild: 'Dziecięca',
    button: 'Zapisz się na bieg',
    paymentMethod: 'Wybierz metodę płatności',
    paymentMethodCard: 'Karta płatnicza',
    paymentMethodTransfer: 'Przelew tradycyjny',
    paymentMethodGooglePay: 'Google Pay',
    paymentMethodBLIK: 'BLIK',
    statement: 'Oświadczenie',
    statementTitle:
      'OŚWIADCZENIE GOŚCIA/UCZESTNIKA/ZWYCIĘZCY ZE ZGODĄ NA PRZETWARZANIE DANYCH OSOBOWYCH W POSTACI WIZERUNKU',
    statementIDo: 'oświadczam, iż:',
    statementItem1part1: 'Zapoznałem/am się z ',
    span1: 'Informacją o przetwarzaniu danych osobowych',
    statementItem1part2: ' oraz ',
    span2: 'Klauzulą informacyjną',
    statementItem1part3: ' i przyjmuję ją do wiadomości.',
    statementItem2:
      'Treść Informacji i Klauzuli jest dla mnie zrozumiała i jasna, a wszelkie wątpliwości zostały mi wyjaśnione przez osobę upoważnioną przez Fundację w sposób wyczerpujący.',
    statementItem3:
      'W sposób całkowicie dobrowolny, wyrażam zgodę na przetwarzanie moich danych osobowych w zakresie mojego wizerunku utrwalonego podczas imprezy noworocznej dla celów prowadzonych wewnętrznych i zewnętrznych działań komunikacyjnych i marketingowych przez Fundację. Zostałem/am poinformowany/a, że moje dane osobowe przetwarzane są na podstawie wyrażonej przeze mnie dobrowolnej zgody oraz, że przysługuje mi prawo do jej cofnięcia w każdym czasie, przy czym cofnięcie zgody wywołuje skutki prawne od momentu jego złożenia i będzie pozostawało bez wpływu na przetwarzanie moich danych osobowych dla celów prowadzonych wewnętrznych i zewnętrznych działań komunikacyjnych i marketingowych przed złożeniem oświadczenia o cofnięciu zgody.',
    statementItem4:
      '  W trybie art. 81 ust.1 ustawy o prawie autorskim i prawach pokrewnych wyrażam zgodę na rozpowszechnianie mojego wizerunku przez Fundację utrwalonego w toku Gali, dla celów',
    shirtGenderMap: {
      Damska: 'Damska',
      Męska: 'Męska',
      Dziecięca: 'Dziecięca',
    },
  },

  EN: {
    shirtSizes: 'Shirt Size',
    register: 'Register',
    name: 'Name:',
    lastName: 'Last name:',
    number: 'Phone number:',
    email: 'E-mail address:',
    shirt: 'T-shirt size:',
    tshirtTypeFemale: 'Female',
    tshirtTypeMale: 'Male',
    tshirtTypeChild: 'Child',
    button: 'Sign up for run',
    paymentMethod: 'Choose payment method',
    paymentMethodCard: 'Credit Card',
    paymentMethodTransfer: 'Bank Transfer',
    paymentMethodGooglePay: 'Google Pay',
    paymentMethodBLIK: 'BLIK',
    statement: 'Statement',
    statementTitle:
      'GUEST/PARTICIPANT/WINNER STATEMENT WITH CONSENT TO PROCESS PERSONAL DATA IN THE FORM OF IMAGE',
    statementIDo: 'I hereby declare that:',
    statementItem1part1: 'I have read the ',
    span1: 'Personal Data Processing Information',
    statementItem1part2: ' and the ',
    span2: 'Information Clause',
    statementItem1part3: ', and I acknowledge it.',
    statementItem2:
      'The content of the Information and Clause is clear and understandable to me, and any doubts have been fully explained to me by a person authorized by the Foundation.',
    statementItem3:
      "I voluntarily consent to the processing of my personal data regarding my image recorded during the New Year's event for the purposes of internal and external communication and marketing activities conducted by the Foundation. I have been informed that my personal data is processed based on my voluntary consent, and I have the right to withdraw it at any time, with the withdrawal of consent having legal effects from the moment of its submission and not affecting the processing of my personal data for the purposes of internal and external communication and marketing activities prior to the submission of the consent withdrawal statement.",
    statementItem4:
      'Pursuant to Article 81(1) of the Act on Copyright and Related Rights, I consent to the dissemination of my image recorded during the Gala by the Foundation, for the purposes',
    shirtGenderMap: {
      Damska: 'Female',
      Męska: 'Male',
      Dziecięca: 'Child',
    },
  },
};

export default translations;
