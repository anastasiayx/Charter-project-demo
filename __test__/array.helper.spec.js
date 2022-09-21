import { arrayGroupByPropertyValue, sumArrayItemPropertyNumValue } from '../utils/array.helper'

describe('arrayGroupByPropertyValue', () => {
    const transactionsMock = [
        {
            t_id: "1",
            spent: 130,
            create_date: new Date("8/29/22").toISOString(),
            rewards: 110,
            c_id: "sdfs34234fss"
        },
        {
            t_id: "2",
            spent: 200,
            create_date: new Date("7/29/22").toISOString(),
            rewards: 250,
            c_id: "sdfs34234fss"
        },
        {
            t_id: "3",
            spent: 30,
            create_date: new Date("6/29/22").toISOString(),
            rewards: 0,
            c_id: "sdfs34234fss"
        },
        {
            t_id: "4",
            spent: 187,
            create_date: new Date("7/29/22").toISOString(),
            rewards: 224,
            c_id: "sdfs34234fss"
        },
        {
            t_id: "5",
            spent: 130,
            create_date: new Date("8/29/22").toISOString(),
            rewards: 110,
            c_id: "asdfdsffddsf"
        },
        {
            t_id: "6",
            spent: 200,
            create_date: new Date("7/29/22").toISOString(),
            rewards: 250,
            c_id: "asdfdsffddsf"
        },
        {
            t_id: "7",
            spent: 154,
            create_date: new Date("7/19/22").toISOString(),
            rewards: 158,
            c_id: "asdfdsffddsf"
        },
        {
            t_id: "8",
            spent: 43,
            create_date: new Date("7/29/22").toISOString(),
            rewards: 0,
            c_id: "asdfdsffddsf"
        }
    ]

    it('throw the error if arguments are invalid', () => {
        expect(() => {
            arrayGroupByPropertyValue(transactionsMock);
        }).toThrow('invalid args');
        expect(() => {
            arrayGroupByPropertyValue("sd", 'c_id');
        }).toThrow('invalid args');
    })

    it('should group by property value of the item in Array and return an Object', () => {
        const groupByObject = arrayGroupByPropertyValue(transactionsMock, 'c_id');
        expect(groupByObject).toEqual({
            sdfs34234fss: [{
                t_id: "1",
                spent: 130,
                create_date: new Date("8/29/22").toISOString(),
                rewards: 110,
                c_id: "sdfs34234fss"
            },
            {
                t_id: "2",
                spent: 200,
                create_date: new Date("7/29/22").toISOString(),
                rewards: 250,
                c_id: "sdfs34234fss"
            },
            {
                t_id: "3",
                spent: 30,
                create_date: new Date("6/29/22").toISOString(),
                rewards: 0,
                c_id: "sdfs34234fss"
            },
            {
                t_id: "4",
                spent: 187,
                create_date: new Date("7/29/22").toISOString(),
                rewards: 224,
                c_id: "sdfs34234fss"
            },
            ],
            asdfdsffddsf: [{
                t_id: "5",
                spent: 130,
                create_date: new Date("8/29/22").toISOString(),
                rewards: 110,
                c_id: "asdfdsffddsf"
            }, {
                t_id: "6",
                spent: 200,
                create_date: new Date("7/29/22").toISOString(),
                rewards: 250,
                c_id: "asdfdsffddsf"
            },
            {
                t_id: "7",
                spent: 154,
                create_date: new Date("7/19/22").toISOString(),
                rewards: 158,
                c_id: "asdfdsffddsf"
            },
            {
                t_id: "8",
                spent: 43,
                create_date: new Date("7/29/22").toISOString(),
                rewards: 0,
                c_id: "asdfdsffddsf"
            }]
        })
    })
})

describe('sumArrayItemPropertyNumValue', () => {
    const transactionsMock = [
        {
            t_id: "1",
            spent: 130,
            create_date: new Date("8/29/22").toISOString(),
            rewards: 110,
            c_id: "sdfs34234fss"
        },
        {
            t_id: "2",
            spent: 200,
            create_date: new Date("7/29/22").toISOString(),
            rewards: 250,
            c_id: "sdfs34234fss"
        },
        {
            t_id: "3",
            spent: 30,
            create_date: new Date("6/29/22").toISOString(),
            rewards: 0,
            c_id: "sdfs34234fss"
        },
        {
            t_id: "4",
            spent: 187,
            create_date: new Date("7/29/22").toISOString(),
            rewards: 224,
            c_id: "sdfs34234fss"
        },
        {
            t_id: "5",
            spent: 130,
            create_date: new Date("8/29/22").toISOString(),
            rewards: 110,
            c_id: "asdfdsffddsf"
        },
        {
            t_id: "6",
            spent: 200,
            create_date: new Date("7/29/22").toISOString(),
            rewards: 250,
            c_id: "asdfdsffddsf"
        },
        {
            t_id: "7",
            spent: 154,
            create_date: new Date("7/19/22").toISOString(),
            rewards: 158,
            c_id: "asdfdsffddsf"
        },
        {
            t_id: "8",
            spent: 43,
            create_date: new Date("7/29/22").toISOString(),
            rewards: 0,
            c_id: "asdfdsffddsf"
        }
    ]

    it('should throw the error if arguments are invalid', () => {
        expect(() => {
            sumArrayItemPropertyNumValue(transactionsMock);
        }).toThrow('invalid args');
        expect(() => {
            sumArrayItemPropertyNumValue("sd", 'spend');
        }).toThrow('invalid args');
    })

    it('should sum the value of the item property from the array', () => {
        const totalSpent = sumArrayItemPropertyNumValue(transactionsMock, 'spent');
        expect(totalSpent).toEqual(1074)
        const totalPoints = sumArrayItemPropertyNumValue(transactionsMock, 'rewards');
        expect(totalPoints).toEqual(1102)
    })
})