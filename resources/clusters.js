/* Get data */
/*var data = [
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 5,
        "name": "0-0",
        "files": [
            {
                "capture": 0,
                "name": "1448560867674001000.jpg",
                "epoch": 1448560867674,
                "camera": 1
            },
            {
                "capture": 0,
                "name": "1448560868337001000.jpg",
                "epoch": 1448560868337,
                "camera": 1
            },
            {
                "capture": 0,
                "name": "1448560871579001000.jpg",
                "epoch": 1448560871579,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560872649001001.jpg",
                "epoch": 1448560872649,
                "camera": 1
            },
            {
                "capture": 0,
                "name": "1448560873274001000.jpg",
                "epoch": 1448560873274,
                "camera": 1
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 1,
        "name": "0-1",
        "files": [
            {
                "capture": 0,
                "name": "1448560879214001000.jpg",
                "epoch": 1448560879214,
                "camera": 1
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 9,
        "name": "0-2",
        "files": [
            {
                "capture": 0,
                "name": "1448560873524000000.jpg",
                "epoch": 1448560873524,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560874748000001.jpg",
                "epoch": 1448560874748,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560875453000001.jpg",
                "epoch": 1448560875453,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560876178000001.jpg",
                "epoch": 1448560876178,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560876653000001.jpg",
                "epoch": 1448560876653,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560877374000001.jpg",
                "epoch": 1448560877374,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560877873000001.jpg",
                "epoch": 1448560877873,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560878600000001.jpg",
                "epoch": 1448560878600,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560879100000001.jpg",
                "epoch": 1448560879100,
                "camera": 0
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 10,
        "name": "0-3",
        "files": [
            {
                "capture": 0,
                "name": "1448560871451000000.jpg",
                "epoch": 1448560871451,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560874129000000.jpg",
                "epoch": 1448560874129,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560874748000000.jpg",
                "epoch": 1448560874748,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560875453000000.jpg",
                "epoch": 1448560875453,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560876178000000.jpg",
                "epoch": 1448560876178,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560876653000000.jpg",
                "epoch": 1448560876653,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560877374000000.jpg",
                "epoch": 1448560877374,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560877873000000.jpg",
                "epoch": 1448560877873,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560878600000000.jpg",
                "epoch": 1448560878600,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560879100000000.jpg",
                "epoch": 1448560879100,
                "camera": 0
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 22,
        "name": "0-4",
        "files": [
            {
                "capture": 0,
                "name": "1448560860950001000.jpg",
                "epoch": 1448560860950,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560861424001001.jpg",
                "epoch": 1448560861424,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560861923001001.jpg",
                "epoch": 1448560861923,
                "camera": 1
            },
            {
                "capture": 2,
                "name": "1448560863024001002.jpg",
                "epoch": 1448560863024,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560863637001001.jpg",
                "epoch": 1448560863637,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560865316001001.jpg",
                "epoch": 1448560865316,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560865985001001.jpg",
                "epoch": 1448560865985,
                "camera": 1
            },
            {
                "capture": 2,
                "name": "1448560867171001002.jpg",
                "epoch": 1448560867171,
                "camera": 1
            },
            {
                "capture": 2,
                "name": "1448560867674001002.jpg",
                "epoch": 1448560867674,
                "camera": 1
            },
            {
                "capture": 2,
                "name": "1448560868337001002.jpg",
                "epoch": 1448560868337,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560868858001001.jpg",
                "epoch": 1448560868858,
                "camera": 1
            },
            {
                "capture": 2,
                "name": "1448560869492001002.jpg",
                "epoch": 1448560869492,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560870604001001.jpg",
                "epoch": 1448560870604,
                "camera": 1
            },
            {
                "capture": 2,
                "name": "1448560871133001002.jpg",
                "epoch": 1448560871133,
                "camera": 1
            },
            {
                "capture": 2,
                "name": "1448560871579001002.jpg",
                "epoch": 1448560871579,
                "camera": 1
            },
            {
                "capture": 3,
                "name": "1448560873274001003.jpg",
                "epoch": 1448560873274,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560873743001001.jpg",
                "epoch": 1448560873743,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560874372001001.jpg",
                "epoch": 1448560874372,
                "camera": 1
            },
            {
                "capture": 2,
                "name": "1448560874871001002.jpg",
                "epoch": 1448560874871,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560876051001001.jpg",
                "epoch": 1448560876051,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560876774001001.jpg",
                "epoch": 1448560876774,
                "camera": 1
            },
            {
                "capture": 2,
                "name": "1448560877268001002.jpg",
                "epoch": 1448560877268,
                "camera": 1
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 5,
        "name": "0-5",
        "files": [
            {
                "capture": 0,
                "name": "1448560861923001000.jpg",
                "epoch": 1448560861923,
                "camera": 1
            },
            {
                "capture": 0,
                "name": "1448560863024001000.jpg",
                "epoch": 1448560863024,
                "camera": 1
            },
            {
                "capture": 0,
                "name": "1448560863637001000.jpg",
                "epoch": 1448560863637,
                "camera": 1
            },
            {
                "capture": 0,
                "name": "1448560864122001000.jpg",
                "epoch": 1448560864122,
                "camera": 1
            },
            {
                "capture": 0,
                "name": "1448560865316001000.jpg",
                "epoch": 1448560865316,
                "camera": 1
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 4,
        "name": "0-6",
        "files": [
            {
                "capture": 0,
                "name": "1448560861424001000.jpg",
                "epoch": 1448560861424,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560863024001001.jpg",
                "epoch": 1448560863024,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560864796001001.jpg",
                "epoch": 1448560864796,
                "camera": 1
            },
            {
                "capture": 3,
                "name": "1448560866496001003.jpg",
                "epoch": 1448560866496,
                "camera": 1
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 2,
        "name": "0-7",
        "files": [
            {
                "capture": 0,
                "name": "1448560876051001000.jpg",
                "epoch": 1448560876051,
                "camera": 1
            },
            {
                "capture": 0,
                "name": "1448560876774001000.jpg",
                "epoch": 1448560876774,
                "camera": 1
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 6,
        "name": "0-8",
        "files": [
            {
                "capture": 2,
                "name": "1448560872649001002.jpg",
                "epoch": 1448560872649,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560873274001001.jpg",
                "epoch": 1448560873274,
                "camera": 1
            },
            {
                "capture": 0,
                "name": "1448560874372001000.jpg",
                "epoch": 1448560874372,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560874871001001.jpg",
                "epoch": 1448560874871,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560877268001001.jpg",
                "epoch": 1448560877268,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560879214001001.jpg",
                "epoch": 1448560879214,
                "camera": 1
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 20,
        "name": "0-9",
        "files": [
            {
                "capture": 1,
                "name": "1448560860650000001.jpg",
                "epoch": 1448560860650,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560861158000001.jpg",
                "epoch": 1448560861158,
                "camera": 0
            },
            {
                "capture": 2,
                "name": "1448560862144000002.jpg",
                "epoch": 1448560862144,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560863183000001.jpg",
                "epoch": 1448560863183,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560863882000001.jpg",
                "epoch": 1448560863882,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560864350000000.jpg",
                "epoch": 1448560864350,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560865035000001.jpg",
                "epoch": 1448560865035,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560865509000001.jpg",
                "epoch": 1448560865509,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560866197000000.jpg",
                "epoch": 1448560866197,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560866691000001.jpg",
                "epoch": 1448560866691,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560867386000000.jpg",
                "epoch": 1448560867386,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560867862000000.jpg",
                "epoch": 1448560867862,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560868556000000.jpg",
                "epoch": 1448560868556,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560869036000001.jpg",
                "epoch": 1448560869036,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560869802000001.jpg",
                "epoch": 1448560869802,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560870775000001.jpg",
                "epoch": 1448560870775,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560871451000001.jpg",
                "epoch": 1448560871451,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560872123000001.jpg",
                "epoch": 1448560872123,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560872828000000.jpg",
                "epoch": 1448560872828,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560874129000001.jpg",
                "epoch": 1448560874129,
                "camera": 0
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 4,
        "name": "0-10",
        "files": [
            {
                "capture": 0,
                "name": "1448560860650000000.jpg",
                "epoch": 1448560860650,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560861158000000.jpg",
                "epoch": 1448560861158,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560866197000001.jpg",
                "epoch": 1448560866197,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560867862000001.jpg",
                "epoch": 1448560867862,
                "camera": 0
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 5,
        "name": "0-11",
        "files": [
            {
                "capture": 1,
                "name": "1448560862144000001.jpg",
                "epoch": 1448560862144,
                "camera": 0
            },
            {
                "capture": 2,
                "name": "1448560863882000002.jpg",
                "epoch": 1448560863882,
                "camera": 0
            },
            {
                "capture": 2,
                "name": "1448560865035000002.jpg",
                "epoch": 1448560865035,
                "camera": 0
            },
            {
                "capture": 2,
                "name": "1448560865509000002.jpg",
                "epoch": 1448560865509,
                "camera": 0
            },
            {
                "capture": 2,
                "name": "1448560872828000002.jpg",
                "epoch": 1448560872828,
                "camera": 0
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 2,
        "name": "0-12",
        "files": [
            {
                "capture": 0,
                "name": "1448560871133001000.jpg",
                "epoch": 1448560871133,
                "camera": 1
            },
            {
                "capture": 0,
                "name": "1448560877268001000.jpg",
                "epoch": 1448560877268,
                "camera": 1
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 7,
        "name": "0-13",
        "files": [
            {
                "capture": 1,
                "name": "1448560869492001001.jpg",
                "epoch": 1448560869492,
                "camera": 1
            },
            {
                "capture": 0,
                "name": "1448560870604001000.jpg",
                "epoch": 1448560870604,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560871133001001.jpg",
                "epoch": 1448560871133,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560871579001001.jpg",
                "epoch": 1448560871579,
                "camera": 1
            },
            {
                "capture": 3,
                "name": "1448560872649001003.jpg",
                "epoch": 1448560872649,
                "camera": 1
            },
            {
                "capture": 2,
                "name": "1448560873274001002.jpg",
                "epoch": 1448560873274,
                "camera": 1
            },
            {
                "capture": 0,
                "name": "1448560873743001000.jpg",
                "epoch": 1448560873743,
                "camera": 1
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 1,
        "name": "0-14",
        "files": [
            {
                "capture": 2,
                "name": "1448560860650000002.jpg",
                "epoch": 1448560860650,
                "camera": 0
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 15,
        "name": "0-15",
        "files": [
            {
                "capture": 0,
                "name": "1448560862144000000.jpg",
                "epoch": 1448560862144,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560863183000000.jpg",
                "epoch": 1448560863183,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560863882000000.jpg",
                "epoch": 1448560863882,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560864350000001.jpg",
                "epoch": 1448560864350,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560865035000000.jpg",
                "epoch": 1448560865035,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560865509000000.jpg",
                "epoch": 1448560865509,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560866691000000.jpg",
                "epoch": 1448560866691,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560867386000001.jpg",
                "epoch": 1448560867386,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560868556000001.jpg",
                "epoch": 1448560868556,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560869036000000.jpg",
                "epoch": 1448560869036,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560869802000000.jpg",
                "epoch": 1448560869802,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560870775000000.jpg",
                "epoch": 1448560870775,
                "camera": 0
            },
            {
                "capture": 0,
                "name": "1448560872123000000.jpg",
                "epoch": 1448560872123,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560872828000001.jpg",
                "epoch": 1448560872828,
                "camera": 0
            },
            {
                "capture": 1,
                "name": "1448560873524000001.jpg",
                "epoch": 1448560873524,
                "camera": 0
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 5,
        "name": "0-16",
        "files": [
            {
                "capture": 1,
                "name": "1448560864122001001.jpg",
                "epoch": 1448560864122,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560866496001001.jpg",
                "epoch": 1448560866496,
                "camera": 1
            },
            {
                "capture": 0,
                "name": "1448560877987001000.jpg",
                "epoch": 1448560877987,
                "camera": 1
            },
            {
                "capture": 2,
                "name": "1448560879214001002.jpg",
                "epoch": 1448560879214,
                "camera": 1
            },
            {
                "capture": 0,
                "name": "1448560879724001000.jpg",
                "epoch": 1448560879724,
                "camera": 1
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 1,
        "name": "0-17",
        "files": [
            {
                "capture": 0,
                "name": "1448560878486001000.jpg",
                "epoch": 1448560878486,
                "camera": 1
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 1,
        "name": "0-18",
        "files": [
            {
                "capture": 3,
                "name": "1448560872828000003.jpg",
                "epoch": 1448560872828,
                "camera": 0
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 1,
        "name": "0-19",
        "files": [
            {
                "capture": 2,
                "name": "1448560877873000002.jpg",
                "epoch": 1448560877873,
                "camera": 0
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 3,
        "name": "0-20",
        "files": [
            {
                "capture": 0,
                "name": "1448560866496001000.jpg",
                "epoch": 1448560866496,
                "camera": 1
            },
            {
                "capture": 0,
                "name": "1448560867171001000.jpg",
                "epoch": 1448560867171,
                "camera": 1
            },
            {
                "capture": 0,
                "name": "1448560869492001000.jpg",
                "epoch": 1448560869492,
                "camera": 1
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 1,
        "name": "0-21",
        "files": [
            {
                "capture": 0,
                "name": "1448560872649001000.jpg",
                "epoch": 1448560872649,
                "camera": 1
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 1,
        "name": "0-22",
        "files": [
            {
                "capture": 0,
                "name": "1448560879824000000.jpg",
                "epoch": 1448560879824,
                "camera": 0
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 1,
        "name": "0-23",
        "files": [
            {
                "capture": 0,
                "name": "1448560874871001000.jpg",
                "epoch": 1448560874871,
                "camera": 1
            }
        ]
    },
    {
        "directory": "output\\2015-11-26_13_01_00-13_01_59",
        "count": 7,
        "name": "0-24",
        "files": [
            {
                "capture": 0,
                "name": "1448560864796001000.jpg",
                "epoch": 1448560864796,
                "camera": 1
            },
            {
                "capture": 0,
                "name": "1448560865985001000.jpg",
                "epoch": 1448560865985,
                "camera": 1
            },
            {
                "capture": 2,
                "name": "1448560866496001002.jpg",
                "epoch": 1448560866496,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560867171001001.jpg",
                "epoch": 1448560867171,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560867674001001.jpg",
                "epoch": 1448560867674,
                "camera": 1
            },
            {
                "capture": 1,
                "name": "1448560868337001001.jpg",
                "epoch": 1448560868337,
                "camera": 1
            },
            {
                "capture": 0,
                "name": "1448560868858001000.jpg",
                "epoch": 1448560868858,
                "camera": 1
            }
        ]
    }
];
*/
function File(name, epoch, capture, camera) {

    this.name = name;
    this.epoch = epoch;
    this.capture = capture;
    this.camera = camera;

}

