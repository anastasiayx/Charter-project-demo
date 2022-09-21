// TODO: create Rewards services on the backend
const calculateRewards = (num) => {
    const over100Point = 2;
    const over50Point = 1;
    if (num > 100) {
        return (num - 100) * over100Point + 50 * over50Point;
    } else if (num > 50) {
        return (num - 50) * over50Point;
    } else {
        return 0;
    }
}

export const customers = {
    "sdfs34234fss": {
        id: "sdfs34234fss",
        name: 'Adam',
        age: 18
    },
    "asdfdsffddsf": {
        id: "asdfdsffddsf",
        name: 'Sam',
        age: 26
    },
    "sdfs3sd2fss": {
        id: "sdfs3sd2fss",
        name: 'Pat',
        age: 38
    },
    "asfs3sd2fss": {
        id: "asfs3sd2fss",
        name: 'John',
        age: 18
    }
}
// TODO:Seperate rewards to rewards table
// CURRENT: add rewards in transactions table
export const transactions = [
    {
        t_id: "1",
        spent: 130,
        create_date: new Date("8/29/22").toISOString(),
        rewards: calculateRewards(130),
        c_id: Object.keys(customers)[0]
    },
    {
        t_id: "2",
        spent: 200,
        create_date: new Date("7/29/22").toISOString(),
        rewards: calculateRewards(200),
        c_id: Object.keys(customers)[0]
    },
    {
        t_id: "3",
        spent: 30,
        create_date: new Date("6/29/22").toISOString(),
        rewards: calculateRewards(30),
        c_id: Object.keys(customers)[0]
    },
    {
        t_id: "4",
        spent: 187,
        create_date: new Date("7/29/22").toISOString(),
        rewards: calculateRewards(187),
        c_id: Object.keys(customers)[0]
    },
    {
        t_id: "5",
        spent: 130,
        create_date: new Date("8/29/22").toISOString(),
        rewards: calculateRewards(130),
        c_id: Object.keys(customers)[1]
    },
    {
        t_id: "6",
        spent: 200,
        create_date: new Date("7/29/22").toISOString(),
        rewards: calculateRewards(200),
        c_id: Object.keys(customers)[1]
    },
    {
        t_id: "7",
        spent: 154,
        create_date: new Date("7/19/22").toISOString(),
        rewards: calculateRewards(154),
        c_id: Object.keys(customers)[1]
    },
    {
        t_id: "8",
        spent: 43,
        create_date: new Date("7/29/22").toISOString(),
        rewards: calculateRewards(43),
        c_id: Object.keys(customers)[1]
    }, {
        t_id: "9",
        spent: 187,
        create_date: new Date("8/29/22").toISOString(),
        rewards: calculateRewards(187),
        c_id: Object.keys(customers)[0]
    },
    {
        t_id: "10",
        spent: 130,
        create_date: new Date("6/24/22").toISOString(),
        rewards: calculateRewards(130),
        c_id: Object.keys(customers)[1]
    },
    {
        t_id: "11",
        spent: 50,
        create_date: new Date("8/19/22").toISOString(),
        rewards: calculateRewards(50),
        c_id: Object.keys(customers)[1]
    },
    {
        t_id: "12",
        spent: 54,
        create_date: new Date("7/26/22").toISOString(),
        rewards: calculateRewards(54),
        c_id: Object.keys(customers)[1]
    },
    {
        t_id: "13",
        spent: 43,
        create_date: new Date("7/01/22").toISOString(),
        rewards: calculateRewards(43),
        c_id: Object.keys(customers)[1]
    }
]

