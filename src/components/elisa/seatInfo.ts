type TCoordinates = {
  x: number;
  y: number;
};

type TZone = {
  zone: string;
  coordinates: TCoordinates;
};

type TArea = {
  area_name: string;
  area_color: string;
  price: number;
  zones: TZone[];
};

type TFacility = {
  facility_name: string;
  zones: TZone[];
};

type TSeatInfo = {
  stadium: string;
  info: string;
  areas: TArea[];
  facilities: TFacility[];
};

// area_color: "#4864CA", 지니존
// area_color: "#CE4E9D", KT알파쇼핑석
// area_color: "#EC9341", Y박스석
// area_color: "#4F9236", 지니TV석
// area_color: "#702CA4", 중앙지정석
// area_color: "#C63736", 1루,3루 응원지정석
// area_color: "#211C79", 1루,3루 스카이존
// area_color: "#36A09A", 하이파이브존, 3루 익사이팅석
// area_color: "#5C6064", 1루,3루 휠체어석
// area_color: "#BDBDBD", 외야잔디/자유석
// area_color: "#DB7390", 티빙 테이블석(외야)
// area_color: "#2DB0B2", 키즈랜드 캠핑존(4층)
// area_color: "#1D8DCC", 키즈랜드 캠핑존(5층)

export const seatInfo: TSeatInfo = {
  stadium: "KT Wiz Park",
  info: "x = 0 ~ 3749, y = 0 ~ 6666",
  areas: [
    {
      area_name: "중앙지정석",
      area_color: "#702CA4",
      price: 18000,
      zones: [
        {
          zone: "216",
          coordinates: { x: 2142, y: 3285 },
        },
        {
          zone: "217",
          coordinates: { x: 2058, y: 3340 },
        },
        {
          zone: "218",
          coordinates: { x: 1965, y: 3372 },
        },
        {
          zone: "219",
          coordinates: { x: 1875, y: 3379 },
        },
        {
          zone: "220",
          coordinates: { x: 1788, y: 3387 },
        },
        {
          zone: "221",
          coordinates: { x: 1686, y: 3370 },
        },
        {
          zone: "222",
          coordinates: { x: 1597, y: 3345 },
        },
        {
          zone: "223",
          coordinates: { x: 1524, y: 3296 },
        },
        {
          zone: "313",
          coordinates: { x: 2236, y: 3394 },
        },
        {
          zone: "314",
          coordinates: { x: 2121, y: 3461 },
        },
        {
          zone: "315",
          coordinates: { x: 2009, y: 3504 },
        },
        {
          zone: "316",
          coordinates: { x: 1890, y: 3523 },
        },
        {
          zone: "317",
          coordinates: { x: 1765, y: 3531 },
        },
        {
          zone: "318",
          coordinates: { x: 1655, y: 3504 },
        },
        {
          zone: "319",
          coordinates: { x: 1537, y: 3454 },
        },
        {
          zone: "320",
          coordinates: { x: 1430, y: 3401 },
        },
      ],
    },
    {
      area_name: "1루 응원지정석",
      price: 18000,
      area_color: "#C63736",
      zones: [
        {
          zone: "101",
          coordinates: { x: 2678, y: 2095 },
        },
        {
          zone: "102",
          coordinates: { x: 2642, y: 2171 },
        },
        {
          zone: "103",
          coordinates: { x: 2597, y: 2242 },
        },
        {
          zone: "104",
          coordinates: { x: 2559, y: 2325 },
        },
        {
          zone: "105",
          coordinates: { x: 2521, y: 2408 },
        },
        {
          zone: "106",
          coordinates: { x: 2470, y: 2478 },
        },
        {
          zone: "107",
          coordinates: { x: 2437, y: 2547 },
        },
        {
          zone: "108",
          coordinates: { x: 2389, y: 2624 },
        },
        {
          zone: "109",
          coordinates: { x: 2344, y: 2704 },
        },
        {
          zone: "110",
          coordinates: { x: 2314, y: 2770 },
        },
        {
          zone: "111",
          coordinates: { x: 2256, y: 2847 },
        },
        {
          zone: "112",
          coordinates: { x: 2224, y: 2914 },
        },
        {
          zone: "201",
          coordinates: { x: 2796, y: 2168 },
        },
        {
          zone: "202",
          coordinates: { x: 2756, y: 2245 },
        },
        {
          zone: "203",
          coordinates: { x: 2714, y: 2321 },
        },
        {
          zone: "204",
          coordinates: { x: 2670, y: 2386 },
        },
        {
          zone: "205",
          coordinates: { x: 2630, y: 2468 },
        },
        {
          zone: "206",
          coordinates: { x: 2590, y: 2545 },
        },
        {
          zone: "207",
          coordinates: { x: 2540, y: 2619 },
        },
        {
          zone: "208",
          coordinates: { x: 2499, y: 2687 },
        },
        {
          zone: "209",
          coordinates: { x: 2451, y: 2766 },
        },
        {
          zone: "210",
          coordinates: { x: 2418, y: 2839 },
        },
        {
          zone: "211",
          coordinates: { x: 2373, y: 2919 },
        },
        {
          zone: "212",
          coordinates: { x: 2345, y: 2992 },
        },
        {
          zone: "301",
          coordinates: { x: 2768, y: 2461 },
        },
        {
          zone: "302",
          coordinates: { x: 2746, y: 2542 },
        },
        {
          zone: "303",
          coordinates: { x: 2708, y: 2632 },
        },
        {
          zone: "304",
          coordinates: { x: 2667, y: 2703 },
        },
        {
          zone: "305",
          coordinates: { x: 2628, y: 2771 },
        },
        {
          zone: "306",
          coordinates: { x: 2580, y: 2855 },
        },
        {
          zone: "307",
          coordinates: { x: 2554, y: 2921 },
        },
        {
          zone: "308",
          coordinates: { x: 2506, y: 2995 },
        },
        {
          zone: "309",
          coordinates: { x: 2464, y: 3077 },
        },
      ],
    },
    // {
    //   area_name: "1루 휠체어석",
    //   area_color: "#5C6064",
    //   price: 0,
    //   zones: [
    //     {
    //       zone: "111",
    //       coordinates: { x: 2256, y: 2847 },
    //     },
    //     {
    //       zone: "112",
    //       coordinates: { x: 2224, y: 2914 },
    //     },
    //     {
    //       zone: "113",
    //       coordinates: { x: 2169, y: 3001 },
    //     },
    //     {
    //       zone: "114",
    //       coordinates: { x: 2132, y: 3072 },
    //     },
    //     {
    //       zone: "115",
    //       coordinates: { x: 2086, y: 3138 },
    //     },
    //   ],
    // },
    {
      area_name: "3루 응원지정석",
      area_color: "#C63736",
      price: 18000,
      zones: [
        {
          zone: "119",
          coordinates: { x: 1438, y: 2920 },
        },
        {
          zone: "120",
          coordinates: { x: 1389, y: 2834 },
        },
        {
          zone: "121",
          coordinates: { x: 1354, y: 2774 },
        },
        {
          zone: "122",
          coordinates: { x: 1301, y: 2693 },
        },
        {
          zone: "123",
          coordinates: { x: 1268, y: 2616 },
        },
        {
          zone: "124",
          coordinates: { x: 1216, y: 2542 },
        },
        {
          zone: "125",
          coordinates: { x: 1186, y: 2476 },
        },
        {
          zone: "126",
          coordinates: { x: 1133, y: 2392 },
        },
        {
          zone: "127",
          coordinates: { x: 1092, y: 2322 },
        },
        {
          zone: "128",
          coordinates: { x: 1056, y: 2243 },
        },
        {
          zone: "129",
          coordinates: { x: 1014, y: 2165 },
        },
        {
          zone: "130",
          coordinates: { x: 975, y: 2102 },
        },
        {
          zone: "227",
          coordinates: { x: 1312, y: 2995 },
        },
        {
          zone: "228",
          coordinates: { x: 1276, y: 2920 },
        },
        {
          zone: "229",
          coordinates: { x: 1235, y: 2843 },
        },
        {
          zone: "230",
          coordinates: { x: 1185, y: 2772 },
        },
        {
          zone: "231",
          coordinates: { x: 1147, y: 2696 },
        },
        {
          zone: "232",
          coordinates: { x: 1107, y: 2617 },
        },
        {
          zone: "233",
          coordinates: { x: 1061, y: 2547 },
        },
        {
          zone: "234",
          coordinates: { x: 1026, y: 2477 },
        },
        {
          zone: "235",
          coordinates: { x: 983, y: 2389 },
        },
        {
          zone: "236",
          coordinates: { x: 931, y: 2323 },
        },
        {
          zone: "237",
          coordinates: { x: 899, y: 2244 },
        },
        {
          zone: "238",
          coordinates: { x: 851, y: 2168 },
        },
        {
          zone: "324",
          coordinates: { x: 1197, y: 3072 },
        },
        {
          zone: "325",
          coordinates: { x: 1164, y: 2996 },
        },
        {
          zone: "326",
          coordinates: { x: 1116, y: 2927 },
        },
        {
          zone: "327",
          coordinates: { x: 1074, y: 2853 },
        },
        {
          zone: "328",
          coordinates: { x: 1025, y: 2777 },
        },
        {
          zone: "329",
          coordinates: { x: 982, y: 2698 },
        },
        {
          zone: "330",
          coordinates: { x: 944, y: 2618 },
        },
        {
          zone: "331",
          coordinates: { x: 914, y: 2537 },
        },
        {
          zone: "332",
          coordinates: { x: 868, y: 2459 },
        },
      ],
    },
    // {
    //   area_name: "3루 휠체어석",
    //   area_color: "#5C6064",
    //   price: 0,
    //   zones: [
    //     {
    //       zone: "119",
    //       coordinates: { x: 1438, y: 2920 },
    //     },
    //     {
    //       zone: "120",
    //       coordinates: { x: 1389, y: 2834 },
    //     },
    //     {
    //       zone: "121",
    //       coordinates: { x: 1354, y: 2774 },
    //     },
    //     {
    //       zone: "122",
    //       coordinates: { x: 1301, y: 2693 },
    //     },
    //     {
    //       zone: "123",
    //       coordinates: { x: 1268, y: 2616 },
    //     },
    //     {
    //       zone: "116",
    //       coordinates: { x: 1557, y: 3140 },
    //     },
    //     {
    //       zone: "117",
    //       coordinates: { x: 1523, y: 3065 },
    //     },
    //     {
    //       zone: "118",
    //       coordinates: { x: 1466, y: 2992 },
    //     },
    //   ],
    // },
    {
      area_name: "지니TV석",
      area_color: "#4F9236",
      price: 45000,
      zones: [
        {
          zone: "116",
          coordinates: { x: 1557, y: 3140 },
        },
        {
          zone: "117",
          coordinates: { x: 1523, y: 3065 },
        },
        {
          zone: "118",
          coordinates: { x: 1466, y: 2992 },
        },
        {
          zone: "224",
          coordinates: { x: 1442, y: 3221 },
        },
        {
          zone: "225",
          coordinates: { x: 1410, y: 3149 },
        },
        {
          zone: "226",
          coordinates: { x: 1356, y: 3070 },
        },
        {
          zone: "321",
          coordinates: { x: 1337, y: 3325 },
        },
        {
          zone: "322",
          coordinates: { x: 1298, y: 3223 },
        },
        {
          zone: "323",
          coordinates: { x: 1249, y: 3159 },
        },
      ],
    },
    {
      area_name: "Y박스석",
      area_color: "#EC9341",
      price: 45000,
      zones: [
        {
          zone: "113",
          coordinates: { x: 2169, y: 3001 },
        },
        {
          zone: "114",
          coordinates: { x: 2132, y: 3072 },
        },
        {
          zone: "115",
          coordinates: { x: 2086, y: 3138 },
        },
        {
          zone: "213",
          coordinates: { x: 2292, y: 3070 },
        },
        {
          zone: "214",
          coordinates: { x: 2240, y: 3144 },
        },
        {
          zone: "215",
          coordinates: { x: 2208, y: 3217 },
        },
        {
          zone: "310",
          coordinates: { x: 2416, y: 3154 },
        },
        {
          zone: "311",
          coordinates: { x: 2374, y: 3224 },
        },
        {
          zone: "312",
          coordinates: { x: 2314, y: 3306 },
        },
      ],
    },
    // {
    //   area_name: "스카이박스",
    //   area_color: "#FFFFFF",
    //   price: 0,
    //   zones: [
    //     {
    //       zone: "1",
    //       coordinates: { x: 3030, y: 2354 },
    //     },
    //     {
    //       zone: "2",
    //       coordinates: { x: 3001, y: 2459 },
    //     },
    //     {
    //       zone: "3",
    //       coordinates: { x: 2966, y: 2540 },
    //     },
    //     {
    //       zone: "4",
    //       coordinates: { x: 2919, y: 2608 },
    //     },
    //     {
    //       zone: "5",
    //       coordinates: { x: 2886, y: 2693 },
    //     },
    //     {
    //       zone: "6",
    //       coordinates: { x: 2841, y: 2773 },
    //     },
    //     {
    //       zone: "7",
    //       coordinates: { x: 2795, y: 2856 },
    //     },
    //     {
    //       zone: "8",
    //       coordinates: { x: 2749, y: 2946 },
    //     },
    //     {
    //       zone: "9",
    //       coordinates: { x: 2713, y: 3011 },
    //     },
    //     {
    //       zone: "10",
    //       coordinates: { x: 2666, y: 3080 },
    //     },
    //     {
    //       zone: "11",
    //       coordinates: { x: 2622, y: 3178 },
    //     },
    //     {
    //       zone: "12",
    //       coordinates: { x: 2571, y: 3252 },
    //     },
    //     {
    //       zone: "13",
    //       coordinates: { x: 2542, y: 3327 },
    //     },
    //     {
    //       zone: "14",
    //       coordinates: { x: 2495, y: 3413 },
    //     },
    //     {
    //       zone: "15",
    //       coordinates: { x: 2442, y: 3497 },
    //     },
    //     {
    //       zone: "16",
    //       coordinates: { x: 2373, y: 3601 },
    //     },
    //     {
    //       zone: "17",
    //       coordinates: { x: 2289, y: 3668 },
    //     },
    //     {
    //       zone: "18",
    //       coordinates: { x: 2181, y: 3744 },
    //     },
    //     {
    //       zone: "19",
    //       coordinates: { x: 2074, y: 3781 },
    //     },
    //     {
    //       zone: "20",
    //       coordinates: { x: 1587, y: 3785 },
    //     },
    //     {
    //       zone: "21",
    //       coordinates: { x: 1471, y: 3734 },
    //     },
    //     {
    //       zone: "22",
    //       coordinates: { x: 1368, y: 3681 },
    //     },
    //     {
    //       zone: "23",
    //       coordinates: { x: 1276, y: 3602 },
    //     },
    //     {
    //       zone: "24",
    //       coordinates: { x: 1211, y: 3505 },
    //     },
    //     {
    //       zone: "25",
    //       coordinates: { x: 1160, y: 3400 },
    //     },
    //     {
    //       zone: "26",
    //       coordinates: { x: 1121, y: 3333 },
    //     },
    //     {
    //       zone: "27",
    //       coordinates: { x: 1069, y: 3250 },
    //     },
    //     {
    //       zone: "28",
    //       coordinates: { x: 1029, y: 3176 },
    //     },
    //     {
    //       zone: "29",
    //       coordinates: { x: 983, y: 3094 },
    //     },
    //     {
    //       zone: "30",
    //       coordinates: { x: 948, y: 3017 },
    //     },
    //     {
    //       zone: "31",
    //       coordinates: { x: 898, y: 2936 },
    //     },
    //   ],
    // },
    {
      area_name: "1루 스카이존",
      area_color: "#211C79",
      price: 9000,
      zones: [
        {
          zone: "401",
          coordinates: { x: 2777, y: 3299 },
        },
        {
          zone: "402",
          coordinates: { x: 2740, y: 3382 },
        },
        {
          zone: "403",
          coordinates: { x: 2694, y: 3465 },
        },
        {
          zone: "404",
          coordinates: { x: 2653, y: 3544 },
        },
        {
          zone: "405",
          coordinates: { x: 2619, y: 3628 },
        },
        {
          zone: "406",
          coordinates: { x: 2554, y: 3709 },
        },
        {
          zone: "407",
          coordinates: { x: 2477, y: 3811 },
        },
        {
          zone: "408",
          coordinates: { x: 2378, y: 3900 },
        },
        {
          zone: "409",
          coordinates: { x: 2265, y: 3973 },
        },
        {
          zone: "410",
          coordinates: { x: 2145, y: 4022 },
        },
        {
          zone: "411",
          coordinates: { x: 2022, y: 4057 },
        },
        {
          zone: "412",
          coordinates: { x: 1894, y: 4065 },
        },
      ],
    },
    {
      area_name: "3루 스카이존",
      area_color: "#211C79",
      price: 9000,
      zones: [
        {
          zone: "413",
          coordinates: { x: 1766, y: 4061 },
        },
        {
          zone: "414",
          coordinates: { x: 1639, y: 4047 },
        },
        {
          zone: "415",
          coordinates: { x: 1493, y: 4010 },
        },
        {
          zone: "416",
          coordinates: { x: 1393, y: 3965 },
        },
        {
          zone: "417",
          coordinates: { x: 1285, y: 3893 },
        },
        {
          zone: "418",
          coordinates: { x: 1181, y: 3805 },
        },
        {
          zone: "419",
          coordinates: { x: 1100, y: 3716 },
        },
        {
          zone: "420",
          coordinates: { x: 1038, y: 3624 },
        },
        {
          zone: "421",
          coordinates: { x: 1001, y: 3548 },
        },
        {
          zone: "422",
          coordinates: { x: 948, y: 3467 },
        },
        {
          zone: "423",
          coordinates: { x: 907, y: 3382 },
        },
        {
          zone: "424",
          coordinates: { x: 864, y: 3308 },
        },
        {
          zone: "425",
          coordinates: { x: 833, y: 3227 },
        },
        {
          zone: "426",
          coordinates: { x: 785, y: 3140 },
        },
        {
          zone: "427",
          coordinates: { x: 738, y: 3053 },
        },
        {
          zone: "428",
          coordinates: { x: 693, y: 2983 },
        },
        {
          zone: "429",
          coordinates: { x: 647, y: 2893 },
        },
        {
          zone: "430",
          coordinates: { x: 610, y: 2805 },
        },
        {
          zone: "431",
          coordinates: { x: 565, y: 2717 },
        },
        {
          zone: "432",
          coordinates: { x: 508, y: 2641 },
        },
      ],
    },
    {
      area_name: "티빙 테이블석(외야)",
      area_color: "#DB7390",
      price: 25000,
      zones: [
        {
          zone: "501",
          coordinates: { x: 2496, y: 1378 },
        },
        {
          zone: "502",
          coordinates: { x: 2585, y: 1440 },
        },
        {
          zone: "503",
          coordinates: { x: 2700, y: 1498 },
        },
        {
          zone: "504",
          coordinates: { x: 2792, y: 1574 },
        },
        {
          zone: "505",
          coordinates: { x: 2869, y: 1632 },
        },
      ],
    },
    {
      area_name: "키즈랜드 캠핑존",
      area_color: "#FFFFFF",
      price: 0,
      zones: [
        {
          zone: "",
          coordinates: { x: 3015, y: 2853 },
        },
      ],
    },
    {
      area_name: "익사이팅석",
      area_color: "#36A09A",
      price: 25000,
      zones: [
        {
          zone: "",
          coordinates: { x: 1348, y: 2561 },
        },
      ],
    },
    {
      area_name: "하이파이브존",
      area_color: "#36A09A",
      price: 25000,
      zones: [
        {
          zone: "",
          coordinates: { x: 2291, y: 2556 },
        },
      ],
    },
    {
      area_name: "지니존",
      area_color: "#4864CA",
      price: 60000,
      zones: [
        {
          zone: "",
          coordinates: { x: 1819, y: 3178 },
        },
      ],
    },
    {
      area_name: "KT알파쇼핑석",
      area_color: "#CE4E9D",
      price: 50000,
      zones: [
        {
          zone: "",
          coordinates: { x: 1817, y: 3269 },
        },
      ],
    },
    {
      area_name: "외야잔디/자유석",
      area_color: "#BDBDBD",
      price: 10000,
      zones: [
        {
          zone: "",
          coordinates: { x: 2297, y: 1689 },
        },
        {
          zone: "",
          coordinates: { x: 1339, y: 1689 },
        },
      ],
    },
  ],
  facilities: [
    {
      facility_name: "매표소1",
      zones: [
        {
          zone: "",
          coordinates: { x: 1750, y: 1397 },
        },
      ],
    },
    {
      facility_name: "매표소2",
      zones: [
        {
          zone: "",
          coordinates: { x: 1419, y: 4271 },
        },
      ],
    },
    {
      facility_name: "매점1",
      zones: [
        {
          zone: "",
          coordinates: { x: 1171, y: 1649 },
        },
      ],
    },
    {
      facility_name: "매점2",
      zones: [
        {
          zone: "",
          coordinates: { x: 3013, y: 1451 },
        },
      ],
    },
    {
      facility_name: "매점3",
      zones: [
        {
          zone: "",
          coordinates: { x: 938, y: 2799 },
        },
      ],
    },
    {
      facility_name: "매점4",
      zones: [
        {
          zone: "",
          coordinates: { x: 1295, y: 3463 },
        },
      ],
    },
    {
      facility_name: "매점5",
      zones: [
        {
          zone: "",
          coordinates: { x: 2332, y: 3452 },
        },
      ],
    },
    {
      facility_name: "매점6",
      zones: [
        {
          zone: "",
          coordinates: { x: 2720, y: 2795 },
        },
      ],
    },
    {
      facility_name: "매점7",
      zones: [
        {
          zone: "",
          coordinates: { x: 3193, y: 2663 },
        },
      ],
    },
    {
      facility_name: "매점8",
      zones: [
        {
          zone: "",
          coordinates: { x: 2124, y: 4306 },
        },
      ],
    },
    {
      facility_name: "화장실1",
      zones: [
        {
          zone: "",
          coordinates: { x: 556, y: 1621 },
        },
      ],
    },
    {
      facility_name: "화장실2",
      zones: [
        {
          zone: "",
          coordinates: { x: 3367, y: 1695 },
        },
      ],
    },
    {
      facility_name: "Gate1-1",
      zones: [
        {
          zone: "",
          coordinates: { x: 1969, y: 1414 },
        },
      ],
    },
    {
      facility_name: "Gate1-2",
      zones: [
        {
          zone: "",
          coordinates: { x: 2181, y: 1465 },
        },
      ],
    },
    {
      facility_name: "Gate3-1",
      zones: [
        {
          zone: "",
          coordinates: { x: 1611, y: 1434 },
        },
      ],
    },
    {
      facility_name: "Gate3-2",
      zones: [
        {
          zone: "",
          coordinates: { x: 1330, y: 1503 },
        },
      ],
    },
    {
      facility_name: "Gate3-3",
      zones: [
        {
          zone: "",
          coordinates: { x: 1033, y: 1658 },
        },
      ],
    },
    {
      facility_name: "1루 메인게이트",
      zones: [
        {
          zone: "",
          coordinates: { x: 2907, y: 3600 },
        },
      ],
    },
    {
      facility_name: "3루 메인게이트",
      zones: [
        {
          zone: "",
          coordinates: { x: 751, y: 3627 },
        },
      ],
    },
  ],
};