function fileFromArray(arr) {
    return new File(arr.name, arr.epoch, arr.capture, arr.camera);
}

function Cluster(name, count, directory, files) {
    this.name = name;
    this.count = count;
    this.directory = directory;

    this.files = [];

    for(var i = 0; i < files.length; i++)
        this.files.push(fileFromArray(files[i]));

    this.getFilesPath = function() {
        var path = [];
        for(var i = 0; i < this.files.length; i++)
            path.push(this.directory + '/' + this.files[i].name);
        return path;
    };

    this.getThumbnailPath = function() {
        return this.directory + '/' + this.files[0].name;
    };

    this.getDuration = function() {
        function getEpoch(f) {
            return f.epoch;
        }
        var epoch = this.files.map(getEpoch);
        var duration = Math.floor((Math.max.apply(Math, epoch) - Math.min.apply(Math, epoch)) / 1000);
        var min = Math.floor(duration / 60);
        min = (min < 10) ? '0' + min : min;
        var sec = (duration % 60);
        sec = (sec < 10) ? '0' + sec : sec;
        return min + ':' + sec;
    }

}

/* Extract clusters */
var clusters = [];
for(var i = 0; i < data.length; i++)
    clusters.push(new Cluster(data[i].name, data[i].count, data[i].directory, data[i].files));
