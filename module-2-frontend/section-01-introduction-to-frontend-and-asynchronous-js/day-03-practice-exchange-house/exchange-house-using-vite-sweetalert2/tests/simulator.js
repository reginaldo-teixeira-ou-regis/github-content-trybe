const data = {
  base: "USD",
  rates: {
    AED: 3.672041,
    AFN: 87.254323,
    ALL: 103.808776,
    AMD: 487.566902,
    ANG: 1.801513,
    AOA: 606.635687,
    ARS: 98.444253,
    AUD: 1.3807,
    AWG: 1.799939,
    AZN: 1.700457,
    BAM: 1.672448,
    BBD: 1.99988,
    BDT: 85.673541,
    BGN: 1.667704,
    BHD: 0.376721,
    BIF: 1993.53281,
    BMD: 1.000073,
    BND: 1.351488,
    BOB: 6.929277,
    BRL: 5.287437,
    BSD: 1.000195,
    BTC: 0.000023,
    BTN: 73.795766,
    BWP: 11.218129,
    BYN: 2.514497,
    BZD: 2.023547,
    CAD: 1.275545,
    CDF: 1992.735412,
    CHF: 0.92541,
    CLF: 0.028645,
    CLP: 787.206873,
    CNH: 6.464451,
    CNY: 6.463146,
    COP: 3843.450094,
    CRC: 626.476973,
    CUC: 0.999886,
    CUP: 25.737807,
    CVE: 94.353891,
    CZK: 21.670609,
    DJF: 178.638967,
    DKK: 6.348816,
    DOP: 56.705477,
    DZD: 136.876414,
    EGP: 15.703244,
    ERN: 14.995535,
    ETB: 46.439746,
    EUR: 0.853971,
    FJD: 2.099787,
    FKP: 0.73255,
    GBP: 0.732926,
    GEL: 3.103853,
    GGP: 0.732488,
    GHS: 6.064596,
    GIP: 0.732726,
    GMD: 51.574457,
    GNF: 9804.304794,
    GTQ: 7.760963,
    GYD: 209.836042,
    HKD: 7.781654,
    HNL: 24.18167,
    HRK: 6.39873,
    HTG: 98.840154,
    HUF: 303.373627,
    IDR: 14234.488728,
    ILS: 3.20051,
    IMP: 0.732775,
    INR: 73.713685,
    IQD: 1464.917603,
    IRR: 42186.42348,
    ISK: 129.686206,
    JEP: 0.732525,
    JMD: 148.692818,
    JOD: 0.709056,
    JPY: 109.755312,
    KES: 110.34548,
    KGS: 84.757481,
    KHR: 4091.089842,
    KMF: 419.741057,
    KPW: 899.551373,
    KRW: 1177.955593,
    KWD: 0.300735,
    KYD: 0.837109,
    KZT: 427.137808,
    LAK: 9874.377633,
    LBP: 1517.348958,
    LKR: 200.423471,
    LRD: 171.290597,
    LSL: 14.816992,
    LYD: 4.52779,
    MAD: 9.017918,
    MDL: 17.591087,
    MGA: 3975.131946,
    MKD: 52.687589,
    MMK: 1834.864118,
    MNT: 2838.201979,
    MOP: 8.048295,
    MRO: 356.821757,
    MRU: 36.466246,
    MUR: 42.389485,
    MVR: 15.392886,
    MWK: 818.739642,
    MXN: 20.063288,
    MYR: 4.184656,
    MZN: 63.810762,
    NAD: 14.75278,
    NGN: 411.295273,
    NIO: 35.236492,
    NOK: 8.645356,
    NPR: 118.073535,
    NZD: 1.426433,
    OMR: 0.385263,
    PAB: 1.000079,
    PEN: 4.128209,
    PGK: 3.523935,
    PHP: 50.309607,
    PKR: 169.831718,
    PLN: 3.9417,
    PYG: 6888.715204,
    QAR: 3.639248,
    RON: 4.225506,
    RSD: 100.544437,
    RUB: 72.846938,
    RWF: 1019.037138,
    SAR: 3.748379,
    SBD: 8.04801,
    SCR: 13.281473,
    SDG: 440.280173,
    SEK: 8.683857,
    SGD: 1.350462,
    SHP: 0.732556,
    SLL: 10457.275755,
    SOS: 580.499182,
    SRD: 21.399984,
    SSP: 130.19578,
    STD: 20687.655578,
    STN: 21.131716,
    SVC: 8.779281,
    SYP: 1256.658336,
    SZL: 14.820205,
    THB: 33.453687,
    TJS: 11.373911,
    TMT: 3.50878,
    TND: 2.800736,
    TOP: 2.260916,
    TRY: 8.662492,
    TTD: 6.795843,
    TWD: 27.715892,
    TZS: 2314.843695,
    UAH: 26.718313,
    UGX: 3535.759261,
    USD: 1,
    UYU: 42.729323,
    UZS: 10715.088893,
    VES: 4047227.676895,
    VND: 22796.116133,
    VUV: 111.575998,
    WST: 2.559575,
    XAF: 559.913083,
    XAG: 0.044772,
    XAU: 0.000965,
    XCD: 2.702387,
    XDR: 0.705538,
    XOF: 559.91297,
    XPD: 0.001371,
    XPF: 101.859723,
    XPT: 0.001078,
    YER: 250.725649,
    ZAR: 14.782923,
    ZMW: 16.493039,
    ZWL: 321.84003,
  },
};

const trybeSimulator = (moduleName, functionName) => {
  const apiURL = jest.spyOn(moduleName, functionName);
  apiURL.mockResolvedValue(data);
  return apiURL;
};

module.exports = {
  trybeSimulator,
  data,
};
